/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  FARMASIAM — Contenido del sitio
 * ─────────────────────────────────────────────────────────────────────────────
 *  Este archivo concentra TODO el texto, datos de contacto e imagenes del sitio.
 *  Para actualizar el sitio normalmente basta con editar este archivo:
 *  no hay copy escrito directamente dentro de los componentes.
 *
 *  Los textos marcados con  // TODO: copy cliente  son placeholders
 *  redactados de forma profesional, listos para sustituirse por el texto final.
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ── Tipos ────────────────────────────────────────────────────────────────────

/** Iconos disponibles. Ver src/components/ui/Icon.tsx para agregar mas. */
export type IconName =
  | "pulse"
  | "target"
  | "eye"
  | "heart"
  | "monitor-heart"
  | "scalpel"
  | "hospital-bed"
  | "supplies"
  | "stethoscope"
  | "storefront"
  | "shield-check"
  | "truck"
  | "clock"
  | "phone"
  | "whatsapp"
  | "instagram"
  | "map-pin"
  | "mail"
  | "chevron-left"
  | "chevron-right";

export type NavLink = {
  label: string;
  /** Ancla dentro del home (#id) o ruta absoluta (/catalogo) */
  href: string;
  /** Si es false, no se renderiza. Util para secciones aun no publicadas. */
  enabled?: boolean;
};

export type Specialty = {
  id: string;
  icon: IconName;
  /** Ilustracion opcional. Si existe, reemplaza al icono de linea. */
  image?: string;
  title: string;
  description: string;
};

export type Audience = {
  id: string;
  icon: IconName;
  /** Ilustracion opcional que se muestra arriba del numero. */
  image?: string;
  /** true si `image` es una foto real (aplica velo morado); false/ausente = ilustración de línea. */
  photo?: boolean;
  title: string;
  description: string;
};

export type Branch = {
  id: string;
  name: string;
  /** Etiqueta sobre el nombre: "Matriz" o "Sucursal". */
  label: string;
  /** Calle y numero */
  street: string;
  /** Colonia, ciudad, estado */
  area: string;
  phone?: string;
  /** Dejar vacio si aun no hay horario confirmado: no se muestra. */
  hours: string[];
  /** Nota corta opcional debajo de los datos. */
  note?: string;
  /** Query para Google Maps. Se usa tal cual en el iframe y en el link. */
  mapQuery: string;
  /**
   * Direccion de contacto principal: es la que muestran la barra superior
   * y el footer. Debe apuntar a una sucursal con direccion confirmada.
   */
  primary?: boolean;
};

// ── Marca ────────────────────────────────────────────────────────────────────

export const brand = {
  name: "Farmasiam",
  legalName: "Farmasiam — Insumos Médicos Hospitalarios",
  shortDescription: "Insumos Médicos Hospitalarios",
  /** Logo completo (cruz + wordmark + bajada). Para usos grandes. */
  logo: "/logo.png",
  logoWidth: 946,
  logoHeight: 536,
  logoAlt: "Farmasiam — Insumos Médicos Hospitalarios",
  /** Solo la cruz con la linea de pulso. Se usa en header y footer,
      acompanada del wordmark tipografiado (ver `wordmark`). */
  logoMark: "/logo-mark.png",
  logoMarkWidth: 313,
  logoMarkHeight: 295,
  /**
   * El wordmark se escribe como texto real, no como imagen: "FARMA" en
   * negro y "SIAM" con el degradado de marca. Ver components/ui/Wordmark.tsx
   */
  wordmark: {
    first: "FARMA",
    second: "SIAM",
    subtitle: "Insumos Médicos Hospitalarios",
  },
  city: "Culiacán, Sinaloa",
  // El documento fuente del cliente dice 2005 en una pagina y 2006 en otra.
  // El texto oficial mas reciente (sep 2026) dice 2006, y es el que se usa.
  foundedYear: 2006,
} as const;

// ── Contacto ─────────────────────────────────────────────────────────────────

export const contact = {
  /** Formato humano, es lo que se muestra en pantalla. */
  phoneDisplay: "667 716 55 54",
  /** Formato E.164 para los enlaces tel: y wa.me */
  phoneE164: "+526677165554",
  whatsappNumber: "526677165554",
  whatsappMessage:
    "Hola, me gustaría recibir información sobre sus insumos y equipo médico.",
  /** TODO: copy cliente — confirmar correo oficial */
  email: "contacto@farmasiam.mx",
  instagramHandle: "@farmasiam.mx",
  instagramUrl: "https://instagram.com/farmasiam.mx",
  /** Opcional: dejar en null si no aplica */
  facebookUrl: null as string | null,
} as const;

