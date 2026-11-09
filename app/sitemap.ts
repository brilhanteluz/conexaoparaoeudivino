import type { MetadataRoute } from 'next'
import postsData from '@/lib/content/posts.json'

export const dynamic = 'force-static'

const BASE = 'https://conexaoparaoeudivino.com.br'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/presenca-eu-sou', '/decretos', '/estudos', '/praticas', '/perolas', '/canalizacoes', '/videos', '/downloads']
  const posts = postsData as { slug: string }[]
  return [
    ...pages.map((p: string) => ({ url: `${BASE}${p}/` })),
    ...posts.map((b) => ({ url: `${BASE}/blog/${b?.slug}/` })),
  ]
}
