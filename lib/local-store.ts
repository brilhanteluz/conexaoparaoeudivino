// Armazenamento no navegador (localStorage) para a versão estática do site no GitHub Pages.
// O GitHub Pages só serve arquivos estáticos, então as antigas rotas /api (Prisma + PostgreSQL)
// foram substituídas por este módulo. Os dados ficam salvos apenas no navegador do visitante.

const COUNTER_KEY = 'ced:decree-counter'
const REQUESTS_KEY = 'ced:light-requests'
export const COUNTER_BASE = 144000

export interface StoredLightRequest {
  id: string
  name: string
  intention: string
  createdAt: string
}

function read<T>(key: string, fallback: T): T {
  if (typeof window === 'undefined') return fallback
  try {
    const raw = window.localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function write(key: string, value: unknown): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch (e) {
    console.error('Erro ao salvar no navegador:', e)
  }
}

export function getDecreeCount(): number {
  const local = Number(read<number>(COUNTER_KEY, 0)) || 0
  return COUNTER_BASE + local
}

export function addToDecreeCount(amount = 1): number {
  const n = Math.min(Math.max(Math.floor(Number(amount) || 1), 1), 108)
  const local = (Number(read<number>(COUNTER_KEY, 0)) || 0) + n
  write(COUNTER_KEY, local)
  return COUNTER_BASE + local
}

export function getLightRequests(): StoredLightRequest[] {
  const list = read<StoredLightRequest[]>(REQUESTS_KEY, [])
  return Array.isArray(list) ? list.slice(0, 12) : []
}

export function addLightRequest(name: string, intention: string): StoredLightRequest {
  const cleanName = String(name ?? '').trim().slice(0, 60)
  const cleanIntention = String(intention ?? '').trim().slice(0, 500)
  if (cleanName.length < 2 || cleanIntention.length < 5) {
    throw new Error('Informe seu nome e uma intenção com pelo menos 5 caracteres.')
  }
  const item: StoredLightRequest = {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: cleanName,
    intention: cleanIntention,
    createdAt: new Date().toISOString(),
  }
  write(REQUESTS_KEY, [item, ...getLightRequests()].slice(0, 12))
  return item
}
