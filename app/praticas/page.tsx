import type { Metadata } from 'next'
import { Wind } from 'lucide-react'
import { ContentPage, type PageContent } from '@/components/content-page'
import content from '@/lib/content/praticas.json'

export const metadata: Metadata = {
  title: 'Práticas',
  description: 'Práticas, exercícios e meditações para a conexão com a Divina Presença e a Chama Violeta.',
}

export default function Page() {
  return <ContentPage content={content as PageContent} icon={Wind} />
}
