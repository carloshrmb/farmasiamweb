import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { specialties } from "@/content/site";

export function Specialties() {
  return (
    <Section id="especialidad" className="border-y border-ink-200 bg-white">
      <SectionHeading eyebrow={specialties.eyebrow} title={specialties.title} />
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {specialties.items.map((item) => (
          <article
            key={item.id}
            className="group relative flex flex-col items-center overflow-hidden rounded-[20px] bg-[#FAF7FC] px-6 pb-8 pt-9 text-center shadow-[0_4px_16px_rgba(110,27,140,0.07)] transition-all duration-300 ease-out hover:-translate-y-[5px] hover:shadow-[0_14px_32px_rgba(110,27,140,0.16)]"
          >
            <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-brand-500" />

            {item.image ? (
              <Image
                src={item.image}
                alt=""
                width={152}
                height={152}
                className="-my-5 h-[9.5rem] w-[9.5rem] transition-transform duration-300 ease-out group-hover:scale-[1.04]"
              />
            ) : (
              <div className="flex h-28 w-28 items-center justify-center rounded-full bg-brand-50 transition-colors duration-300 group-hover:bg-brand-100">
                <Icon name={item.icon} className="h-14 w-14 text-brand-600" strokeWidth={1.25} />
              </div>
            )}

            <h3 className="mt-5 text-xl leading-snug">{item.title}</h3>
            <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-700">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
