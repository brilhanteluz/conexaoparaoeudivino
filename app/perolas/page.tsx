import type { Metadata } from 'next'
import { Gem } from 'lucide-react'
import { ContentPage, type PageContent } from '@/components/content-page'
import content from '@/lib/content/perolas.json'

export const metadata: Metadata = {
  title: 'Pérolas de Sabedoria',
  description: 'Pérolas de sabedoria e reflexões para iluminar o caminho espiritual.',
}

export default function Page() {
  return <ContentPage content={content as PageContent} icon={Gem} />
}
