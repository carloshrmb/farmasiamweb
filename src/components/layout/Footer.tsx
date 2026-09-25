import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Wordmark } from "@/components/ui/Wordmark";
import {
  branches,
  contact,
  footer,
  whatsappUrl,
} from "@/content/site";

const socials = [
  { icon: "instagram" as const, label: contact.instagramHandle, href: contact.instagramUrl },
  { icon: "whatsapp" as const, label: "WhatsApp", href: whatsappUrl },
];

export function Footer() {
  const year = new Date().getFullYear();
  const main = branches.items.find((b) => b.primary) ?? branches.items[0];

  return (
    <footer className="bg-ink-900 text-ink-300">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Wordmark tone="dark" />
            <p className="mt-5 max-w-xs text-[0.8125rem] leading-relaxed text-ink-400">
              {footer.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center border border-white/15 text-ink-300 transition-colors hover:border-white hover:text-white"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={col.title + link.label}>
                    <Link
                      href={link.href}
                      className="text-[0.8125rem] text-ink-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-sans text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-white">
              Contacto
            </h3>
            <ul className="mt-5 space-y-3 text-[0.8125rem] text-ink-400">
              <li className="flex gap-2.5">
                <Icon name="map-pin" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <span>
                  {main.street}
                  <br />
                  {main.area}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {contact.phoneDisplay}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all transition-colors hover:text-white"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-2.5">
                <Icon name="instagram" className="mt-0.5 h-4 w-4 shrink-0 text-brand-300" />
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {contact.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-[0.75rem] text-ink-400">
            <p>{footer.copyright(year)}</p>
            <p className="mt-1">{footer.credits}</p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-[0.75rem] text-ink-400 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
