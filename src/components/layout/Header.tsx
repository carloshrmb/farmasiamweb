"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Wordmark } from "@/components/ui/Wordmark";
import { brand, contact, nav, whatsappUrl } from "@/content/site";

const links = nav.filter((l) => l.enabled !== false);

export function Header() {
  const [open, setOpen] = useState(false);

  // Bloquea el scroll del body mientras el menu movil esta abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-200 bg-white">
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Link
            href="/"
            aria-label={`${brand.name} — inicio`}
            onClick={() => setOpen(false)}
            className="shrink-0"
          >
            <Wordmark />
          </Link>

          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-7"
            aria-label="Principal"
          >
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="whitespace-nowrap text-[0.875rem] font-medium text-ink-700 transition-colors hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ButtonLink
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <Icon name="phone" className="h-4 w-4" />
              <span className="hidden sm:inline">{contact.phoneDisplay}</span>
              <span className="sm:hidden">Contacto</span>
            </ButtonLink>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-movil"
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              className="inline-flex h-9 w-9 items-center justify-center border border-ink-200 text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-700 lg:hidden"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.5}
                strokeLinecap="round"
                className="h-4.5 w-4.5"
                aria-hidden="true"
              >
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
              </svg>
            </button>
          </div>
        </div>
      </Container>

      {/* Menu movil */}
      <div
        id="menu-movil"
        hidden={!open}
        className="border-t border-ink-200 bg-white lg:hidden"
      >
        <Container>
          <nav className="flex flex-col py-2" aria-label="Principal (móvil)">
            {links.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-ink-200 py-3.5 text-[0.9375rem] font-medium text-ink-700 last:border-b-0 hover:text-brand-700"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
