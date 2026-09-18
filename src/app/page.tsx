import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Specialties } from "@/components/sections/Specialties";
import { Audiences } from "@/components/sections/Audiences";
import { Locations } from "@/components/sections/Locations";
import { Contact } from "@/components/sections/Contact";

/**
 * Sitio institucional informativo. El orden de las secciones se controla
 * aqui; el contenido de cada una vive en src/content/site.ts
 * Fondos alternados: blanco / claro / blanco / claro...
 */
export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Specialties />
      <Audiences />
      <Locations />
      <Contact />
    </>
  );
}
