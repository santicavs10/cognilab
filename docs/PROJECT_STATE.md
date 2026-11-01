# Estado del proyecto

_Actualizado: 01/11/2026_

## Objetivo

Sitio institucional de CogniLab: claro, confiable, accesible y atractivo.
`main` muestra "Sitio en construcción" hasta que el sitio completo esté listo.

## Estado actual

- **Producción (`main`):** página "Sitio en construcción". `/servicios/` también es accesible públicamente.
- **`develop`:** sitio completo en desarrollo, con la home completa, el carrusel de "Nuestro espacio" (15 fotos), la imagen de "Nuestro enfoque" y las páginas de servicios y equipo.
- **Infraestructura:** migrada a cuentas propias (GitHub, Vercel, Cloudflare). Ver [ARCHITECTURE.md](ARCHITECTURE.md).

## Pendientes

| Prioridad | Pendiente | Detalle |
|---|---|---|
| Alta | **Renovar el dominio** | Vence el **28/03/2027** en NIC.ar y no se renueva solo. Renovar con margen (febrero de 2027). |
| Media | **Plan de Vercel** | El plan Hobby es para uso no comercial. Decidir si se pasa a Pro. |
| Baja | **Foto 13 de la galería** | Su original es chica (889 px); recortada a 3:2 se ve borrosa. Reemplazar cuando haya un archivo de mayor resolución. |
| Baja | **`public/logos/og-image.svg` sin uso** | Reemplazada por `og-image.png` (las redes no muestran SVG). Se puede borrar. |
| Media | **Página `/servicios/` en producción** | Está publicada aunque la home diga "en construcción". Decidir si se oculta. |
| Baja | **Limpieza en cuentas del desarrollador anterior** | Que borre `cognilab.com.ar` de su cuenta de Vercel y su proyecto viejo. |
| Baja | **Imágenes de plantilla sin uso** | `public/images/espacio-1..3.jpg`, `hero-espacio.jpg` y `profesional-1..3.jpg`. |
| Baja | **Titularidad del dominio** | Está a nombre de una persona física. Evaluar si conviene pasarlo a CogniLab. |
| — | **Portal privado (futuro)** | Ver "Futuro" en ARCHITECTURE.md. Requiere aprobación antes de empezar. |

## Siguiente paso

Publicar: cuando el usuario dé el visto bueno final a la vista previa, pasar `develop` a `main` (avance directo, sin conflictos) y verificar www, la redirección sin www y un envío del formulario desde el sitio real. Decisión de CogniLab: no figurar en Google Maps (por eso los datos para Google no incluyen la dirección).
