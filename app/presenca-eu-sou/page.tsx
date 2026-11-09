import type { Metadata } from 'next'
import { Sun } from 'lucide-react'
import { ContentPage, type PageContent } from '@/components/content-page'
import content from '@/lib/content/sobre.json'

export const metadata: Metadata = {
  title: 'Sobre a Presença Divina "Eu Sou"',
  description: 'O conhecimento sobre a Divina Presença "Eu Sou", a chama imortal que habita em cada coração.',
}

export default function Page() {
  return <ContentPage content={content as PageContent} icon={Sun} />
}
