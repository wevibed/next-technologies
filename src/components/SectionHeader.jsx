import Reveal from "./Reveal";

// Section header. `light` switches to the white-section palette (dark text).
// Titles: semibold, tight leading, sentence case.
export default function SectionHeader({ eyebrow, title, intro, align = "left", light = false }) {
  const titleColor = light ? "#0B0D10" : "#F5F7FA";
  const introColor = light ? "#4A525C" : "#C3CAD4";
  const eyebrowColor = light ? "#4A525C" : "#2F80ED";
  return (
    <Reveal className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span className="label" style={{ color: eyebrowColor }}>
          {eyebrow}
        </span>
      )}
      <h2
        className="mt-4 font-display font-semibold tracking-tight text-balance"
        style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", lineHeight: 1.08, color: titleColor }}
      >
        {title}
      </h2>
      {intro && (
        <p
          className="mt-5 leading-relaxed"
          style={{ fontSize: "1rem", color: introColor, maxWidth: align === "center" ? "60ch" : "62ch" }}
        >
          {intro}
        </p>
      )}
    </Reveal>
  );
}