# Portal Web

Launcher estático en Next.js para centralizar apps activas y placeholders futuros.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Deploy en Vercel

## Desarrollo local

```bash
pnpm install
pnpm dev
```

## Scripts

```bash
pnpm dev
pnpm lint
pnpm build
pnpm start
```

## Configuración de apps

Las tarjetas se definen en:

- `src/config/apps.ts`

Para agregar una nueva app, añade un objeto al array `PORTAL_APPS`.

## Back to Portal (futuro)

Patrón exacto recomendado para que cada app agregue más adelante un botón "Volver al portal":

- Patrón general: `https://<PORTAL_BASE_URL>/?from=<app-id>`

IDs acordados:

- `tasko-ai`
- `pdr-gantt`

Ejemplos:

- `https://<PORTAL_BASE_URL>/?from=tasko-ai`
- `https://<PORTAL_BASE_URL>/?from=pdr-gantt`

Ejemplo local (opcional):

- `http://localhost:3000/?from=tasko-ai`

Nota: en este MVP no se implementa lógica especial para el parámetro `from`; solo se documenta el patrón para futuras integraciones.
