import type { SVGProps } from "react";
import type { IconName } from "@/content/site";

const paths: Record<IconName, React.ReactNode> = {
  pulse: <path d="M2 12h3.5l2-5.5 3 11 2.5-7 1.8 3.5H22" />,
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5 10 6.5 10 6.5-3.5 6.5-10 6.5S2 12 2 12Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.35-9.5-8.5C.5 8 2 4.5 5.5 4.5c2 0 3.5 1.2 4.5 2.8 1-1.6 2.5-2.8 4.5-2.8C18 4.5 19.5 8 17.5 11.5 15 15.65 12 20 12 20Z" />
  ),
  "monitor-heart": (
    <>
      <rect x="2" y="4" width="20" height="13" rx="2" />
      <path d="M8 21h8M12 17v4" />
      <path d="M5 11h2.5l1.5-2.5L11 13l1.5-2h6.5" />
    </>
  ),
  scalpel: (
    <>
      <path d="M13.5 3.5 20 10l-9 9H5l-.5-.5 9-15Z" />
      <path d="m4.5 18.5 5-5" />
    </>
  ),
  "hospital-bed": (
    <>
      <path d="M3 6v13M3 18h18M21 18v-6a3 3 0 0 0-3-3H9v9" />
      <circle cx="6.5" cy="10.5" r="2" />
    </>
  ),
  supplies: (
    <>
      <path d="M4 8h16v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8Z" />
      <path d="M9 8V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3" />
      <path d="M12 12v5M9.5 14.5h5" />
    </>
  ),
  stethoscope: (
    <>
      <path d="M5 3v5a4 4 0 0 0 8 0V3" />
      <path d="M3.5 3h3M11.5 3h3" />
      <path d="M9 12v3a4.5 4.5 0 0 0 9 0v-1.5" />
      <circle cx="18" cy="11" r="2.2" />
    </>
  ),
  storefront: (
    <>
      <path d="M3.5 4h17l1.2 4.2A3 3 0 0 1 18.8 12a3 3 0 0 1-2.9-2.3A3 3 0 0 1 13 12a3 3 0 0 1-2.9-2.3A3 3 0 0 1 7.2 12 3 3 0 0 1 2.3 8.2L3.5 4Z" />
      <path d="M4.5 12v7a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-7" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  "shield-check": (
    <>
      <path d="M12 3 5 6v6c0 4.2 2.9 7.6 7 9 4.1-1.4 7-4.8 7-9V6l-7-3Z" />
      <path d="m9 12 2.2 2.2L15.5 10" />
    </>
  ),
  truck: (
    <>
      <path d="M3 6h11v10H3zM14 9h3.5l3 3.2V16H14z" />
      <circle cx="7" cy="18" r="1.8" />
      <circle cx="17.5" cy="18" r="1.8" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.2l3.2 2" />
    </>
  ),
  phone: (
    <path d="M6.5 3h-1A2.5 2.5 0 0 0 3 5.7C3 14.1 9.9 21 18.3 21a2.5 2.5 0 0 0 2.7-2.5v-1a1 1 0 0 0-.7-1l-3.4-1.1a1 1 0 0 0-1.1.35l-1 1.3a13.6 13.6 0 0 1-5.8-5.8l1.3-1a1 1 0 0 0 .35-1.1L9.5 3.7a1 1 0 0 0-1-.7Z" />
  ),
  whatsapp: (
    <path d="M20.5 3.5A10.4 10.4 0 0 0 12.05 1C6.3 1 1.6 5.7 1.6 11.45c0 1.85.5 3.6 1.35 5.15L1.5 22l5.55-1.4a10.4 10.4 0 0 0 5 1.3h.05c5.75 0 10.45-4.7 10.45-10.45 0-2.8-1.1-5.4-3.05-7.35Zm-8.45 16.1h-.05a8.7 8.7 0 0 1-4.4-1.2l-.3-.2-3.3.85.9-3.2-.2-.35a8.6 8.6 0 0 1-1.35-4.65A8.65 8.65 0 0 1 12.05 2.6a8.6 8.6 0 0 1 6.1 2.55 8.6 8.6 0 0 1 2.5 6.1c0 4.8-3.9 8.7-8.6 8.7Zm4.75-6.5c-.25-.15-1.5-.75-1.75-.85s-.4-.15-.6.15-.7.85-.85 1-.3.2-.55.05a7 7 0 0 1-2.05-1.25 7.6 7.6 0 0 1-1.4-1.75c-.15-.25 0-.4.1-.5s.25-.3.35-.45.15-.25.2-.4a.45.45 0 0 0 0-.45c-.05-.15-.6-1.45-.85-2s-.45-.45-.6-.45h-.55a1 1 0 0 0-.75.35 3.2 3.2 0 0 0-1 2.4c0 1.4 1 2.75 1.2 2.95s2 3.05 4.75 4.15a5.3 5.3 0 0 0 2.7.55c.75-.05 1.5-.6 1.7-1.2s.2-1.1.15-1.2-.2-.15-.45-.3Z" />
  ),
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
  mail: (
    <>
      <rect x="2.5" y="5" width="19" height="14" rx="2" />
      <path d="m3 6.5 9 6.5 9-6.5" />
    </>
  ),
  "map-pin": (
    <>
      <path d="M12 21s7-6.3 7-11.5A7 7 0 0 0 5 9.5C5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.4" />
    </>
  ),
  "chevron-left": <path d="m14.5 5-7 7 7 7" />,
  "chevron-right": <path d="m9.5 5 7 7-7 7" />,
};

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
