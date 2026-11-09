/** @type {import('next').NextConfig} */
// Configuração para gerar um site 100% estático (pasta `out/`), publicado no GitHub Pages
// com o domínio conexaoparaoeudivino.com.br.
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
