# CivilTec — Congresso Regional de Engenharia Civil

Site institucional do CivilTec, com informações do evento, programação, palestrantes, inscrições e submissão de trabalhos.

## Stack

- React 19 e JavaScript
- TanStack Start e TanStack Router
- Vite 8
- Tailwind CSS 3
- Nitro (preset Vercel) para execução SSR

## Requisitos

- Node.js 22.12 ou superior (recomendado)
- npm 10 ou superior
- Acesso ao projeto Base44 para habilitar persistência, autenticação e publicação

## Desenvolvimento local

```bash
npm install
npm run dev
```

Para testar os recursos conectados ao Base44, vincule o projeto à aplicação correta usando a CLI e configure as credenciais/variáveis exigidas pelo ambiente. Sem o backend Base44, as páginas públicas podem ser visualizadas, mas inscrições e submissões não serão persistidas.

## Verificações

```bash
npm run lint
npm run build
```

## Publicação (Vercel)

Importe o repositório na Vercel. O framework é detectado automaticamente (build: `npm run build`); o Nitro gera a saída em `.vercel/output`. Não é necessário configurar mais nada.

Observação: inscrições e submissões ainda não são persistidas (os formulários mostram a mensagem de erro de "serviço não conectado"). Conecte um banco ou serviço de e-mail via server functions para ativar.

## Observações

- Os canais oficiais de e-mail e WhatsApp estão temporariamente como placeholders até a organização confirmar os contatos.
- Antes de divulgar a programação, confirme a sala do minicurso “Membranas de Alta Performance para Impermeabilização”: há conflito de sala no Dia 1, das 13h às 17h, com outro minicurso listado na Sala de Aula.
