import type { Metadata } from 'next'
import { Flame } from 'lucide-react'
import { ContentPage, type PageContent } from '@/components/content-page'
import content from '@/lib/content/decretos.json'

export const metadata: Metadata = {
  title: 'Decretos e Afirmações',
  description: 'Decretos, afirmações e orações da Chama Violeta e dos Mestres Ascensos para a transmutação.',
}

export default function Page() {
  return <ContentPage content={content as PageContent} icon={Flame} />
}
