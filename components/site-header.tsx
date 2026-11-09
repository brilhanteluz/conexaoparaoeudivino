'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV = [
  { href: '/', label: 'Início' },
  { href: '/presenca-eu-sou', label: 'Presença Divina Eu Sou' },
  { href: '/decretos', label: 'Decretos e Afirmações' },
  { href: '/estudos', label: 'Estudos' },
  { href: '/praticas', label: 'Práticas' },
  { href: '/perolas', label: 'Pérolas de Sabedoria' },
  { href: '/canalizacoes', label: 'Canalizações' },
  { href: '/videos', label: 'Vídeos e Imagens' },
  { href: '/downloads', label: 'Downloads' },
]

export const LOGO_URL = '/img/logo-header.png'

export function SiteHeader() {
  const pathname = usePathname() ?? '/'
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled((window?.scrollY ?? 0) > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith?.(href))

  return (
    <header className="sticky top-0 z-50 px-3 pt-3">
      <div
        className={cn(
          'mx-auto flex max-w-[1200px] items-center justify-between rounded-xl px-4 py-2 transition-all duration-300',
          scrolled ? 'glass' : 'bg-background/30 backdrop-blur-md'
        )}
      >
        <Link href="/" className="flex items-center gap-2" aria-label="Conexão para o Eu Divino — Início">
          <div className="relative h-11 w-11 shrink-0">
            <Image src={LOGO_URL} alt="Logo Conexão para o Eu Divino" fill className="object-contain" sizes="44px" priority />
          </div>
          <div className="hidden leading-tight sm:block">
            <span className="block font-display text-sm font-semibold tracking-wider text-gold">CONEXÃO PARA O</span>
            <span className="block font-display text-xs tracking-[0.3em] text-foreground/80">EU DIVINO</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Navegação principal">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                'rounded-md px-2 py-2 text-[11px] font-medium uppercase tracking-wide transition-colors whitespace-nowrap',
                isActive(n.href)
                  ? 'bg-primary/15 text-primary'
                  : 'text-foreground/75 hover:bg-secondary/25 hover:text-primary'
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-md bg-secondary/30 p-2 text-foreground hover:bg-secondary/50 xl:hidden"
          onClick={() => setOpen((v: boolean) => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav className="glass mx-auto mt-2 grid max-w-[1200px] grid-cols-2 gap-1 rounded-xl p-3 xl:hidden" aria-label="Navegação móvel">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={cn(
                'rounded-md px-3 py-2.5 text-sm font-medium',
                isActive(n.href) ? 'bg-primary/15 text-primary' : 'text-foreground/85 hover:bg-secondary/30'
              )}
            >
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
