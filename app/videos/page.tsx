import type { Metadata } from 'next'
import Image from 'next/image'
import { Film, Play, Images } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { Mandala } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Vídeos e Imagens',
  description: 'Estampas dos Mestres Ascensos e seres cósmicos, e vídeos de meditações e ensinamentos de luz.',
}

const GALLERY: { src: string; w: number; h: number }[] = [
  { src: '/wix/fbd835_391b19759b344d239fe30b00ff4e2c04.jpeg', w: 313, h: 352 },
  { src: '/wix/fbd835_1eeba58269834988848d6a428a728f8f.jpeg', w: 440, h: 440 },
  { src: '/wix/fbd835_7f3f5578d5e74e858272f610cfa074f7.jpeg', w: 640, h: 480 },
  { src: '/wix/e316f544f9094143b9eac01f1f19e697.png', w: 200, h: 200 },
]

const VIDEOS: { title: string; dur: string }[] = [
  { title: 'Meditação do Perdão', dur: '14:40' },
  { title: '💜 Exercício com a Chama Trina — por Arlete Funaro', dur: '19:30' },
  { title: 'Fraternidade Branca', dur: '05:27' },
  { title: 'Visualização com a Luz Interior e a Chama Violeta', dur: '03:26' },
  { title: 'Oração do Perdão', dur: '07:44' },
  { title: 'A Divina Presença Eu Sou e os Sete Corpos do Homem', dur: '30:53' },
  { title: 'Maestros Ascendidos y Seres de Luz (1ª Parte)', dur: '07:34' },
  { title: 'Maestros Ascendidos y Seres de Luz (2ª Parte)', dur: '10:36' },
]

export default function Page() {
  return (
    <>
      <section className="relative overflow-hidden px-6 pb-8 pt-16 md:pt-24">
        <Mandala className="spin-slow pointer-events-none absolute left-1/2 top-24 h-[520px] w-[520px] -translate-x-1/2 text-primary/10" />
        <Reveal className="relative mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/60 text-primary shadow-lg pulse-glow">
            <Film className="h-7 w-7" />
          </div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground/70">Galeria</p>
          <h1 className="font-display text-4xl font-semibold tracking-tight text-gold md:text-5xl">Vídeos e Imagens</h1>
          <div className="gold-divider mx-auto mt-8 w-48" />
        </Reveal>
      </section>

      <section className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-8 flex items-center justify-center gap-3 text-center">
          <Images className="h-5 w-5 text-primary" />
          <h2 className="font-display text-xl font-semibold tracking-tight text-gold md:text-2xl">
            Estampas dos Mestres Ascensos e Seres Cósmicos
          </h2>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {GALLERY.map((g) => (
            <Reveal key={g.src}>
              <figure className="group relative aspect-square overflow-hidden rounded-2xl border border-primary/15 bg-background/40 shadow-lg ring-1 ring-primary/10">
                <Image
                  src={g.src}
                  alt="Estampa de Mestre Ascenso — Conexão para o Eu Divino"
                  fill
                  sizes="(max-width: 768px) 45vw, 240px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-20 pt-16">
        <Reveal className="mb-8 text-center">
          <h2 className="font-display text-xl font-semibold tracking-tight text-gold md:text-2xl">Vídeos</h2>
          <div className="gold-divider mx-auto mt-5 w-24" />
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-foreground/70">
            Meditações, orações e ensinamentos de luz. Acompanhe os vídeos na nossa
            {' '}
            <a href="https://www.facebook.com/Conexaoparaoeudivino" target="_blank" rel="noopener noreferrer" className="text-primary underline-offset-4 hover:underline">
              página do Facebook
            </a>
            .
          </p>
        </Reveal>
        <div className="space-y-3">
          {VIDEOS.map((v) => (
            <Reveal key={v.title}>
              <div className="glass flex items-center gap-4 rounded-xl p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Play className="h-5 w-5" />
                </div>
                <span className="flex-1 text-[0.98rem] leading-snug text-foreground/90">{v.title}</span>
                <span className="shrink-0 font-display text-sm text-secondary-foreground/70">{v.dur}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  )
}
