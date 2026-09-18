import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { promo } from "@/content/site";

export function PromoBar() {
  if (!promo.enabled) return null;

  return (
    <div className="sticky top-[4.5rem] z-40 bg-gradient-to-r from-[#6E1B8C] to-[#4A1868] text-white">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 py-3 text-center sm:justify-between sm:text-left">
          <p className="inline-flex flex-wrap items-center justify-center gap-2.5 sm:justify-start">
            <Icon name="pulse" className="h-4 w-4 shrink-0 text-brand-200" strokeWidth={1.75} />
            <span className="text-sm font-bold uppercase tracking-wide sm:text-base">
              {promo.highlight}
            </span>
            <span className="bg-amber-400 px-2 py-0.5 text-[0.625rem] font-bold uppercase tracking-wide text-ink-900">
              Siempre
            </span>
            <span className="text-[0.8125rem] font-normal normal-case text-white/85">
              {promo.message.trim()}
            </span>
          </p>

          <a
            href={promo.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 border border-white/70 px-4 py-1.5 text-[0.8125rem] font-semibold text-white transition-colors hover:bg-white hover:text-brand-700"
          >
            {promo.cta.label}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
