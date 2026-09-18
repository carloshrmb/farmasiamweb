"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contactSection, whatsappUrl } from "@/content/site";

const { form } = contactSection;

const inputClass =
  "w-full rounded-[2px] border border-ink-200 bg-white px-3.5 py-2.5 text-[0.9375rem] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-600 focus:outline-none";

/**
 * Formulario de contacto — TODAVIA SIN BACKEND.
 *
 * Para conectarlo mas adelante, reemplazar el cuerpo de `handleSubmit` por un
 * POST a un route handler (ej. src/app/api/contacto/route.ts) o a un servicio
 * externo (Resend, Formspree, etc.). El markup y los estados ya estan listos.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    // TODO: enviar los datos al backend cuando exista.
    await new Promise((resolve) => setTimeout(resolve, 600));

    setStatus("sent");
    event.currentTarget.reset();
  }

  if (status === "sent") {
    return (
      <div className="flex h-full min-h-[22rem] flex-col items-center justify-center border border-ink-200 bg-white p-8 text-center">
        <span className="inline-flex h-12 w-12 items-center justify-center bg-brand-600 text-white">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="m5 12.5 4.5 4.5L19 7.5" />
          </svg>
        </span>
        <p className="mt-5 max-w-sm text-[0.9375rem] leading-relaxed text-ink-700">
          {form.successMessage}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 border-b border-brand-600 pb-0.5 text-[0.8125rem] font-medium text-brand-700 hover:border-brand-800 hover:text-brand-800"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="border border-ink-200 bg-white p-6 sm:p-8">
      <h3 className="text-lg">{form.title}</h3>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label htmlFor="nombre" className="mb-2 block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
            {form.fields.name.label}
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder={form.fields.name.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
            {form.fields.email.label}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder={form.fields.email.placeholder}
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="mensaje" className="mb-2 block text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
            {form.fields.message.label}
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            required
            rows={5}
            placeholder={form.fields.message.placeholder}
            className={`${inputClass} resize-y`}
          />
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : form.submitLabel}
        </Button>

        <p className="text-[0.75rem] leading-relaxed text-ink-500">{form.disclaimer}</p>

        {/* Quitar este aviso cuando el formulario quede conectado */}
        <p className="border-l-2 border-brand-600 bg-ink-50 px-3.5 py-3 text-[0.75rem] leading-relaxed text-ink-700">
          {form.pendingBackendNote}{" "}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-700 underline underline-offset-2 hover:text-brand-800"
          >
            Abrir WhatsApp
          </a>
        </p>
      </form>
    </div>
  );
}
