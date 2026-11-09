import Link from 'next/link'
import Image from 'next/image'
import { Flame, Sun, BookOpen, Facebook, ExternalLink } from 'lucide-react'

const LOGO = '/img/logo-cosmico.png'

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-background/70 backdrop-blur-sm">
      <div className="gold-divider" />
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-6 px-6 py-12 text-center">
        <div className="relative h-20 w-20 overflow-hidden rounded-full shadow-lg">
          <Image src={LOGO} alt="Logo cósmica Conexão para o Eu Divino" fill className="object-cover" sizes="80px" />
        </div>
        <p className="max-w-xl font-display text-lg text-gold">
          “Eu Sou a Ressurreição e a Vida.”
        </p>
        <nav className="flex flex-wrap justify-center gap-2" aria-label="Links do rodapé">
          <Link href="/presenca-eu-sou" className="inline-flex items-center gap-2 rounded-md bg-secondary/20 px-4 py-2 text-sm text-foreground/85 hover:bg-secondary/40 hover:text-primary">
            <Sun className="h-4 w-4" /> Presença Divina Eu Sou
          </Link>
          <Link href="/decretos" className="inline-flex items-center gap-2 rounded-md bg-secondary/20 px-4 py-2 text-sm text-foreground/85 hover:bg-secondary/40 hover:text-primary">
            <Flame className="h-4 w-4" /> Decretos e Afirmações
          </Link>
          <a href="https://conexaoparaoeudivino.blogspot.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-secondary/20 px-4 py-2 text-sm text-foreground/85 hover:bg-secondary/40 hover:text-primary">
            <BookOpen className="h-4 w-4" /> Blog <ExternalLink className="h-3 w-3" />
          </a>
          <a href="https://www.facebook.com/Conexaoparaoeudivino" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-md bg-secondary/20 px-4 py-2 text-sm text-foreground/85 hover:bg-secondary/40 hover:text-primary">
            <Facebook className="h-4 w-4" /> Facebook <ExternalLink className="h-3 w-3" />
          </a>
        </nav>
        <p className="text-xs text-muted-foreground">
          © 2026 Conexão para o Eu Divino · Feito com amor, sabedoria e poder a serviço da Luz.
        </p>
      </div>
    </footer>
  )
}
