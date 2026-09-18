import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import { ContactForm } from "./ContactForm";
import {
  contact,
  contactSection,
  whatsappUrl,
  type IconName,
} from "@/content/site";

type Channel = {
  icon: IconName;
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

const channels: Channel[] = [
  {
    icon: "phone",
    label: "Teléfono",
    value: contact.phoneDisplay,
    href: whatsappUrl,
    external: true,
  },
  {
    icon: "whatsapp",
    label: "WhatsApp",
    value: contact.phoneDisplay,
    href: whatsappUrl,
    external: true,
  },
  {
    icon: "instagram",
    label: "Instagram",
    value: contact.instagramHandle,
    href: contact.instagramUrl,
    external: true,
  },
  { icon: "mail", label: "Correo", value: contact.email, href: `mailto:${contact.email}` },
];

export function Contact() {
  return (
    <Section id="contacto" className="bg-ink-50">
      <SectionHeading
        eyebrow={contactSection.eyebrow}
        title={contactSection.title}
        subtitle={contactSection.subtitle}
      />

      <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <dl className="border-t border-ink-200">
            {channels.map((ch) => (
              <div key={ch.label} className="border-b border-ink-200 py-5">
                <dt className="flex items-center gap-2 text-[0.6875rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
                  <Icon name={ch.icon} className="h-3.5 w-3.5 text-brand-600" />
                  {ch.label}
                </dt>
                <dd className="mt-2">
                  <a
                    href={ch.href}
                    {...(ch.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="text-[0.9375rem] font-medium text-ink-900 transition-colors hover:text-brand-700"
                  >
                    {ch.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
