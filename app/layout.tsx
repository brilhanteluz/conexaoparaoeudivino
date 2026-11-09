import { Cinzel, Lato } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/sonner'
import { ChunkLoadErrorHandler } from '@/components/chunk-load-error-handler'
import { StarField } from '@/components/star-field'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const SITE_URL = 'https://conexaoparaoeudivino.com.br'

const cinzel = Cinzel({ subsets: ['latin'], variable: '--font-display', weight: ['400', '500', '600', '700'] })
const lato = Lato({ subsets: ['latin'], variable: '--font-sans', weight: ['300', '400', '700'] })

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: 'Conexão para o Eu Divino — Divina Presença Eu Sou',
      template: '%s | Conexão para o Eu Divino',
    },
    description:
      'Desperte sua Divina Presença Eu Sou e eleve sua consciência com os Ensinamentos da Grande Fraternidade Branca: Mestres Ascencionados, Chama Violeta, decretos, meditações guiadas e oráculo.',
    keywords: [
      'Eu Sou', 'Divina Presença Eu Sou', 'Grande Fraternidade Branca', 'Mestres Ascencionados',
      'Chama Violeta', 'Saint Germain', 'decretos', 'afirmações Eu Sou', 'meditação guiada',
      'Chama Trina', 'espiritualidade', 'ascensão', 'El Morya', 'Kuthumi',
    ],
    icons: { icon: '/favicon.svg', shortcut: '/favicon.svg' },
    openGraph: {
      title: 'Conexão para o Eu Divino',
      description: 'Desperte sua Divina Presença Eu Sou com os Ensinamentos da Grande Fraternidade Branca.',
      images: ['/og-image.png'],
      locale: 'pt_BR',
      type: 'website',
    },
    twitter: { card: 'summary_large_image', images: ['/og-image.png'] },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="dark" suppressHydrationWarning>
      <body className={`${cinzel.variable} ${lato.variable} font-sans min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark" disableTransitionOnChange>
          <StarField />
          <div className="relative z-10 flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
          <Toaster />
          {/* IMPORTANT: Do not remove — handles chunk loading race conditions in the dev server */}
          <ChunkLoadErrorHandler />
        </ThemeProvider>
      </body>
    </html>
  )
}
