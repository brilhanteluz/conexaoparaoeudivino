import type { Metadata } from 'next'
import { BookOpen } from 'lucide-react'
import { ContentPage, type PageContent } from '@/components/content-page'
import content from '@/lib/content/estudos.json'

export const metadata: Metadata = {
  title: 'Estudos',
  description: 'Estudos e conhecimento espiritual sobre os Mestres Ascensos, a Lei do Um e a ascensão.',
}

export default function Page() {
  return <ContentPage content={content as PageContent} icon={BookOpen} />
}
