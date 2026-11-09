#!/usr/bin/env python3
# Converts scraped Wix text + image lists into structured content JSON for the Next.js app.
import ast, json, os, re

SRC='/home/ubuntu'
IMGDIR='/home/ubuntu/conexao_eu_divino/nextjs_space/public/wix'
OUT='/home/ubuntu/conexao_eu_divino/nextjs_space/lib/content'
os.makedirs(OUT, exist_ok=True)

from PIL import Image
def dims(fn):
    try:
        im=Image.open(os.path.join(IMGDIR,fn)); return im.size
    except: return (0,0)

dl=json.load(open(os.path.join(SRC,'wix_dl.json')))
names=dl['names']; pages=dl['pages']
# shared nav/logo images to always skip
SKIP={'fbd835_8c2c637e064243ac8a79f4489cd9940c.jpg','e316f544f9094143b9eac01f1f19e697.png'}

def page_images(key, min_px=150):
    out=[]; seen=set()
    for u in pages[key]:
        n=names[u]
        if n in SKIP or n in seen: continue
        w,h=dims(n)
        if w<min_px and h<min_px: continue  # skip tiny decorative
        seen.add(n); out.append({'src':'/wix/'+n,'w':w,'h':h})
    return out

def load_text(key):
    d=ast.literal_eval(open(os.path.join(SRC,key+'.json')).read())
    return d['text'].replace('\xa0',' ').replace('\u200b','').replace('\r','')

def is_heading(line):
    s=line.strip()
    if not s or len(s)>95: return False
    # numbered heading like '03. A PRESENCA' or '1.'
    letters=[c for c in s if c.isalpha()]
    if not letters: return False
    upp=sum(1 for c in letters if c.isupper())/len(letters)
    if upp>0.7 and len(s)<=90:  # mostly uppercase
        return True
    return False

def to_blocks(text):
    paras=[p.strip() for p in re.split(r'\n\s*\n', text) if p.strip()]
    blocks=[]
    for p in paras:
        # a single-line all-caps para => heading
        if '\n' not in p and is_heading(p):
            blocks.append({'type':'heading','text':p.strip()})
        else:
            # collapse internal single newlines into spaces unless it looks like a verse list
            lines=[l.strip() for l in p.split('\n') if l.strip()]
            # if many short lines (verse/decreto), keep as lines
            shortish=sum(1 for l in lines if len(l)<70)
            if len(lines)>=3 and shortish>=len(lines)*0.6:
                blocks.append({'type':'verse','lines':lines})
            else:
                blocks.append({'type':'para','text':' '.join(lines)})
    return blocks

CONFIG={
 'sobre':{'src':'wix_sobre','title':'A Presença Divina “Eu Sou”','eyebrow':'Sobre','drop_first_lines':2},
 'decretos':{'src':'wix_decretos','title':'Decretos e Afirmações','eyebrow':'Prática da Palavra','drop_first_lines':0},
 'estudos':{'src':'wix_estudos','title':'O Conhecimento Espiritual','eyebrow':'Estudos','drop_first_lines':1},
 'praticas':{'src':'wix_praticas','title':'Práticas e Exercícios','eyebrow':'Práticas','drop_first_lines':1},
 'perolas':{'src':'wix_perolas','title':'Pérolas de Sabedoria','eyebrow':'Reflexão','drop_first_lines':0},
 'canalizacoes':{'src':'wix_canalizacoes','title':'Mensagens de Luz','eyebrow':'Canalizações','drop_first_lines':1},
}

for key,cfg in CONFIG.items():
    text=load_text(cfg['src'])
    lines=text.split('\n')
    if cfg['drop_first_lines']:
        lines=lines[cfg['drop_first_lines']:]
    text='\n'.join(lines)
    blocks=to_blocks(text)
    imgs=page_images(cfg['src'])
    hero=imgs[0] if imgs else None
    rest=imgs[1:]
    # intersperse remaining images among heading blocks
    if rest:
        heading_idx=[i for i,b in enumerate(blocks) if b['type']=='heading']
        if not heading_idx:
            heading_idx=list(range(0,len(blocks),max(1,len(blocks)//(len(rest)+1))))
        step=max(1,len(heading_idx)//len(rest)) if heading_idx else 1
        merged=[]; ri=0
        for i,b in enumerate(blocks):
            if b['type']=='heading' and ri<len(rest) and heading_idx.index(i)%step==0 and i!=heading_idx[0]:
                merged.append({'type':'image','img':rest[ri]}); ri+=1
            merged.append(b)
        while ri<len(rest):
            merged.append({'type':'image','img':rest[ri]}); ri+=1
        blocks=merged
    obj={'title':cfg['title'],'eyebrow':cfg['eyebrow'],'hero':hero,'images':imgs,'blocks':blocks}
    json.dump(obj, open(os.path.join(OUT,key+'.json'),'w'), ensure_ascii=False, indent=1)
    print(key,'-> blocks:',len(blocks),'imgs:',len(imgs))
print('OK')

# ---- Blog posts ----
POSTS=[
 {'src':'wix_post1','slug':'o-deus-que-habita-em-voce','title':'O Deus que Habita em Você','date':'8 de outubro de 2024','cat':'Decretos e Afirmações','drop':4,'cut_tail':'Posts recentes'},
 {'src':'wix_post2','slug':'oracao-do-elemental-do-corpo','title':'Oração do Elemental do Corpo','date':'3 de julho de 2023','cat':'Decretos e Afirmações','drop':4,'cut_tail':'Posts recentes'},
]
postout=[]
for p in POSTS:
    t=load_text(p['src'])
    if p.get('cut_tail') and p['cut_tail'] in t:
        t=t.split(p['cut_tail'])[0]
    lines=t.split('\n')[p['drop']:]
    t='\n'.join(lines)
    blocks=to_blocks(t)
    imgs=page_images(p['src'])
    postout.append({'slug':p['slug'],'title':p['title'],'date':p['date'],'cat':p['cat'],'hero':imgs[0] if imgs else None,'blocks':blocks})
json.dump(postout, open(os.path.join(OUT,'posts.json'),'w'), ensure_ascii=False, indent=1)
print('posts ->', len(postout))
