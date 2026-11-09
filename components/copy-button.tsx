'use client'

import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { toast } from 'sonner'
import { cn } from '@/lib/utils'

export function CopyButton({ text, label = 'Copiar Decreto', className }: { text: string; label?: string; className?: string }) {
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    try {
      await navigator?.clipboard?.writeText?.(text ?? '')
      setCopied(true)
      toast.success('Copiado com amor! ✨')
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Falha ao copiar:', err)
      toast.error('Não foi possível copiar.')
    }
  }

  return (
    <button
      type="button"
      onClick={onCopy}
      className={cn(
        'inline-flex items-center gap-2 rounded-md bg-secondary/30 px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary/55 hover:text-primary',
        className
      )}
    >
      {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
      {copied ? 'Copiado' : label}
    </button>
  )
}
