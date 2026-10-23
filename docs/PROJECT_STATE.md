# Estado del proyecto

_Actualizado: 23/10/2026_

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
| Alta | **Formulario de contacto** | Usa una clave de Web3Forms creada por el desarrollador anterior: no se sabe a qué mail llegan las consultas. Crear una clave propia con el mail del centro y reemplazarla en `src/components/Contact.astro`. |
| Alta | **Renovar el dominio** | Vence el **28/03/2027** en NIC.ar y no se renueva solo. Renovar con margen (febrero de 2027). |
| Media | **Plan de Vercel** | El plan Hobby es para uso no comercial. Decidir si se pasa a Pro. |
| Media | **Fotos del equipo** | `site.ts` usa `profesional-4.jpg` y `profesional-5.jpg`, que no existen. |
| Media | **Página `/servicios/` en producción** | Está publicada aunque la home diga "en construcción". Decidir si se oculta. |
| Baja | **Limpieza en cuentas del desarrollador anterior** | Que borre `cognilab.com.ar` de su cuenta de Vercel y su proyecto viejo. |
| Baja | **Imágenes de plantilla sin uso** | `public/images/espacio-1..3.jpg` y `hero-espacio.jpg`. |
| Baja | **Titularidad del dominio** | Está a nombre de una persona física. Evaluar si conviene pasarlo a CogniLab. |
| — | **Portal privado (futuro)** | Ver "Futuro" en ARCHITECTURE.md. Requiere aprobación antes de empezar. |

## Siguiente paso

Revisar en la vista previa de Vercel la rama `develop` (escritorio y celular), especialmente el carrusel. Después, resolver el formulario de contacto.
