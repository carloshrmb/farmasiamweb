import Image from "next/image";
import { brand } from "@/content/site";
import { cn } from "@/lib/cn";

/**
 * Marca compacta para header y footer: la cruz (imagen) + el wordmark
 * escrito como texto real. El logo completo con bajada es demasiado alto
 * para estos espacios, por eso no se usa aqui.
 */
export function Wordmark({
  size = "md",
  tone = "light",
  showSubtitle = true,
  className,
}: {
  size?: "sm" | "md";
  /** `light` = sobre fondo claro · `dark` = sobre fondo oscuro */
  tone?: "light" | "dark";
  showSubtitle?: boolean;
  className?: string;
}) {
  const markSize = size === "sm" ? "h-7" : "h-9";
  const nameSize = size === "sm" ? "text-lg" : "text-xl";

  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <Image
        src={brand.logoMark}
        alt=""
        width={brand.logoMarkWidth}
        height={brand.logoMarkHeight}
        priority
        className={cn(markSize, "w-auto")}
      />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            nameSize,
            "font-semibold italic tracking-[-0.01em]",
            tone === "dark" ? "text-white" : "text-black"
          )}
        >
          {brand.wordmark.first}
          <span
            className={
              tone === "dark" ? "text-brand-gradient-dark" : "text-brand-gradient"
            }
          >
            {brand.wordmark.second}
          </span>
        </span>
        {showSubtitle ? (
          <span
            className={cn(
              "mt-1 text-[0.5625rem] font-medium uppercase tracking-[0.12em]",
              tone === "dark" ? "text-ink-300" : "text-[#333333]"
            )}
          >
            {brand.wordmark.subtitle}
          </span>
        ) : null}
      </span>
    </span>
  );
}
