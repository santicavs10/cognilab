# Arquitectura y conexiones

## Stack

- **Astro 6**, salida 100 % estática (`dist/`), con `@astrojs/sitemap`.
- Sin backend, base de datos ni variables de entorno.
- JavaScript en el navegador solo donde aporta (carrusel, formulario, menú).

## Estructura

```text
src/
  data/site.ts        fuente única de textos, datos y listas (servicios, equipo, galería, FAQ)
  components/         secciones de la home (Hero, Gallery, Contact, ...)
  pages/              index, servicios, equipo; _index_full.astro = home completa sin publicar
  layouts/            MainLayout
  styles/global.css   variables de diseño (colores, fuentes, radios, sombras)
public/               archivos servidos tal cual (logos, imágenes)
```

## Mapa de servicios

```text
NIC Argentina ──delega DNS──▶ Cloudflare (DNS) ──apunta a──▶ Vercel (hosting) ◀──despliega── GitHub (código)
```

| Pieza | Dónde | Para qué |
|---|---|---|
| **Código** | GitHub `santicavs10/cognilab` | Repositorio. `main` = producción. |
| **Hosting** | Vercel, cuenta `santicavs10` (plan Hobby), proyecto `cognilab` | Compila y publica. URL interna: `cognilab-ebon.vercel.app` |
| **DNS** | Cloudflare, zona `cognilab.com.ar` | Registros que llevan el dominio a Vercel |
| **Dominio** | NIC Argentina (nic.ar), `cognilab.com.ar` | Registro del dominio. **Vence el 28/03/2027 y no se renueva solo.** Se gestiona desde la cuenta NIC.ar del responsable. |
| **Formulario de contacto** | Web3Forms (`api.web3forms.com`) | Envía por mail las consultas del formulario. La clave pública está en `src/components/Contact.astro`. |

### Publicación (Vercel)

- Vercel está conectado al repo de GitHub: cada push a `main` publica en producción; cada push a otra rama genera una vista previa.
- Preset Astro, comando `npm run build`, salida `dist/`. Sin variables de entorno.
- Dominios del proyecto: `www.cognilab.com.ar` (principal) y `cognilab.com.ar`, que redirige con 308 a `www`.

### DNS (Cloudflare)

Servidores de nombres delegados en NIC.ar: `dexter.ns.cloudflare.com` y `ullis.ns.cloudflare.com`.

| Tipo | Nombre | Valor | Proxy |
|---|---|---|---|
| CNAME | `@` | `ad1dfb5875545c27.vercel-dns-017.com` | DNS only |
| CNAME | `www` | `ad1dfb5875545c27.vercel-dns-017.com` | DNS only |
| TXT | `_vercel` | `vc-domain-verify=cognilab.com.ar,…` | — |
| TXT | `_vercel` | `vc-domain-verify=www.cognilab.com.ar,…` | — |
| CAA | `@` | letsencrypt.org, pki.goog, sectigo.com | — |

Reglas:
- **Nunca activar el proxy de Cloudflare (nube naranja)** en los registros que van a Vercel: duplica la CDN y puede romper el certificado HTTPS. Cloudflare lo sugiere; se ignora.
- Los TXT `_vercel` verifican que el dominio pertenece a este proyecto de Vercel. Se pueden quitar, pero no molestan.
- No hay correo en el dominio (sin MX). Si algún día se agrega, se cargan los registros en Cloudflare.
- DNSSEC está desactivado.
- Para un subdominio nuevo (por ejemplo `app.cognilab.com.ar`): se agrega en el proyecto de Vercel correspondiente y se crea el CNAME que Vercel indique, en Cloudflare, en modo DNS only.

### Por qué está así

- En octubre de 2026 el proyecto pasó del desarrollador anterior a la cuenta actual. Vercel no permite transferir proyectos a una cuenta Hobby, así que se creó un proyecto nuevo y se verificó el dominio por TXT.
- El DNS estaba en la cuenta de Vercel del desarrollador anterior y no se podía liberar mientras el dominio usara los servidores de Vercel. Por eso se movió a Cloudflare, con lo que el control del DNS quedó independiente de esa cuenta.
- GitHub Pages (usado al inicio) quedó despublicado y se eliminó su workflow.

## Imágenes

- **Originales:** fuera del repo, en `../banco-imagenes/` (carpeta hermana en el espacio de trabajo local). Nunca se suben a Git, porque todo lo que está en `public/` es público y Git guarda el historial para siempre.
- **Publicadas:** versiones optimizadas en `public/images/`, generadas con `sharp` (incluido en las dependencias de Astro): JPEG de calidad 78, progresivo.
- **Galería "Nuestro espacio":** `nuestro-espacio-N.jpg` (1600 px) y `nuestro-espacio-N-800.jpg` (800 px), con `N` igual al número del archivo original. Se listan en orden en `gallery` de `src/data/site.ts`. Las fotos verticales se pasan a formato apaisado (foto completa sobre un fondo desenfocado de sí misma).
- **Privacidad:** antes de publicar, revisar que no se lean nombres ni datos de pacientes. En `nuestro-espacio-7` se desenfocaron los nombres escritos a mano.

## Espacio de trabajo local

```text
Website\
├── AGENTS.md          reglas para el asistente de IA (fuera de Git)
├── banco-imagenes\    originales de fotos (fuera de Git)
└── cognilab\          este repositorio
```

Para que npm no escriba fuera del espacio de trabajo, los comandos se corren con `npm_config_cache=<repo>\.npm-cache`, `npm_config_update_notifier=false` y `ASTRO_TELEMETRY_DISABLED=1`. `.npm-cache/` está excluida localmente en `.git/info/exclude`.

## Futuro (no iniciado)

Portal privado en `app.cognilab.com.ar`, separado de este sitio (proyecto y repo propios): reuniones por video con sala de espera y links de un solo uso, y más adelante agenda y un área para familias, con roles. Los datos de salud requieren revisión legal (leyes 25.326 y 26.529) antes de guardarse.
