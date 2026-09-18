import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { audiences } from "@/content/site";

export function Audiences() {
  return (
    <Section id="para-quien" className="bg-ink-50">
      <SectionHeading
        eyebrow={audiences.eyebrow}
        title={audiences.title}
        subtitle={audiences.subtitle}
      />

      <div className="mt-10 grid gap-6 sm:grid-cols-2 md:max-w-3xl md:mx-auto">
        {audiences.items.map((item, i) => (
          <article key={item.id} className="border border-ink-200 bg-white">
            <div className="relative aspect-[4/3] overflow-hidden border-b border-ink-200 bg-brand-50">
              {item.image ? (
                <Image
                  src={item.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className={item.photo ? "object-cover" : "object-contain p-10"}
                />
              ) : null}
              {item.photo ? (
                <div className="absolute inset-0 bg-[#6E1B8C]/35" />
              ) : null}
            </div>

            <div className="p-6">
              <span
                aria-hidden
                className="block font-serif text-2xl font-semibold text-brand-600"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg leading-snug">{item.title}</h3>
              <p className="mt-3 text-[0.8125rem] leading-relaxed text-ink-700">
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
