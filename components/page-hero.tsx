import type { LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function Mandala({ className }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i: number) => i * 30)
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" fill="none" stroke="currentColor">
      <circle cx="100" cy="100" r="95" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="75" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="40" strokeWidth="0.5" />
      {petals.map((deg: number) => (
        <g key={deg} transform={`rotate(${deg} 100 100)`}>
          <ellipse cx="100" cy="55" rx="12" ry="30" strokeWidth="0.5" />
          <circle cx="100" cy="15" r="3" strokeWidth="0.5" />
          <line x1="100" y1="5" x2="100" y2="60" strokeWidth="0.3" />
        </g>
      ))}
      <polygon points="100,30 161,135 39,135" strokeWidth="0.5" />
      <polygon points="100,170 39,65 161,65" strokeWidth="0.5" />
    </svg>
  )
}

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
      <Mandala className="spin-slow pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 text-primary/15" />
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
