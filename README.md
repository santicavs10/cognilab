# CogniLab — sitio institucional

Sitio web de CogniLab (psicología y psicopedagogía), publicado en **https://www.cognilab.com.ar**.
Hecho con [Astro](https://astro.build), estático y sin backend propio.

- Arquitectura, servicios conectados y cómo se publica: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)
- Estado actual, pendientes y siguiente paso: [docs/PROJECT_STATE.md](docs/PROJECT_STATE.md)

## Requisitos

- Node.js 22 LTS
- Git

## Comandos

```bash
npm ci            # instala dependencias exactas (package-lock.json)
npm run dev       # servidor local en http://localhost:4321
npm run build     # compila a dist/
npm run preview   # sirve dist/ para revisar la versión compilada
```

## Dónde cambiar cada cosa

- **Textos, datos de contacto, servicios, equipo y fotos de la galería:** `src/data/site.ts`
- **Estilos globales, colores y fuentes:** `src/styles/global.css`
- **Secciones de la home:** `src/components/`
- **Páginas:** `src/pages/` (los archivos que empiezan con `_` no se publican)
- **Logos y favicon:** `public/logos/`
- **Imágenes publicadas:** `public/images/` (ver "Imágenes" en [ARCHITECTURE.md](docs/ARCHITECTURE.md))

## Flujo de trabajo

1. Trabajar en una rama (por ejemplo `develop`), nunca directo en `main`.
2. Al subir la rama a GitHub, Vercel genera una **vista previa** con URL propia.
3. Revisar la vista previa (escritorio y celular).
4. Abrir un PR hacia `main`. Al hacer merge, Vercel publica en cognilab.com.ar.
5. Si algo sale mal: Vercel → Deployments → **Instant Rollback**.
