import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { hero } from "@/content/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-ink-200">
      <Image
        src="/images/hero_fondo.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      <Container className="relative z-10">
        <div className="max-w-2xl py-20 sm:py-24 lg:py-32">
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 border border-white/30 px-3 py-1.5">
              <Icon name="pulse" className="h-3.5 w-3.5 text-[#E3B8EA]" />
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white">
                {hero.slogan}
              </span>
            </span>

            <span className="inline-flex items-center border border-amber-300/70 bg-amber-400/10 px-3 py-1.5 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-amber-200">
              25% de descuento en tienda
            </span>
          </div>

          <h1 className="mt-6 text-[2.125rem] leading-[1.12] text-white sm:text-[2.75rem] lg:text-[3.125rem]">
            {hero.title.before}
            <em className="italic text-[#E3B8EA]">{hero.title.highlight}</em>
            {hero.title.after}
          </h1>

          <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-white/85 sm:text-base">
            {hero.subtitle}
          </p>

          <ul className="mt-8 grid gap-y-3 border-t border-white/20 pt-8 sm:grid-cols-3 sm:gap-x-6">
            {hero.badges.map((badge) => (
              <li key={badge.label} className="flex items-start gap-2.5">
                <Icon
                  name={badge.icon}
                  className="mt-px h-4 w-4 shrink-0 text-[#E3B8EA]"
                />
                <span className="text-[0.8125rem] leading-snug text-white/85">
                  {badge.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
