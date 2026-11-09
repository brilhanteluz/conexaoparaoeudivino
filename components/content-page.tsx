import Image from 'next/image'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Mandala } from '@/components/page-hero'

type Img = { src: string; w: number; h: number }
type Block =
  | { type: 'heading'; text: string }
  | { type: 'para'; text: string }
  | { type: 'verse'; lines: string[] }
  | { type: 'image'; img: Img }

export type PageContent = {
  title: string
  eyebrow: string
  hero: Img | null
  images: Img[]
  blocks: Block[]
}

function ContentImage({ img, priority }: { img: Img; priority?: boolean }) {
  const w = img.w || 1000
  const h = img.h || 700
  return (
    <Reveal className="my-9 flex justify-center">
      <figure className="overflow-hidden rounded-2xl border border-primary/15 bg-background/40 shadow-lg ring-1 ring-primary/10">
        <Image
          src={img.src}
          alt="Imagem espiritual — Conexão para o Eu Divino"
          width={w}
          height={h}
          sizes="(max-width: 768px) 92vw, 760px"
          className="h-auto w-auto max-h-[70vh] max-w-full object-contain"
          priority={priority}
        />
      </figure>
    </Reveal>
  )
}

export function ContentPage({ content, icon: Icon }: { content: PageContent; icon: LucideIcon }) {
  const { title, eyebrow, hero, blocks } = content
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-8 pt-16 md:pt-24">
        <Mandala className="spin-slow pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 text-primary/10" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/60 text-primary shadow-lg pulse-glow">
            <Icon className="h-7 w-7" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground/70">{eyebrow}</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-gold md:text-5xl">{title}</h1>
          <div className="gold-divider mx-auto mt-8 w-48" />
        </Reveal>
      </section>

      {hero ? (
        <section className="mx-auto max-w-3xl px-6">
          <ContentImage img={hero} priority />
        </section>
      ) : null}

      <article className="mx-auto max-w-3xl px-6 pb-20">
        {blocks.map((b, i) => {
          if (b.type === 'image') return <ContentImage key={i} img={b.img} />
          if (b.type === 'heading')
            return (
              <Reveal key={i}>
                <h2 className="mt-12 mb-5 font-display text-2xl font-semibold tracking-tight text-gold md:text-[1.7rem]">
                  {b.text}
                </h2>
                <div className="gold-divider mb-6 w-24" />
              </Reveal>
            )
          if (b.type === 'verse')
            return (
              <Reveal key={i}>
                <div className="glass my-6 rounded-2xl border-l-2 border-primary/50 p-6 md:p-8">
                  {b.lines.map((l, j) => (
                    <p key={j} className="font-display text-base leading-relaxed text-foreground/90 md:text-lg">
                      {l}
                    </p>
                  ))}
                </div>
              </Reveal>
            )
          return (
            <Reveal key={i}>
              <p className="mb-5 text-[1.02rem] leading-[1.9] text-foreground/85">{b.text}</p>
            </Reveal>
          )
        })}
      </article>
    </>
  )
}
