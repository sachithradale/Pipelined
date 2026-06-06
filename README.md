# Pipelined

Your hiring pipeline, streamlined.

## Tech Stack

| Tool | Purpose |
|---|---|
| [Next.js 14](https://nextjs.org) | Framework — App Router, Server Components, Server Actions |
| [TypeScript](https://typescriptlang.org) | Strict mode enabled |
| [Tailwind CSS v3](https://tailwindcss.com) | Utility-first styling |
| [shadcn/ui](https://ui.shadcn.com) | Accessible UI primitives (copied into `components/ui/`) |
| [TanStack Query v5](https://tanstack.com/query) | Data fetching, caching, mutations |
| [react-hook-form](https://react-hook-form.com) | Performant forms |
| [Zod](https://zod.dev) | Schema validation — paired with react-hook-form |
| [lucide-react](https://lucide.dev) | Icon library |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm start       # serve production build
npx tsc --noEmit  # type-check only
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout — wraps every page
│   ├── page.tsx            # Route: /
│   └── globals.css         # Tailwind base + shadcn CSS variables
│
├── components/
│   ├── ui/                 # shadcn/ui primitives (Button, Input, etc.)
│   └── shared/             # App-level shared components
│       └── providers.tsx   # TanStack Query client provider
│
├── lib/
│   ├── utils.ts            # cn() — Tailwind class merger
│   └── query-client.ts     # QueryClient factory
│
├── hooks/                  # Custom React hooks (data fetching, UI state)
├── actions/                # Next.js Server Actions (mutations, form handlers)
├── types/                  # TypeScript interfaces and shared types
│
├── components.json         # shadcn/ui CLI config
├── tailwind.config.ts      # Theme tokens (colors, radius, animations)
├── tsconfig.json           # strict: true
└── next.config.mjs
```

## Adding shadcn Components

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add input
npx shadcn-ui@latest add form
npx shadcn-ui@latest add dialog
```

Components are copied into `components/ui/` and can be edited freely.

## Import Alias

Use `@/` to import from the project root — no relative path climbing:

```ts
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
```
