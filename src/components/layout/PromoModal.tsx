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
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink-900/70 p-3 sm:p-6"
      onClick={close}
    >
      <div
        className="relative w-full max-w-xl bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={close}
          aria-label="Cerrar"
          className="absolute right-2 top-2 flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink-800 shadow-[0_4px_14px_rgba(36,26,46,0.28)] transition-colors hover:bg-brand-600 hover:text-white sm:-right-4 sm:-top-4"
        >
          <Icon name="close" className="h-5 w-5" strokeWidth={2} />
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
