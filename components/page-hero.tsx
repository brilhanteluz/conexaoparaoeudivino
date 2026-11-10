import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function PageHero({
  icon: Icon,
  eyebrow,
  title,
  description,
}: {
  icon: LucideIcon
  eyebrow: string
  title: string
  description: string
}) {
  return (
    <section className="relative overflow-hidden px-6 pb-12 pt-16 md:pt-24">
      {/* Vídeo substituindo a Mandala */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 object-cover opacity-15"
        src="VID-20261110-WA0091.mp4"
      />

      <Reveal className="relative mx-auto max-w-3xl text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/60 text-primary shadow-lg pulse-glow">
          <Icon className="h-7 w-7" />
        </div>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-secondary-foreground/70">{eyebrow}</p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-gold md:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-foreground/80">{description}</p>
        <div className="gold-divider mx-auto mt-8 w-48" />
      </Reveal>
    </section>
  )
}

export function SectionTitle({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center">
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary/80">{eyebrow}</p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 leading-relaxed text-muted-foreground">{description}</p> : null}
    </Reveal>
  )
}
