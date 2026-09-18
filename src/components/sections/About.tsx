"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import { cn } from "@/lib/cn";
import { about } from "@/content/site";

export function About() {
  return (
    <Section id="quienes-somos" className="border-y border-ink-200 bg-white">
      <div className="grid overflow-hidden bg-[#FAF7FC] lg:-mx-10 lg:grid-cols-[55fr_45fr] xl:-mx-20">
        <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
          <p className="eyebrow">{about.eyebrow}</p>
          <h2 className="mt-3 text-[1.75rem] leading-[1.15] sm:text-4xl">
            {about.title}
          </h2>

          <p className="mt-5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-700 sm:text-base">
            {about.body}
          </p>

          <div className="mt-8 max-w-md">
            <PillarCarousel />
          </div>
        </div>

        <div className="relative min-h-[340px] lg:min-h-0">
          <Image
            src="/images/equipo_farmasiam.webp"
            alt="Equipo Farmasiam"
            fill
            sizes="(min-width: 1024px) 55vw, 100vw"
            className="object-contain lg:rounded-r-3xl"
          />
        </div>
      </div>
    </Section>
  );
}

function PillarCarousel() {
  const [index, setIndex] = useState(0);
  const pillar = about.pillars[index];

  function go(delta: number) {
    setIndex((current) => (current + delta + about.pillars.length) % about.pillars.length);
  }

  // Avance automático cada 5s; cualquier interacción manual reinicia el conteo.
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % about.pillars.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div>
      <div className="border border-ink-200 bg-white p-6 sm:p-7">
        <div className="flex items-center gap-3">
          <Icon name={pillar.icon} className="h-6 w-6 shrink-0 text-brand-600" strokeWidth={1.5} />
          <h3 className="text-lg leading-snug">{pillar.title}</h3>
        </div>
        <p className="mt-3 text-[0.875rem] leading-relaxed text-ink-700">{pillar.body}</p>
      </div>

      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Anterior"
          className="flex h-9 w-9 items-center justify-center border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-600"
        >
          <Icon name="chevron-left" className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-2">
          {about.pillars.map((item, i) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={item.title}
              className={cn(
                "h-2 w-2 rounded-full transition-colors",
                i === index ? "bg-brand-600" : "bg-ink-200"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Siguiente"
          className="flex h-9 w-9 items-center justify-center border border-ink-200 bg-white text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-600"
        >
          <Icon name="chevron-right" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
