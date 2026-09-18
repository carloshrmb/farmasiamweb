# Farmasiam — sitio informativo

Sitio institucional de **Farmasiam · Insumos Médicos Hospitalarios**
(Culiacán, Sinaloa). Puramente informativo: **sin catálogo de productos ni
tienda en línea**.

Secciones: Hero · Quiénes somos (con misión, visión y valores) · Áreas de
especialidad (carrusel) · Para quién · Sucursales · Contacto.

Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · listo para Vercel.

Dirección visual: **institucional / corporativo médico**. Paneles planos con
bordes finos de 1px, esquinas rectas, sin sombras ni degradados decorativos.
Titulares en *Source Serif 4*, texto y UI en *IBM Plex Sans*.

Detalles de marca:
- **Franja de degradado** de 4px hasta arriba de la página
  (`bg-brand-gradient` en `globals.css`, colocada en `layout.tsx`).
- **Separadores con línea de pulso** entre secciones: un recuadro con el pulso
  del logo centrado sobre el borde superior de cada sección. Lo pinta
  `Section` automáticamente; para quitarlo en una sección, `divider={false}`.

## Correr en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

Otros comandos: `npm run build`, `npm start`, `npm run typecheck`.

## Dónde se edita el contenido

**Todo el copy vive en un solo archivo: [`src/content/site.ts`](src/content/site.ts).**
Ningún texto está escrito dentro de los componentes, así que para actualizar el
sitio con el material que entregue el cliente basta con editar ese archivo.

Está dividido en bloques:

| Bloque | Qué controla |
| --- | --- |
| `brand` | Nombre, logo, ciudad |
| `contact` | Teléfono, WhatsApp, Instagram, correo |
| `nav` | Links del menú |
| `hero` | Slogan, titular, bajada, botones, sellos y ficha de datos |
| `about` | Quiénes somos + misión, visión y valores (`pillars`) |
| `specialties` | Las 4 áreas de especialidad del carrusel |
| `audiences` | Médicos / público / franquicias |
| `branches` | Sucursales: datos, horario, nota y mapa de cada una |
| `contactSection` | Textos del formulario |
| `footer` | Columnas, legales, copyright |
| `seo` | Título, descripción, dominio |

Los placeholders pendientes de confirmar están marcados con `// TODO: copy cliente`.

```bash
grep -rn "TODO: copy cliente" src/
```

El copy de **Quiénes somos, Misión, Visión, Valores y Áreas de especialidad** ya
es el texto oficial de la empresa.

## Tareas pendientes

- **Color de marca:** el morado se define una sola vez en `src/app/globals.css`
  (`--color-brand-50` … `--color-brand-950`, base `#6E1B8C`). Los extremos del
  degradado del wordmark son `--color-brand-grad-from` / `--color-brand-grad-to`.
- **Fotos:** las secciones aceptan foto real en cuanto exista. Poner la ruta en
  `hero.image` y `about.image`; mientras sean `null` se muestra un placeholder
  marcado. En el hero, al definir `hero.image` la ficha de datos pasa
  automáticamente a flotar sobre la fotografía en vez de apoyarse en el bloque
  de color (ver `HeroPanel` en `Hero.tsx`).
- **Año de fundación:** el sitio muestra 2006 (texto oficial más reciente). El
  documento fuente original decía 2005 en una página; queda anotado en
  `brand.foundedYear`.
- **Matriz:** falta la dirección exacta. Mientras tanto su mapa está centrado en
  "Culiacán, Sinaloa".
- **Sucursal Pediátrico:** falta teléfono y horario.
- **Dirección principal:** la barra superior y el footer muestran la sucursal
  marcada con `primary: true` (hoy Pediátrico, Constitución 959). Cuando la
  Matriz tenga dirección, mover `primary` a la Matriz.
- **Horarios:** los actuales son placeholder.
- **Correo:** confirmar `contacto@farmasiam.mx`.
- **Formulario:** todavía no envía nada. Ver la sección siguiente.
- **Dominio:** actualizar `seo.siteUrl` antes de publicar.

## Logo y marca

Hay tres archivos, todos recortados y con fondo transparente:

| Archivo | Uso |
| --- | --- |
| `public/logo.png` | Logo completo (cruz + wordmark + bajada). Usos grandes. |
| `public/logo-mark.png` | Solo la cruz con la linea de pulso. Header y footer. |
| `src/app/icon.png` | Icono de pestana (la cruz sobre el morado oscuro). |

En header y footer **no se usa el logo completo**: es demasiado alto para esos
espacios. Se usa la cruz mas el wordmark escrito como texto real
([`Wordmark.tsx`](src/components/ui/Wordmark.tsx)): "FARMA" en negro y "SIAM"
con el degradado de marca via `background-clip: text`, mas la bajada en
`#333333`. Los textos salen de `brand.wordmark` en `site.ts`.

Nota sobre la marca: la linea de pulso es **espacio negativo blanco**, no un
trazo. Por eso el recorte no vuelve transparente el blanco interior — si se
hace, la linea desaparece sobre fondos oscuros.

## Agregar una sucursal

En `src/content/site.ts`, dentro de `branches.items`, copiar un objeto y ajustar
sus datos. El sitio genera sola la tarjeta con su propio mapa embebido (160px,
arriba del texto) y el enlace "Ver en Google Maps"; los mapas usan el embed
público de Google, sin API key. Si `hours` va vacío o no hay `phone`, esas filas
no se muestran.

## Carrusel de áreas de especialidad

`src/components/sections/SpecialtyCarousel.tsx`. Una tarjeta a la vez; navega
con flechas, indicadores, teclas ← → y swipe en móvil. Sin dependencias: estado
de React + transición CSS. Para agregar un área, sumar un objeto a
`specialties.items` (los indicadores se generan solos).

## Conectar el formulario de contacto

`src/components/sections/ContactForm.tsx` ya tiene el markup, la validación y los
estados (`idle` / `sending` / `sent`). Solo falta reemplazar el cuerpo de
`handleSubmit` por un `POST` real —a un route handler en `src/app/api/contacto/`
o a un servicio tipo Resend/Formspree— y quitar el aviso
`form.pendingBackendNote`.

## Agregar el catálogo más adelante

La estructura ya está preparada:

1. Poner `FEATURE_CATALOG = true` en `src/content/site.ts` → aparece el link
   "Catálogo" en el menú y la ruta deja de dar 404.
2. Crear `src/content/catalog.ts` con productos y categorías.
3. Llenar `src/app/catalogo/page.tsx` (y, si aplica,
   `src/app/catalogo/[categoria]/page.tsx`).

Header, footer, estilos y componentes de UI se reutilizan tal cual.

## Deploy en Vercel

Importar el repo en Vercel; detecta Next.js automáticamente. No hay variables de
entorno requeridas hoy (ver `.env.example` para cuando se conecte el formulario).

## Estructura

```
src/
  app/            rutas (home, /catalogo, 404, sitemap, robots, icon)
  components/
    layout/       Header, Footer
    sections/     Hero, About, Services, Audiences, Locations, Contact
    ui/           Container, Section, Button, Icon
  content/site.ts TODO el contenido del sitio
  lib/cn.ts       helper de clases
public/logo.png   placeholder — reemplazar
```