/** Link de WhatsApp ya armado, listo para usar en cualquier boton. */
export const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
  contact.whatsappMessage
)}`;

export const telUrl = `tel:${contact.phoneE164}`;

/** Mensaje por defecto al escribirle a una sucursal por WhatsApp. */
export const branchWhatsappMessage = "Hola, quisiera más información";

/**
 * Link de WhatsApp para el telefono de una sucursal especifica.
 * Recibe el telefono tal como esta en `branches.items` (ej. "667 503 8860").
 */
export function branchWhatsappUrl(phone: string) {
  return `https://wa.me/52${phone.replace(/\s/g, "")}?text=${encodeURIComponent(
    branchWhatsappMessage
  )}`;
}

// ── Navegación ───────────────────────────────────────────────────────────────

/**
 * Bandera para publicar el catalogo de productos.
 * Cuando el cliente entregue el catalogo: poner en true y llenar /catalogo.
 */
export const FEATURE_CATALOG = false;

export const nav: NavLink[] = [
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Áreas de especialidad", href: "#especialidad" },
  { label: "Para quién", href: "#para-quien" },
  { label: "Sucursales", href: "#sucursales" },
  { label: "Catálogo", href: "/catalogo", enabled: FEATURE_CATALOG },
  { label: "Contacto", href: "#contacto" },
];

// ── Franja de promoción ──────────────────────────────────────────────────────

/**
 * Franja angosta bajo el header. Poner `enabled: false` para ocultarla
 * sin borrar nada (por ejemplo, cuando termine la promocion).
 */
export const promo = {
  enabled: true,
  /** Se muestra en negritas al inicio del mensaje. */
  highlight: "25% de descuento",
  message: " toda la semana, solo en Farmasiam",
  cta: {
    label: "Preguntar por WhatsApp",
    href: "https://wa.me/526674894972",
  },
} as const;

// ── Hero ─────────────────────────────────────────────────────────────────────

export const hero = {
  /** Slogan real del cliente. Va en el badge sobre el titulo. */
  slogan: "Tu proveedor hospitalario",
  /**
   * El titulo se parte en tres para poder resaltar `highlight` en cursiva
   * y color de acento dentro de la misma frase.
   */
  title: {
    before: "Insumos y equipo médico hospitalario de ",
    highlight: "alta especialidad",
    after: "",
  },
  subtitle:
    "Abastecemos a hospitales, clínicas y profesionales de la salud en Sinaloa con insumos y equipo de alta especialidad para terapia intensiva, cirugía y áreas críticas. Producto confiable, asesoría técnica y entrega oportuna.",
  primaryCta: { label: "Contáctanos", href: "#contacto" },
  /** Sellos de confianza bajo los botones. Editables o vaciables. */
  badges: [
    { icon: "shield-check" as IconName, label: "Producto de marcas certificadas" },
    { icon: "truck" as IconName, label: "Entrega en Culiacán y zona centro de Sinaloa" },
    { icon: "stethoscope" as IconName, label: "Asesoría técnica especializada" },
  ],
  /**
   * Ficha de datos del panel derecho. Label a la izquierda, valor a la
   * derecha, separados por lineas finas. Sin encabezado.
   */
  facts: [
    { label: "Ubicación", value: "Culiacán, Sinaloa" },
    { label: "Especialidad", value: "Terapia intensiva · Cirugía general" },
    { label: "Sucursales", value: "3 en Culiacán" },
    { label: "Atendemos a", value: "Médicos, hospitales y público en general" },
  ],
  /**
   * Fotografia del hero. Mientras sea null, la ficha se apoya en un bloque
   * de color desplazado. Al poner una ruta (ej. "/hero.jpg") la ficha pasa
   * a flotar sobre la foto — ver HeroPanel en components/sections/Hero.tsx
   */
  image: null as string | null,
  imageAlt: "Equipo médico hospitalario Farmasiam",
} as const;

// ── Quiénes somos ────────────────────────────────────────────────────────────

export const about = {
  eyebrow: "Nuestra empresa",
  title: "Quiénes somos",
  /** Cifra destacada arriba del parrafo. */
  sinceLabel: "Desde 2006",
  /** Texto oficial de la empresa. */
  body: "Empresa sinaloense fundada en 2006 por el Dr. Luis Arturo Martínez. Distinguidos por representar a las mejores marcas del área médica, brindamos soluciones integrales en distribución de insumos y equipo hospitalario de alta especialidad.",
  /** Tres columnas bajo el parrafo, separadas por lineas finas. */
  pillars: [
    {
      title: "Misión",
      icon: "target",
      body: "Distribuir las mejores marcas de material y equipamiento médico, brindando soporte oportuno a especialistas en salud.",
    },
    {
      title: "Visión",
      icon: "eye",
      body: "Ser el principal distribuidor de insumos médicos del sector salud, con mayor expansión en el estado de Sinaloa.",
    },
    {
      title: "Valores",
      icon: "heart",
      body: "Honestidad, atención personalizada, calidad humana, trabajo en equipo, compromiso y pasión.",
    },
  ],
} as const;

// ── Áreas de especialidad (carrusel) ─────────────────────────────────────────

export const specialties = {
  eyebrow: "Qué hacemos",
  title: "Áreas de especialidad",
  items: [
    {
      id: "insumos-medicos",
      icon: "supplies",
      title: "Insumos médicos",
      description: "Catálogo amplio de consumibles para uso hospitalario y clínico.",
    },
    {
      id: "equipo-hospitalario",
      icon: "hospital-bed",
      image: "/images/icon_monitor_medico.webp",
      title: "Equipo hospitalario",
      description: "Mobiliario y equipamiento para instalaciones médicas.",
    },
    {
      id: "terapia-intensiva",
      icon: "monitor-heart",
      image: "/images/icon_cuidados_intensivos.webp",
      title: "Terapia intensiva",
      description: "Insumos y equipo para unidades de cuidados intensivos.",
    },
    {
      id: "cirugia-general",
      icon: "scalpel",
      image: "/images/icon_lampara_quirurgica.webp",
      title: "Cirugía general",
      description: "Material quirúrgico y equipo especializado.",
    },
  ] satisfies Specialty[],
} as const;

// ── Abasto ───────────────────────────────────────────────────────────────────

export const supply = {
  eyebrow: "Abasto",
  title: "Amplio surtido de insumos y equipo hospitalario",
  body: "Manejamos inventario constante para que nunca te falte lo que necesitas: insumos médicos, equipo hospitalario y material de curación, listos para entrega en Culiacán y zona.",
  ctaLabel: "Cotizar por WhatsApp",
} as const;

// ── Para quién ───────────────────────────────────────────────────────────────

export const audiences = {
  eyebrow: "Para quién",
  title: "A quién atendemos",
  subtitle:
    "Un mismo proveedor para dos formas distintas de comprar insumo médico.",
  items: [
    {
      id: "medicos-hospitales",
      icon: "stethoscope",
      image: "/images/hospital_clinicos.webp",
      photo: true,
      title: "Médicos y hospitales",
      description:
        "Abasto recurrente para hospitales, clínicas y especialistas: cotización por volumen, seguimiento de pedidos y disponibilidad de claves críticas.",
    },
    {
      id: "punto-de-venta",
      icon: "storefront",
      image: "/images/venta_directa.webp",
      photo: true,
      title: "Venta directa al público",
      description:
        "Atención en mostrador para pacientes y familiares que necesitan material de curación, insumos y equipo para cuidado en casa.",
    },
  ] satisfies Audience[],
} as const;

// ── Sucursales ───────────────────────────────────────────────────────────────

/**
 * Para agregar una sucursal: copiar un objeto y ajustar los datos.
 * El sitio genera automaticamente su tarjeta, su mapa y su enlace a Maps.
 */
export const branches = {
  eyebrow: "Sucursales",
  title: "Dónde encontrarnos",
  subtitle: "Estamos en Culiacán, Sinaloa. Pasa a mostrador o llámanos para cotizar.",
  items: [
    {
      id: "matriz",
      name: "Matriz",
      label: "Matriz",
      street: "Calle Gral. Juan José Ríos 873",
      area: "Col. Jorge Almada, Culiacán Rosales, Sinaloa, CP 80200",
      phone: "667 716 5554",
      hours: [],
      mapQuery: "Calle Gral. Juan José Ríos 873, Jorge Almada, Culiacán Rosales, Sinaloa",
      // Es la direccion que muestra el footer (ver Footer.tsx, que busca la
      // sucursal marcada con `primary`).
      primary: true,
    },
    {
      id: "chapultepec",
      name: "Sucursal Chapultepec",
      label: "Sucursal",
      street: "Doctores 355, Local 3",
      area: "Col. Chapultepec, Culiacán Rosales, Sinaloa, CP 80200",
      phone: "667 503 8860",
      hours: ["Lunes a viernes: 8:00 – 18:00", "Sábado: 8:00 – 14:00", "Domingo: cerrado"],
      mapQuery: "Doctores 355, Chapultepec, 80200 Culiacán Rosales, Sinaloa",
    },
    {
      id: "pediatrico",
      name: "Sucursal Pediátrico",
      label: "Sucursal",
      street: "Calle Constitución 616",
      area: "Col. Jorge Almada, Culiacán Rosales, Sinaloa, CP 80200",
      phone: "667 177 0982",
      // TODO: copy cliente — confirmar horario exacto
      hours: ["Lunes a domingo: 7:00 – 20:00 (por confirmar)"],
      mapQuery: "Calle Constitución 616, Jorge Almada, Culiacán Rosales, Sinaloa",
    },
  ] satisfies Branch[],
} as const;

/** URL del iframe de Google Maps (no requiere API key). */
export function mapEmbedUrl(query: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
}

/** URL para abrir la ubicación en la app de Maps. */
export function mapLinkUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

// ── Contacto (sección) ───────────────────────────────────────────────────────

export const contactSection = {
  eyebrow: "Contacto",
  title: "Cotiza con nosotros",
  subtitle:
    "Cuéntanos qué necesitas y te respondemos con disponibilidad y precio. Atendemos hospitales, clínicas, médicos y público en general.",
  form: {
    title: "Envíanos un mensaje",
    fields: {
      name: { label: "Nombre", placeholder: "Nombre completo" },
      email: { label: "Correo electrónico", placeholder: "nombre@correo.com" },
      message: {
        label: "Mensaje",
        placeholder: "Cuéntanos qué producto necesitas, cantidades y para cuándo.",
      },
    },
    submitLabel: "Enviar mensaje",
    /** Aviso mientras el formulario no tiene backend conectado. */
    disclaimer:
      "Al enviar aceptas que te contactemos por correo o teléfono para dar seguimiento a tu solicitud.",
    successMessage:
      "¡Gracias! Recibimos tu mensaje y te contactaremos a la brevedad.",
    /** El formulario aún no envía a ningún servidor. Ver TODO en ContactForm. */
    pendingBackendNote:
      "Demo: el formulario todavía no está conectado. Para una respuesta inmediata, escríbenos por WhatsApp.",
  },
} as const;

// ── Footer ───────────────────────────────────────────────────────────────────

export const footer = {
  tagline:
    "Distribuidora de insumos y equipo médico hospitalario de alta especialidad en Culiacán, Sinaloa.",
  columns: [
    {
      title: "Empresa",
      links: [
        { label: "Quiénes somos", href: "#quienes-somos" },
        { label: "Misión y valores", href: "#quienes-somos" },
        { label: "Para quién", href: "#para-quien" },
        { label: "Sucursales", href: "#sucursales" },
      ],
    },
    {
      title: "Especialidad",
      links: [
        { label: "Terapia intensiva", href: "#especialidad" },
        { label: "Cirugía general", href: "#especialidad" },
        { label: "Equipo hospitalario", href: "#especialidad" },
        { label: "Insumos médicos", href: "#especialidad" },
      ],
    },
  ],
  /** TODO: copy cliente — textos legales definitivos */
  legalLinks: [
    { label: "Aviso de privacidad", href: "#" },
    { label: "Términos y condiciones", href: "#" },
  ],
  copyright: (year: number) =>
    `© ${year} Farmasiam. Todos los derechos reservados.`,
  credits: "Insumos Médicos Hospitalarios · Culiacán, Sinaloa, México",
} as const;

// ── SEO ──────────────────────────────────────────────────────────────────────

export const seo = {
  title: "Farmasiam | Insumos y equipo médico hospitalario en Culiacán",
  description:
    "Distribuidora de insumos y equipo médico hospitalario de alta especialidad en Culiacán, Sinaloa. Terapia intensiva, cirugía general, equipo hospitalario e insumos médicos.",
  keywords: [
    "insumos médicos Culiacán",
    "equipo médico hospitalario Sinaloa",
    "distribuidora médica Culiacán",
    "terapia intensiva",
    "material de curación",
    "Farmasiam",
  ],
  /** Cambiar al dominio final antes de publicar. */
  siteUrl: "https://farmasiam.mx",
  ogImage: "/og-image.png", // TODO: generar imagen para redes
} as const;
