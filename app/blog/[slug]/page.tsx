import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { ArrowLeft } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import postsData from '@/lib/content/posts.json'

type Block =
  | { type: 'heading'; text: string }
  | { type: 'para'; text: string }
  | { type: 'verse'; lines: string[] }
  | { type: 'image'; img: { src: string; w: number; h: number } }
type Post = { slug: string; title: string; date?: string; cat?: string; hero?: { src: string; w: number; h: number } | null; blocks: Block[] }

const POSTS = postsData as Post[]

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const p = POSTS.find((x) => x.slug === slug)
  return {
    title: p ? p.title : 'Mensagem',
    description: p?.blocks.find((b) => b.type === 'para')?.['text'] ?? '',
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = POSTS.find((p) => p.slug === slug)
  if (!post) notFound()
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <article className="mx-auto max-w-[1200px] px-6 py-12">
      <Link href="/" className="mb-8 inline-flex items-center gap-2 rounded-md bg-secondary/25 px-4 py-2 text-sm hover:bg-secondary/45 hover:text-primary">
        <ArrowLeft className="h-4 w-4" /> Voltar ao Início
      </Link>

      <Reveal className="mx-auto max-w-3xl text-center">
        {post.cat ? <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">{post.cat}</span> : null}
        <h1 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-gold md:text-5xl">{post.title}</h1>
        {post.date ? <p className="mt-4 text-sm text-muted-foreground">{post.date}</p> : null}
        <div className="gold-divider mx-auto mt-6 w-40" />
      </Reveal>

      {post.hero ? (
        <Reveal delay={0.1} className="mx-auto mt-10 max-w-4xl">
          <div className="relative aspect-video overflow-hidden rounded-xl bg-muted shadow-2xl">
            <Image src={post.hero.src} alt={post.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 900px" priority />
          </div>
        </Reveal>
      ) : null}

      <div className="mx-auto mt-10 max-w-3xl">
        {post.blocks.map((b, i) => {
          if (b.type === 'image')
            return (
              <Reveal key={i} className="my-8 flex justify-center">
                <figure className="overflow-hidden rounded-2xl border border-primary/15 bg-background/40 shadow-lg">
                  <Image src={b.img.src} alt={post.title} width={b.img.w || 1000} height={b.img.h || 700} sizes="(max-width: 768px) 92vw, 760px" className="h-auto w-auto max-h-[70vh] max-w-full object-contain" />
                </figure>
              </Reveal>
            )
          if (b.type === 'heading')
            return (
              <Reveal key={i}>
                <h2 className="mt-10 mb-4 font-display text-2xl font-semibold tracking-tight text-gold">{b.text}</h2>
                <div className="gold-divider mb-5 w-24" />
              </Reveal>
            )
          if (b.type === 'verse')
            return (
              <Reveal key={i}>
                <div className="glass my-6 rounded-2xl border-l-2 border-primary/50 p-6 md:p-8">
                  {b.lines.map((l, j) => (
                    <p key={j} className="font-display text-base leading-relaxed text-foreground/90 md:text-lg">{l}</p>
                  ))}
                </div>
              </Reveal>
            )
          return (
            <Reveal key={i}>
              <p className="mb-5 text-[1.02rem] leading-[1.9] text-foreground/85">{b.text}</p>
            </Reveal>
          )
        })}
      </div>

      {related.length ? (
        <section className="mt-16">
          <h2 className="mb-6 text-center font-display text-2xl font-semibold text-foreground">Continue lendo</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="glass glass-hover group overflow-hidden rounded-xl">
                <div className="relative aspect-video bg-muted">
                  {p.hero ? <Image src={p.hero.src} alt={p.title} fill className="object-cover" sizes="33vw" /> : null}
                </div>
                <div className="p-4">
                  {p.cat ? <p className="text-xs text-primary">{p.cat}</p> : null}
                  <p className="mt-1 font-display font-semibold text-foreground group-hover:text-primary">{p.title}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </article>
  )
}
