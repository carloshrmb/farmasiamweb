import type { ReactNode } from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { cn } from "@/lib/cn";

type SectionProps = {
  id?: string;
  className?: string;
  /** Muestra la linea de pulso sobre el borde superior. Default: true */
  divider?: boolean;
  children: ReactNode;
};

/** Envoltura de seccion con el ritmo vertical estandar. */
export function Section({ id, className, divider = true, children }: SectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-28 py-16 sm:py-20 lg:py-24", className)}
    >
      {divider ? <PulseDivider /> : null}
      <Container>{children}</Container>
    </section>
  );
}

/**
 * Separador de seccion: un recuadro con la linea de pulso del logo,
 * centrado sobre la linea que divide esta seccion de la anterior.
 */
function PulseDivider() {
  return (
    <div
      aria-hidden
      className="absolute left-1/2 top-0 z-10 flex h-7 -translate-x-1/2 -translate-y-1/2 items-center border border-ink-200 bg-white px-3"
    >
      <Icon name="pulse" className="h-4 w-8 text-brand-600" strokeWidth={1.5} />
    </div>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

/**
 * Encabezado de seccion: eyebrow en mayusculas, titulo en serif y una
 * regla fina debajo, que es lo que da el aire institucional.
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  className,
}: HeadingProps) {
  return (
    <div
      className={cn(
        "border-b border-ink-200 pb-8",
        align === "center" && "text-center",
        className
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 max-w-3xl text-[1.75rem] leading-[1.15] sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-ink-700 sm:text-base",
            align === "center" && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
