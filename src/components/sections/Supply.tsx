import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { supply, whatsappUrl } from "@/content/site";

/**
 * Franja ancha de "Abasto": foto real de anaqueles con velo morado y texto
 * encima. Bloque completo (imagen + título + texto + botón).
 */
export function Supply() {
  return (
    <section className="relative overflow-hidden border-y border-ink-200">
      <Image
        src="/images/abasto_banner.webp"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#4A1868]/90 via-[#4A1868]/75 to-[#4A1868]/25" />

      <Container className="relative">
        <div className="max-w-lg py-16 sm:py-20 lg:py-24">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-[#E3B8EA]">
            {supply.eyebrow}
          </p>
          <h2 className="mt-4 text-[1.75rem] leading-[1.15] text-white sm:text-4xl">
            {supply.title}
          </h2>
          <p className="mt-5 text-[0.9375rem] leading-relaxed text-white/85 sm:text-base">
            {supply.body}
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-white"
          >
            {supply.ctaLabel}
            <span aria-hidden>→</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
