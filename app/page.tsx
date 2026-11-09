import Link from 'next/link'
import Image from 'next/image'
import { Sun, Flame, BookOpen, Wind, Gem, Radio, Film, Download, ArrowRight } from 'lucide-react'
import { HomeHero } from './_components/home-client'
import { Reveal } from '@/components/reveal'
import { SectionTitle } from '@/components/page-hero'
import posts from '@/lib/content/posts.json'


type PostBlock = { type: string; text?: string }
type Post = { slug: string; title: string; date?: string; cat?: string; hero?: { src: string; w: number; h: number } | null; blocks: PostBlock[] }

const QUICK = [
  { href: '/presenca-eu-sou', icon: Sun, title: 'Presença Divina Eu Sou', text: 'Compreenda a chama imortal que habita em cada coração.' },
  { href: '/decretos', icon: Flame, title: 'Decretos e Afirmações', text: 'A palavra falada para qualificar a Luz divina em sua vida.' },
  { href: '/estudos', icon: BookOpen, title: 'Estudos', text: 'Conhecimento espiritual sobre a ascensão e os Mestres.' },
  { href: '/praticas', icon: Wind, title: 'Práticas', text: 'Exercícios e meditações para a conexão com a Luz.' },
  { href: '/perolas', icon: Gem, title: 'Pérolas de Sabedoria', text: 'Reflexões para iluminar o caminho espiritual.' },
  { href: '/canalizacoes', icon: Radio, title: 'Canalizações', text: 'Mensagens de luz dos Mestres Ascensos e seres de luz.' },
  { href: '/videos', icon: Film, title: 'Vídeos e Imagens', text: 'Estampas dos Mestres e vídeos de meditações.' },
  { href: '/downloads', icon: Download, title: 'Downloads', text: 'Material de apoio e estudo para o estudante da Luz.' },
]

function excerpt(p: Post): string {
  const para = p.blocks.find((b) => b.type === 'para' && (b.text ?? '').length > 40)
  return (para?.text ?? '').slice(0, 160)
}

export default function Home() {
  const featured = (posts as Post[]).slice(0, 3)

  return (
    <>
      <HomeHero />

      {/* Boas-vindas / Missão */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <Reveal>
          <div className="glass pulse-glow relative mx-auto max-w-3xl overflow-hidden rounded-2xl p-8 text-center md:p-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary/90">Bem-vindos</p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-gold md:text-3xl">
              Conexão para o Eu Divino
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[1.05rem] leading-[1.9] text-foreground/85">
              Aqui você encontrará um espaço sagrado dedicado à espiritualidade, repleto de conteúdos e
              materiais para nutrir sua jornada. Nossa missão é proporcionar uma conexão profunda com seu
              Eu Divino, oferecendo conhecimento, inspiração e ferramentas para expandir sua consciência e
              despertar para a verdadeira essência do seu ser.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Acesso rápido */}
      <section className="bg-accent/10 py-20">
        <div className="mx-auto max-w-[1200px] px-6">
          <SectionTitle eyebrow="Caminhos de Luz" title="Por onde deseja começar?" description="Cada portal abaixo conduz a um aspecto do caminho espiritual da Presença Eu Sou." />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK.map((q, i: number) => {
              const Icon = q.icon
              return (
                <Reveal key={q.href} delay={i * 0.06}>
                  <Link href={q.href} className="glass glass-hover group flex h-full flex-col rounded-xl p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-secondary to-accent text-primary shadow-lg">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary">{q.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{q.text}</p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                      Acessar <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Mensagens dos Mestres (posts) */}
      <section className="mx-auto max-w-[1200px] px-6 py-20">
        <SectionTitle eyebrow="Mensagens dos Mestres" title="Ensinamentos Recentes" description="Leituras para nutrir a alma e aprofundar sua prática." />
        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((p, i: number) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <Link href={`/blog/${p.slug}`} className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-xl">
                <div className="relative aspect-video bg-muted">
                  {p.hero ? (
                    <Image src={p.hero.src} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                  ) : null}
                  {p.cat ? (
                    <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">{p.cat}</span>
                  ) : null}
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground group-hover:text-primary">{p.title}</h3>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-muted-foreground">{excerpt(p)}…</p>
                  {p.date ? <span className="mt-4 text-xs text-muted-foreground">{p.date}</span> : null}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
