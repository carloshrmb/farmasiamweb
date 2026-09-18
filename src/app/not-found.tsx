import { Section } from "@/components/ui/Section";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <Section className="bg-white" divider={false}>
      <div className="mx-auto max-w-lg py-16 text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-4 text-3xl sm:text-4xl">
          No encontramos esta página
        </h1>
        <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-700">
          Puede que el enlace haya cambiado o que la sección aún no esté publicada.
        </p>
        <ButtonLink href="/" size="lg" className="mt-8">
          Volver al inicio
        </ButtonLink>
      </div>
    </Section>
  );
}
