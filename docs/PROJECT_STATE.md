# Estado del proyecto

_Actualizado: 01/11/2026_

## Objetivo

Sitio institucional de CogniLab: claro, confiable, accesible y atractivo.
Sitio publicado en https://www.cognilab.com.ar desde el 01/11/2026. Los cambios se hacen en `develop` (vista previa) y se publican pasando `develop` a `main`.

## Estado actual

- **Producción (`main`):** sitio completo (inicio, servicios y equipo), publicado el 01/11/2026.
- **`develop`:** igual a `main`; ahí se hacen los cambios y se revisan en la vista previa antes de publicarlos.
- **Infraestructura:** migrada a cuentas propias (GitHub, Vercel, Cloudflare). Ver [ARCHITECTURE.md](ARCHITECTURE.md).

## Pendientes

| Prioridad | Pendiente | Detalle |
|---|---|---|
| Alta | **Renovar el dominio** | Vence el **28/03/2027** en NIC.ar y no se renueva solo. Renovar con margen (febrero de 2027). |
| Media | **Plan de Vercel** | El plan Hobby es para uso no comercial. Decidir si se pasa a Pro. |
| Baja | **Foto 13 de la galería** | Su original es chica (889 px); recortada a 3:2 se ve borrosa. Reemplazar cuando haya un archivo de mayor resolución. |
| Baja | **`public/logos/og-image.svg` sin uso** | Reemplazada por `og-image.png` (las redes no muestran SVG). Se puede borrar. |
| Baja | **Limpieza en cuentas del desarrollador anterior** | Que borre `cognilab.com.ar` de su cuenta de Vercel y su proyecto viejo. |
| Baja | **Imágenes de plantilla sin uso** | `public/images/espacio-1..3.jpg`, `hero-espacio.jpg` y `profesional-1..3.jpg`. |
| Baja | **Titularidad del dominio** | Está a nombre de una persona física. Evaluar si conviene pasarlo a CogniLab. |
| — | **Portal privado (futuro)** | Ver "Futuro" en ARCHITECTURE.md. Requiere aprobación antes de empezar. |

## Siguiente paso

Que CogniLab envíe una consulta de prueba desde el sitio publicado y confirme que llega a equipo.cognilab@gmail.com. Decisión vigente: no figurar en Google Maps (los datos para Google no incluyen la dirección).
