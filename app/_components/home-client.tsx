'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform, animate, useInView } from 'framer-motion'
import { ArrowRight, Flame, Sparkles, Loader2 } from 'lucide-react'
import { toast } from 'sonner'
import { Mandala } from '@/components/page-hero'
import { addToDecreeCount, getDecreeCount } from '@/lib/local-store'

const HERO_BG = '/img/hero-bg.jpg'
const LOGO_COSMIC = '/img/logo-cosmico.png'

export function HomeHero() {
  const ref = useRef<HTMLElement | null>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '40%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative -mt-[76px] flex min-h-[100svh] items-center justify-center overflow-hidden px-6 pt-24">
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <Image src={HERO_BG} alt="Nebulosa cósmica em tons de violeta e índigo" fill priority className="object-cover opacity-60" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-accent/30 to-background" />
      </motion.div>

      <Mandala className="spin-slow pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/2 text-primary/20" />
      <Mandala className="spin-slower pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 text-secondary-foreground/10" />

      <motion.div style={{ y: contentY, opacity }} className="relative mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="pulse-glow relative mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full md:h-40 md:w-40"
        >
          <Image src={LOGO_COSMIC} alt="Logo cósmica Conexão para o Eu Divino" fill className="object-cover" sizes="160px" priority />
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-4 text-xs font-semibold uppercase tracking-[0.5em] text-secondary-foreground/80"
        >
          Eu Sou o Que Eu Sou
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="font-display text-4xl font-bold leading-tight tracking-tight text-gold sm:text-5xl md:text-7xl"
        >
          CONEXÃO PARA O EU DIVINO
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/85 md:text-xl"
        >
          Desperte sua Divina Presença e eleve sua consciência com os Ensinamentos da Grande Fraternidade Branca
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link href="/presenca-eu-sou" className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 font-display text-sm font-bold tracking-wider">
            <Sparkles className="h-5 w-5" /> Iniciar sua Jornada
          </Link>
          <Link href="/decretos" className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:text-primary">
            Decretos e Afirmações <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

function formatNumber(n: number): string {
  return Math.round(n ?? 0).toLocaleString('pt-BR')
}

export function CollectiveCounter() {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState<number>(144000)
  const [display, setDisplay] = useState<number>(0)
  const [loading, setLoading] = useState(false)
  const shown = useRef(0)

  useEffect(() => {
    setCount(getDecreeCount())
  }, [])

  useEffect(() => {
    if (!inView) return
    const controls = animate(shown.current, count, {
      duration: shown.current === 0 ? 2.2 : 0.8,
      ease: 'easeOut',
      onUpdate: (v: number) => {
        shown.current = v
        setDisplay(v)
      },
    })
    return () => controls?.stop?.()
  }, [count, inView])

  const add = async () => {
    setLoading(true)
    try {
      setCount(addToDecreeCount(1))
      toast.success('Seu decreto foi somado à corrente de Luz! 🔥')
    } catch (e) {
      console.error(e)
      toast.error('Não foi possível registrar agora. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div ref={ref} className="glass relative overflow-hidden rounded-2xl px-6 py-14 text-center">
      <Mandala className="spin-slow pointer-events-none absolute -right-24 -top-24 h-80 w-80 text-primary/10" />
      <Flame className="flame-flicker mx-auto mb-4 h-10 w-10 text-primary" />
      <p className="text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">Corrente Coletiva de Luz</p>
      <p className="mt-4 font-display text-5xl font-bold tabular-nums text-gold md:text-7xl">{formatNumber(display)}</p>
      <p className="mx-auto mt-3 max-w-lg text-foreground/80">
        decretos pronunciados por corações unidos em nome da Presença Eu Sou. Cada voz fortalece a Luz na Terra.
      </p>
      <button
        type="button"
        onClick={add}
        disabled={loading}
        className="btn-gold mt-8 inline-flex items-center gap-2 rounded-full px-7 py-3 font-semibold disabled:opacity-70"
      >
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Flame className="h-5 w-5" />}
        Pronunciei um Decreto
      </button>
    </div>
  )
}
