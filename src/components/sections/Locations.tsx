import { Section, SectionHeading } from "@/components/ui/Section";
import { Icon } from "@/components/ui/Icon";
import {
  branches,
  branchWhatsappUrl,
  mapEmbedUrl,
  type Branch,
} from "@/content/site";

export function Locations() {
  return (
    <Section id="sucursales" className="border-y border-ink-200 bg-white">
      <SectionHeading
        eyebrow={branches.eyebrow}
        title={branches.title}
        subtitle={branches.subtitle}
      />

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {branches.items.map((branch) => (
          <BranchCard key={branch.id} branch={branch} />
        ))}
      </div>
    </Section>
  );
}

function BranchCard({ branch }: { branch: Branch }) {
  return (
    <article className="flex flex-col border border-ink-200">
      <div className="border-b border-ink-200 bg-ink-50">
        <iframe
          src={mapEmbedUrl(branch.mapQuery)}
          title={`Mapa de ${branch.name}`}
          width="100%"
          height="160"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="block h-40 w-full"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{branch.label}</p>
        <h3 className="mt-3 text-lg leading-snug">{branch.name}</h3>

        <dl className="mt-5 space-y-3.5 border-t border-ink-200 pt-5 text-[0.8125rem]">
          <div className="flex gap-3">
            <dt className="shrink-0">
              <span className="sr-only">Dirección</span>
              <Icon name="map-pin" className="mt-px h-4 w-4 text-brand-600" />
            </dt>
            <dd className="text-ink-700">
              <span className="font-medium text-ink-900">{branch.street}</span>
              <br />
              {branch.area}
            </dd>
          </div>

          {branch.phone ? (
            <div className="flex gap-3">
              <dt className="shrink-0">
                <span className="sr-only">Teléfono</span>
                <Icon name="phone" className="mt-px h-4 w-4 text-brand-600" />
              </dt>
              <dd>
                <a
                  href={branchWhatsappUrl(branch.phone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink-700 transition-colors hover:text-brand-700"
                >
                  {branch.phone}
                </a>
              </dd>
            </div>
          ) : null}
        </dl>
      </div>
    </article>
  );
}
