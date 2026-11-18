# CivilTec — Congresso Regional de Engenharia Civil

Site institucional do CivilTec, desenvolvido em React e Vite.

## Tecnologias

- React 19
- Vite 8
- TanStack Router
- Tailwind CSS 3

O projeto funciona como uma aplicação web estática (SPA). Não depende de Base44, Cloudflare Workers, SSR ou serviços proprietários para compilar e servir as páginas públicas.

## Requisitos

- Node.js 22
- npm 10 ou superior

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

Os arquivos prontos para publicação são gerados na pasta `dist/`.

## Publicação na Vercel

Importe o repositório e use estas configurações:

- Framework Preset: **Vite**
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: `dist`
- Node.js: **22**

O arquivo `vercel.json` já contém o rewrite necessário para que as rotas da aplicação (`/inscricao`, `/submissao` e `/privacidade`) funcionem ao abrir ou atualizar diretamente a URL.

## Formulários

As páginas de inscrição e submissão permanecem disponíveis visualmente, mas o envio está explicitamente desabilitado até que a organização defina e conecte um serviço oficial de recebimento e armazenamento. O site não exibe confirmação falsa nem afirma que dados foram enviados.
