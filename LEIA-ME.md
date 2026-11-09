# Conexão para o Eu Divino — Arquivos-Fonte do Projeto

## O que é este pacote

Este arquivo contém **todos os arquivos-fonte do site "Conexão para o Eu Divino"** no estado atual,
prontos para importar em outra IA ou ambiente de desenvolvimento e continuar a partir daqui.
A estrutura, os recursos e o funcionamento do site estão preservados.

---

## Estrutura de Pastas

```
conexao_eu_divino/
├── app/                    → Páginas e rotas (App Router)
│   ├── page.tsx            → Página inicial (Home)
│   ├── eu-sou/             → Divina Presença Eu Sou
│   ├── mestres/            → Mestres Ascencionados (+ detalhe [slug])
│   ├── decretos/           → Decretos, Afirmações e Orações
│   ├── meditacoes/         → Meditações Guiadas
│   ├── blog/               → Blog / Mensagens dos Mestres (+ detalhe [slug])
│   ├── comunidade/         → Pedidos de Luz, Roda das Chamas e Quiz
│   ├── contato/            → Sobre & Links (sem formulário)
│   └── api/                → Rotas de API (pedidos de luz, contador de decretos)
├── components/             → Componentes reutilizáveis (header, footer, etc.)
├── lib/
│   └── data/               → Conteúdo do site (decretos, mestres, blog, quiz, meditações, diários)
├── prisma/
│   └── schema.prisma       → Estrutura do banco de dados PostgreSQL
├── public/                 → Imagens públicas, favicon
├── logo/                   → Arquivos da logo (PNG transparente e variações)
├── package.json            → Dependências do projeto
├── next.config.js          → Configuração do framework
├── tailwind.config.ts      → Configuração do Tailwind CSS
└── .env                    → Variáveis de ambiente (preencha a DATABASE_URL)
```

---

## Como rodar localmente

```bash
# 1. Instalar dependências
yarn install

# 2. Configurar o banco de dados
# Edite o arquivo .env e preencha a DATABASE_URL com a URL do seu PostgreSQL

# 3. Criar as tabelas no banco
yarn prisma db push

# 4. Rodar em desenvolvimento
yarn dev

# O site estará disponível em: http://localhost:3000
```

> **Importante:** por segurança, a `DATABASE_URL` neste pacote está com um valor de exemplo
> (placeholder). Substitua pelos dados reais do seu banco antes de rodar.

---

## Tecnologias utilizadas

- Next.js 16 (App Router) — Framework principal
- TypeScript — Tipagem do código
- Tailwind CSS — Estilização
- Prisma — ORM para banco de dados
- PostgreSQL — Banco de dados
- shadcn/ui — Componentes de interface

---

## Conteúdo (em português)

Todo o conteúdo está em `lib/data/`:
- `decretos.ts` — Decretos do Eu Sou + Orações (Elemental do Corpo e São Miguel Arcanjo — 21 dias)
- `mestres.ts` — 8 Mestres Ascencionados completos + Chamas Sagradas
- `meditacoes.ts` — Meditações guiadas com roteiro completo
- `blog-posts.ts` — Artigos completos
- `quiz.ts` — Quiz "Qual Mestre caminha com você?"
- `diarios.ts` — Decretos e mensagens diárias rotativas

## Observações sobre o estado atual

- O site é **puramente informativo/espiritual**: não há formulário de contato, agendamento ou loja.
- A seção de **Oráculo foi removida** — o site não trabalha com oráculos.
- A página **Comunidade** contém: Pedidos de Luz, Roda das Chamas Sagradas e Quiz.
- A página **Contato/Sobre** traz a missão do projeto e links para o blog e o Facebook, sem formulário.

### Links externos do projeto
- Blog: https://conexaoparaoeudivino.blogspot.com/
- Facebook: Conexaoparaoeudivino
