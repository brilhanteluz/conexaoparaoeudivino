import type { Metadata } from 'next'
import { Download, Folder, FileText, Sparkles, Sun, Moon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Mandala } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Downloads',
  description: 'Material de apoio e estudo para o estudante da Luz: estampas, áudios, livros, orações e o Trabalho de Luz de 21 dias.',
}

const MATERIAIS: { nome: string; info: string; folder?: boolean }[] = [
  { nome: 'Estampas da Divina Presença', info: '1 item', folder: true },
  { nome: 'Áudio Meditação', info: '3 itens', folder: true },
  { nome: 'Livros de Espiritualidade', info: '10 itens', folder: true },
  { nome: 'Oração do Perdão', info: 'Documento' },
  { nome: 'Carta-Oração ao Arcanjo Rafael, o Sanador de Deus', info: 'Documento' },
]

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-8 pt-16 md:pt-24">
        <Mandala className="spin-slow pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 text-primary/10" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/60 text-primary shadow-lg pulse-glow">
            <Download className="h-7 w-7" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground/70">Material de Apoio</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-gold md:text-5xl">Downloads</h1>
          <div className="gold-divider mx-auto mt-8 w-48" />
          <p className="mx-auto mt-6 max-w-2xl text-[1.02rem] leading-relaxed text-foreground/80">
            Material de apoio e estudo para o estudante da Luz.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6">
        <Reveal>
          <div className="glass rounded-2xl border-l-2 border-primary/50 p-6 md:p-8">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-primary/90">Discurso de Saint Germain no Dia de Ação de Graças</p>
            <p className="mt-4 text-[1.02rem] italic leading-[1.9] text-foreground/85">
              “Eu apreciarei profundamente toda a assistência que os estudantes sob esta radiação possam dar
              para que os livros se editem e sejam postos ante a humanidade, porque este é o maior serviço
              que se pode prestar no presente.”
            </p>
            <p className="mt-3 text-sm text-secondary-foreground/70">— Trecho extraído do Livro de Ouro de Saint Germain</p>
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-3xl px-6 pt-14">
        <Reveal className="mb-6 flex items-center gap-3">
          <Folder className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-semibold tracking-tight text-gold md:text-2xl">Arquivos e Pastas</h2>
        </Reveal>
        <div className="space-y-3">
          {MATERIAIS.map((m) => (
            <Reveal key={m.nome}>
              <div className="glass flex items-center gap-4 rounded-xl p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  {m.folder ? <Folder className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                </div>
                <span className="flex-1 text-[0.98rem] leading-snug text-foreground/90">{m.nome}</span>
                <span className="shrink-0 text-sm text-secondary-foreground/70">{m.info}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-16">
        <Reveal className="mb-6 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-semibold tracking-tight text-gold md:text-2xl">
            Um Trabalho de Luz para um Salto Quântico
          </h2>
        </Reveal>
        <Reveal>
          <p className="mb-6 text-[1.02rem] leading-[1.9] text-foreground/85">
            Um trabalho de luz para iluminação e ascensão, composto de duas etapas — uma pela manhã e outra
            à noite, antes de dormir — realizado durante 21 dias (podendo ser prolongado, caso queira).
          </p>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Sun className="h-5 w-5" />
                <h3 className="font-display text-lg font-semibold text-gold">Pela Manhã</h3>
              </div>
              <p className="text-[0.98rem] leading-[1.8] text-foreground/80">
                Sentado, em um local tranquilo, relaxado, inspirando e sentindo a Luz Divina no coração como
                um sol radiante. Faça a afirmação “A Quebra Consciente de Voto e a Oração de Proteção com o
                Arcanjo Miguel”, seguida do “Ritual de Luz Acelerado de Sanat Kumara”.
              </p>
            </div>
          </Reveal>
          <Reveal>
            <div className="glass h-full rounded-2xl p-6">
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Moon className="h-5 w-5" />
                <h3 className="font-display text-lg font-semibold text-gold">À Noite</h3>
              </div>
              <p className="text-[0.98rem] leading-[1.8] text-foreground/80">
                Realize a “Limpeza de 21 Dias com o Arcanjo Miguel”, um excelente trabalho que traz benefícios
                na vida material e espiritual. Todo trabalho espiritual é precedido de momento de proteção,
                reflexão, inspiração, fé, confiança e amor.
              </p>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <div className="glass mt-6 rounded-2xl border-l-2 border-primary/50 p-6 md:p-8">
            <p className="font-display text-sm uppercase tracking-[0.2em] text-primary/90">Bolha de Proteção do Arcanjo Miguel</p>
            <p className="mt-4 text-[1.02rem] italic leading-[1.9] text-foreground/85">
              “Amado Arcanjo Miguel, eu invoco a sua energia, a sua luz, a sua orientação e a sua proteção
              agora. Por favor, envolva-me no amor e coloque ao redor do meu campo áurico e em meu ser a sua
              nova bolha tripla de luz de proteção. Envolva-me em uma pura bolha branca de proteção, uma
              vibrante bolha elétrica de luz azul e uma sagrada bolha de luz dourada, para garantir a minha
              proteção em todos os níveis do meu ser, em todos os momentos. Assegure que eu experiencie somente
              o amor do Criador em minha realidade e energia. Estou seguro e protegido sempre. Obrigado.”
            </p>
          </div>
        </Reveal>
      </section>
    </>
  )
}
