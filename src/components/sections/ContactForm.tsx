"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";
import { contactSection } from "@/content/site";

const { form } = contactSection;

/** Endpoint AJAX de Formsubmit: entrega los envios al correo de atencion. */
const FORMSUBMIT_ENDPOINT =
  "https://formsubmit.co/ajax/atencionclientes@siamculiacan.com";

const SUCCESS_MESSAGE =
  "¡Gracias! Tu mensaje fue enviado. Te contactaremos pronto.";
const ERROR_MESSAGE =
  "Hubo un problema al enviar. Intenta de nuevo en un momento.";

const inputClass =
  "w-full rounded-[2px] border border-ink-200 bg-white px-3.5 py-2.5 text-[0.9375rem] text-ink-900 placeholder:text-ink-400 transition-colors focus:border-brand-600 focus:outline-none";

/** Valida el formato del correo ademas del `type="email"` del navegador. */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Formulario de contacto conectado a Formsubmit por AJAX.
 *
 * El envio va como JSON al endpoint de arriba; Formsubmit reenvia el
 * contenido al correo de atencion a clientes. El campo `_honey` es una
 * trampa para bots: si llega con texto, el envio se descarta.
 */
export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formEl = event.currentTarget;
    const data = new FormData(formEl);

    // Trampa para bots: si viene llena, no se envia nada.
    if (String(data.get("_honey") ?? "").trim() !== "") return;

    const name = String(data.get("nombre") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("mensaje") ?? "").trim();

    if (!name || !email || !message || !EMAIL_RE.test(email)) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: "Nuevo mensaje desde el sitio Farmasiam",
          _template: "table",
        }),
      });

      const result = await response.json().catch(() => null);
      const ok =
        response.ok &&
        String(result?.success ?? "").toLowerCase() === "true";

      if (!ok) {
        setStatus("error");
        return;
      }

      formEl.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
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
          {SUCCESS_MESSAGE}
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

        {/* Trampa para bots: invisible para personas, tentadora para spam. */}
        <input
          type="text"
          name="_honey"
          defaultValue=""
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          className="hidden"
        />

        <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
          {status === "sending" ? "Enviando…" : form.submitLabel}
        </Button>

        {status === "error" ? (
          <p
            role="status"
            aria-live="polite"
            className="border-l-2 border-brand-600 bg-ink-50 px-3.5 py-3 text-[0.75rem] leading-relaxed text-ink-700"
          >
            {ERROR_MESSAGE}
          </p>
        ) : null}

        <p className="text-[0.75rem] leading-relaxed text-ink-500">{form.disclaimer}</p>
      </form>
    </div>
  );
}
