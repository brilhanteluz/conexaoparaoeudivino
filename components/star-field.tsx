'use client'

import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  r: number
  a: number
  s: number
  gold: boolean
  vy: number
}

export function StarField() {
  const ref = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = ref?.current
    const ctx = canvas?.getContext?.('2d')
    if (!canvas || !ctx) return
    let raf = 0
    let stars: Star[] = []
    const reduce = window?.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio ?? 1, 2)
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = Math.floor((window.innerWidth * window.innerHeight) / 5500)
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: Math.random() * 1.4 + 0.2,
        a: Math.random() * Math.PI * 2,
        s: Math.random() * 0.02 + 0.004,
        gold: Math.random() < 0.15,
        vy: Math.random() * 0.08 + 0.01,
      }))
    }

    const draw = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const st of stars) {
        st.a += st.s
        if (!reduce) {
          st.y -= st.vy
          if (st.y < -2) st.y = window.innerHeight + 2
        }
        const alpha = 0.35 + Math.abs(Math.sin(st.a)) * 0.65
        ctx.beginPath()
        ctx.arc(st.x, st.y, st.r, 0, Math.PI * 2)
        ctx.fillStyle = st.gold ? `rgba(255, 215, 0, ${alpha})` : `rgba(240, 230, 255, ${alpha * 0.85})`
        if (st.r > 1.2) {
          ctx.shadowBlur = 8
          ctx.shadowColor = st.gold ? 'rgba(255,215,0,0.8)' : 'rgba(200,170,255,0.8)'
        } else {
          ctx.shadowBlur = 0
        }
        ctx.fill()
      }
      raf = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />
}
