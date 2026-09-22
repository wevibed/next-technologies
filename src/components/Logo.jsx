import { site } from "@/config/site";

// Logo component. Uses site.logoUrl when supplied (transparent SVG/PNG).
// Until a real file is provided, renders a clean text wordmark.
// MISSING FILE: transparent logo (SVG preferred) — set site.logoUrl.
export default function Logo({ variant = "dark", className = "" }) {
  const main = variant === "dark" ? "#F5F7FA" : "#080A0D";
  const sub = variant === "dark" ? "#C3CAD4" : "#3A4250";

  if (site.logoUrl) {
    return (
      <img
        src={site.logoUrl}
        alt={`${site.name} logo`}
        width={140}
        height={40}
        className={`h-8 w-auto ${className}`}
        style={{ minWidth: 120 }}
      />
    );
  }

  // Text wordmark — echoes the logo lockup: NEXT bold + IT TECHNOLOGIES lighter
  return (
    <span
      className={`inline-flex items-baseline gap-2 ${className}`}
      style={{ minWidth: 120 }}
      aria-label={site.name}
      role="img"
    >
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          fontSize: "1.35rem",
          lineHeight: 1,
          color: main,
        }}
      >
        NEXT
      </span>
      <span
        style={{
          fontFamily: "var(--font-body)",
          fontWeight: 500,
          letterSpacing: "0.06em",
          fontSize: "0.62rem",
          color: sub,
        }}
      >
        IT TECHNOLOGIES
      </span>
    </span>
  );
}