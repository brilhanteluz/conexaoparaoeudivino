# Conexão para o Eu Divino

🌐 https://conexaoparaoeudivino.com.br

Site em Next.js exportado como site **estático** e publicado no **GitHub Pages**.

## Publicação

O site já gerado fica na pasta **`docs/`** da branch `main`, que é a pasta publicada pelo GitHub Pages
(**Settings → Pages → Source = "Deploy from a branch" → `main` / `/docs`**).

Para atualizar o site depois de mudar o código:

```bash
yarn build                     # gera o site estático em out/
rm -rf docs && cp -a out docs  # substitui a versão publicada
touch docs/.nojekyll           # necessário para o GitHub servir a pasta _next
git add docs && git commit -m "Atualiza site" && git push
```

O domínio personalizado é definido pelo arquivo `docs/CNAME` (`conexaoparaoeudivino.com.br`), gerado a partir de `public/CNAME`.

## Rodar localmente

```bash
corepack enable
yarn install
yarn dev      # http://localhost:3000
yarn build    # gera o site estático em out/
```

## Observações

- Páginas: Início, Presença Divina Eu Sou, Decretos e Afirmações, Estudos, Práticas, Pérolas de Sabedoria,
  Canalizações, Vídeos e Imagens, Downloads e posts do blog (`/blog/...`).
- O conteúdo (textos migrados do Wix) fica em `lib/content/*.json`; as imagens em `public/wix/` e `public/img/`.
- Sem banco de dados: o GitHub Pages só serve arquivos estáticos. O contador de decretos usa o armazenamento
  do navegador (`lib/local-store.ts`).
