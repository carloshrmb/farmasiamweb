import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";
import { FEATURE_CATALOG } from "@/content/site";

export const metadata: Metadata = {
  title: "Catálogo de productos",
  description:
    "Catálogo de insumos y equipo médico hospitalario de Farmasiam en Culiacán, Sinaloa.",
};

/**
 * ── Ruta preparada para el catálogo ──────────────────────────────────────────
 * Hoy devuelve 404 porque FEATURE_CATALOG está en false (content/site.ts).
 *
 * Cuando el cliente entregue el catálogo:
 *   1. Poner FEATURE_CATALOG = true  → aparece el link en el nav y el footer.
 *   2. Crear src/content/catalog.ts con los productos/categorías.
 *   3. Sustituir el contenido de esta página por el listado real
 *      (y, si aplica, agregar src/app/catalogo/[categoria]/page.tsx).
 * La estructura de layout, header, footer y estilos ya funciona tal cual.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export default function CatalogPage() {
  if (!FEATURE_CATALOG) notFound();

  return (
    <Section className="bg-white" divider={false}>
      <SectionHeading
        eyebrow="Catálogo"
        title="Productos"
        subtitle="Pendiente de integrar el catálogo del cliente."
        align="center"
      />
      <div className="mt-10 flex justify-center">
        <ButtonLink href="/#contacto" size="lg">
          Solicitar cotización
        </ButtonLink>
      </div>
    </Section>
  );
}
