# Conexão para o Eu Divino — Arquivo do Projeto

## O que está neste ZIP

Este arquivo contém **todos os arquivos-fonte originais** do site "Conexão para o Eu Divino",
prontos para importar em outra IA ou ambiente de desenvolvimento e continuar a partir do estado atual.

---

## Estrutura de Pastas

```
conexao_eu_divino_fonte.zip
├── app/                    → Páginas e rotas (Next.js App Router)
│   ├── page.tsx            → Página inicial (Home)
│   ├── eu-sou/             → Página: Divina Presença Eu Sou
│   ├── mestres/            → Página: Mestres Ascencionados
│   ├── decretos/           → Página: Decretos & Afirmações
│   ├── meditacoes/         → Página: Meditações Guiadas
│   ├── blog/               → Página: Blog / Mensagens dos Mestres
│   ├── comunidade/         → Página: Comunidade (Quiz, Oráculo, Roda, Pedidos)
│   ├── contato/            → Página: Contato / Sobre
│   └── api/                → Rotas de API (banco de dados)
├── components/             → Componentes reutilizáveis (header, footer, estrelas, etc.)
├── lib/
│   └── data/               → Todo o conteúdo do site (decretos, mestres, blog, quiz, oráculo...)
├── prisma/
│   └── schema.prisma       → Estrutura do banco de dados PostgreSQL
├── public/                 → Imagens públicas, favicon
├── logo/                   → Arquivos da logo gerada (PNG transparente e variações)
├── package.json            → Dependências do projeto
├── next.config.js          → Configuração do Next.js
├── tailwind.config.ts      → Configuração do Tailwind CSS
└── .env                    → Variáveis de ambiente (DATABASE_URL, etc.)
```

---

## Como rodar localmente

```bash
# 1. Extrair o ZIP
unzip conexao_eu_divino_fonte.zip -d conexao_eu_divino

# 2. Entrar na pasta
cd conexao_eu_divino

# 3. Instalar dependências
yarn install

# 4. Configurar banco de dados
# Edite o arquivo .env com sua URL do PostgreSQL

# 5. Criar as tabelas no banco
npx prisma db push

# 6. Rodar em desenvolvimento
yarn dev

# O site estará disponível em: http://localhost:3000
```

---

## Site publicado (atual)

🌐 **https://conexao-eu-divino-z0fgsr.abacusai.app**

---

## Tecnologias utilizadas

- **Next.js 16** (App Router) — Framework principal
- **TypeScript** — Tipagem do código
- **Tailwind CSS** — Estilização
- **Prisma** — ORM para banco de dados
- **PostgreSQL** — Banco de dados (hospedado pela Abacus AI)
- **shadcn/ui** — Componentes de interface

---

## Conteúdo gerado (em português)

Todo o conteúdo está nos arquivos dentro de `lib/data/`:
- `decretos.ts` — 25+ decretos do Eu Sou
- `mestres.ts` — 8 Mestres Ascencionados completos
- `meditacoes.ts` — 6 meditações guiadas com roteiro completo
- `blog-posts.ts` — 6 artigos completos
- `oraculo.ts` — 30+ mensagens do Oráculo do Eu Sou
- `quiz.ts` — Quiz "Qual Mestre te Guia?" com 10 perguntas
- `diarios.ts` — Decretos e mensagens diárias rotativas
