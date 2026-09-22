// Single stroke-icon set, 1.5px stroke, square caps — consistent engineering style.
// Inline SVG so no icon library mismatch. Icons used across services & UI.

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square",
  strokeLinejoin: "miter",
};

const paths = {
  cctv: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="0" />
      <path d="M21 8l-3 0" />
      <circle cx="9" cy="10" r="2.5" />
      <path d="M3 16v4M15 16v4" />
    </>
  ),
  wifi: (
    <>
      <path d="M2 8.5C6.5 4.5 17.5 4.5 22 8.5" />
      <path d="M5 12C8 9.5 16 9.5 19 12" />
      <path d="M8 15.5C9.7 14 14.3 14 16 15.5" />
      <circle cx="12" cy="19" r="1" />
    </>
  ),
  starlink: (
    <>
      <ellipse cx="12" cy="12" rx="9" ry="4" />
      <path d="M3 12h18" />
      <path d="M12 8v8" />
    </>
  ),
  network: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4" />
    </>
  ),
  server: (
    <>
      <rect x="4" y="3" width="16" height="6" />
      <rect x="4" y="11" width="16" height="6" />
      <path d="M7 6h.01M7 14h.01" />
      <path d="M4 19h16" />
    </>
  ),
  support: (
    <>
      <path d="M5 12a7 7 0 0114 0" />
      <rect x="3.5" y="12" width="3.5" height="6" />
      <rect x="17" y="12" width="3.5" height="6" />
      <path d="M21 18v1a3 3 0 01-3 3h-3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  phone: (
    <path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L19 13l5 2v3a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z" />
  ),
  whatsapp: (
    <>
      <path d="M12 3a9 9 0 00-7.7 13.6L3 21l4.5-1.2A9 9 0 1012 3z" />
      <path d="M8.5 8.5c0 4 3 7 7 7 .5 0 .8-.3.8-.8v-1.2l-2-1-1 .8c-1.5-.8-2.5-1.8-3.3-3.3l.8-1-1-2H8.5c-.5 0-.5.3-.5.5z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" />
      <path d="M3 6l9 7 9-7" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowUpRight: <path d="M7 17L17 7M9 7h8v8" />,
  check: <path d="M5 12l5 5 9-11" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
};

export default function Icon({ name, size = 24, className = "" }) {
  const p = paths[name];
  if (!p) return null;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...stroke}
    >
      {p}
    </svg>
  );
}