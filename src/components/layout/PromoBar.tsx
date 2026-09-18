import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { promo } from "@/content/site";

/**
 * Franja de promocion. Va pegada bajo el header (que mide 4.5rem y es
 * sticky), asi que acompaña el scroll en todas las paginas.
 * Para que se quede quieta y desaparezca al bajar, quitar
 * `sticky top-[4.5rem] z-40`.
 */
export function PromoBar() {
  if (!promo.enabled) return null;

  return (
    <div className="sticky top-[4.5rem] z-40 bg-gradient-to-r from-[#6E1B8C] to-[#4A1868] text-white">
      <Container>
        {/* En movil se acomoda en dos lineas centradas en vez de truncarse. */}
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 py-[11px] text-center text-[0.8125rem] leading-snug sm:justify-between sm:text-left">
          <p className="inline-flex items-center gap-2">
            <Icon
              name="pulse"
              className="h-4 w-4 shrink-0 text-brand-200"
              strokeWidth={1.75}
            />
            <span>
              <strong className="font-semibold">{promo.highlight}</strong>
              {promo.message}
            </span>
          </p>

          <a
            href={promo.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1 border-b border-white/40 pb-px font-medium transition-colors hover:border-white"
          >
            {promo.cta.label}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
