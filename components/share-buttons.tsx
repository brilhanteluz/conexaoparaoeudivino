'use client'

import { useEffect, useState } from 'react'
import { Send, Share2, MessageCircle, Facebook } from 'lucide-react'

export function ShareButtons({ title, path, label = 'Compartilhe esta luz' }: { title: string; path?: string; label?: string }) {
  const [url, setUrl] = useState('')

  useEffect(() => {
    setUrl(path ? `${window.location.origin}${path}` : window.location.href)
  }, [path])

  const enc = encodeURIComponent
  const links = [
    { name: 'WhatsApp', icon: MessageCircle, href: `https://wa.me/?text=${enc(`${title} — ${url}`)}`, cls: 'hover:bg-green-600/80' },
    { name: 'Telegram', icon: Send, href: `https://t.me/share/url?url=${enc(url)}&text=${enc(title)}`, cls: 'hover:bg-sky-600/80' },
    { name: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`, cls: 'hover:bg-blue-700/80' },
  ]

  const nativeShare = async () => {
    try {
      if (navigator?.share) await navigator.share({ title, url })
    } catch (e) {
      console.error('Compartilhamento cancelado:', e)
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-sm text-muted-foreground">{label}:</span>
      {links.map((l) => {
        const Icon = l.icon
        return (
          <a
            key={l.name}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartilhar no ${l.name}`}
            className={`inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2 text-sm font-medium text-foreground transition-colors ${l.cls}`}
          >
            <Icon className="h-4 w-4" /> {l.name}
          </a>
        )
      })}
      <button type="button" onClick={nativeShare} aria-label="Mais opções de compartilhamento" className="inline-flex items-center gap-2 rounded-full bg-secondary/30 px-4 py-2 text-sm font-medium hover:bg-secondary/55">
        <Share2 className="h-4 w-4" />
      </button>
    </div>
  )
}
