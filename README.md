# samuel.dev

Portfólio pessoal desenvolvido com Astro, com foco em performance, SEO técnico e apresentação de projetos.

## Visão geral

Este projeto reúne:

- seção de projetos com filtros por categoria
- carrossel de imagens com lightbox
- status de disponibilidade por projeto
- área de experiência, habilidades, tecnologias e contato
- SEO configurado com metadados, Open Graph, JSON-LD, sitemap e robots

## Tecnologias

- Astro
- TypeScript
- CSS
- ESLint
- Prettier

## Requisitos

- Node.js 18+
- npm 9+

## Como rodar localmente

```bash
npm install
npm run dev
```

Aplicação local:

- [http://localhost:4321](http://localhost:4321)

## Scripts disponíveis

- `npm run dev`: inicia ambiente de desenvolvimento
- `npm run build`: gera build de produção
- `npm run preview`: inicia preview da build local
- `npm run lint`: executa lint
- `npm run format`: valida formatação com Prettier
- `npm run format:fix`: corrige formatação automaticamente
- `npm run typecheck`: executa verificação de tipos com `astro check`
- `npm run check`: executa lint, format, typecheck e build

## Estrutura principal

```text
src/
  components/    componentes de UI
  data/          conteúdo dos projetos e dados pessoais
  layouts/       layout base e metatags
  pages/         páginas Astro
  styles/        estilos globais
public/
  projects/      imagens usadas nos cards
```

## Deploy

O projeto está preparado para build estática:

```bash
npm run build
```

Os arquivos finais são gerados em `dist/`.
