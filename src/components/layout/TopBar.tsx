import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { branches, contact, whatsappUrl } from "@/content/site";

/**
 * Barra utilitaria institucional. Va ARRIBA del header: direccion y telefono
 * a la izquierda, redes a la derecha.
 */
export function TopBar() {
  const main = branches.items.find((b) => b.primary) ?? branches.items[0];

  return (
    <div className="bg-ink-900 text-ink-300">
      <Container>
        <div className="flex h-10 items-center justify-between gap-4 text-[0.75rem]">
          <div className="flex min-w-0 items-center gap-5">
            <span className="hidden min-w-0 items-center gap-2 sm:flex">
              <Icon name="map-pin" className="h-3.5 w-3.5 shrink-0 text-brand-300" />
              <span className="truncate">
                {main.street}, {main.area}
              </span>
            </span>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex shrink-0 items-center gap-2 transition-colors hover:text-white"
            >
              <Icon name="phone" className="h-3.5 w-3.5 text-brand-300" />
              {contact.phoneDisplay}
            </a>
          </div>

          <a
            href={contact.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-2 transition-colors hover:text-white"
          >
            <Icon name="instagram" className="h-3.5 w-3.5 text-brand-300" />
            <span className="hidden sm:inline">{contact.instagramHandle}</span>
            <span className="sm:hidden">Instagram</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
