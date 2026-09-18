"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";

const DISMISS_KEY = "farmasiam-promo-dismissed";

export function PromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(DISMISS_KEY)) return;
    } catch {}
    const timer = setTimeout(() => setOpen(true), 700);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/70 p-4"
      onClick={close}
    >
      <div
        className="relative w-full max-w-sm bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center border border-ink-200 bg-white text-ink-700 transition-colors hover:text-brand-700"
        >
          <Icon name="close" className="h-4 w-4" />
        </button>

        <Image
          src="/images/promo_poster.webp"
          alt="25% de descuento toda la semana en Farmasiam"
          width={700}
          height={718}
          className="h-auto w-full"
          priority
        />
      </div>
    </div>
  );
}
