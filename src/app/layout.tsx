import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { PromoBar } from "@/components/layout/PromoBar";
import { Footer } from "@/components/layout/Footer";
import { brand, contact, seo } from "@/content/site";

/** Titulares: serif institucional. */
const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});

/** Texto y UI. */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-plex",
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${brand.name}`,
  },
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: seo.siteUrl,
    siteName: brand.legalName,
    locale: "es_MX",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#241a2e",
  width: "device-width",
  initialScale: 1,
};

/** Datos estructurados para que Google entienda el negocio local. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: brand.legalName,
  description: seo.description,
  url: seo.siteUrl,
  telephone: contact.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Gral. Juan José Ríos 873",
    addressLocality: "Culiacán",
    addressRegion: "Sinaloa",
    postalCode: "80200",
    addressCountry: "MX",
  },
  sameAs: [contact.instagramUrl],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX" className={`${plexSans.variable} ${sourceSerif.variable}`}>
      <body className="min-h-dvh bg-ink-50 antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:text-white"
        >
          Saltar al contenido
        </a>
        <div aria-hidden className="bg-brand-gradient h-1" />
        <Header />
        <PromoBar />
        <main id="contenido">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
