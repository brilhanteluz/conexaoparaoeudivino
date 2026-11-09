import type { Metadata } from 'next'
import { Radio } from 'lucide-react'
import { ContentPage, type PageContent } from '@/components/content-page'
import content from '@/lib/content/canalizacoes.json'

export const metadata: Metadata = {
  title: 'Canalizações',
  description: 'Mensagens e canalizações de luz dos Mestres Ascensos e seres de luz.',
}

export default function Page() {
  return <ContentPage content={content as PageContent} icon={Radio} />
}
