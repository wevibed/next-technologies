// Reusable image slot. Until real photography is supplied, every slot renders a
// flat frame with a short caption describing the exact shot needed.
// `tone="light"` → #D9DDE3 frame for white sections; `tone="dark"` → graphite.
export default function ImageSlot({
  src,
  alt = "",
  ratio = "4/3",
  className = "",
  eager = false,
  caption = "Shot description needed",
  real = false,
  tone = "dark",
}) {
  const aspect = { aspectRatio: ratio.replace("/", " / ") };
  const light = tone === "light";
  const bg = light ? "#D9DDE3" : "#12161C";
  const border = light ? "#E3E6EB" : "var(--border-hair)";
  const labelColor = "#2F80ED";
  const captionColor = light ? "#4A525C" : "#C3CAD4";

  if (src && real) {
    return (
      <figure className={`relative overflow-hidden ${className}`} style={{ ...aspect, backgroundColor: bg, border: `1px solid ${border}` }}>
        <img
          src={src}
          alt={alt}
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </figure>
    );
  }

  return (
    <figure
      className={`relative flex flex-col items-center justify-center text-center px-5 ${light ? "" : "corner-ticks"} ${className}`}
      style={{ ...aspect, backgroundColor: bg, border: `1px solid ${border}` }}
      role="img"
      aria-label={alt || "Placeholder image"}
    >
      <span className="label-mono" style={{ color: labelColor, fontSize: "0.6rem" }}>
        PLACEHOLDER — real project photo needed
      </span>
      <p className="mt-3 leading-relaxed" style={{ fontSize: "0.9rem", color: captionColor, maxWidth: "34ch" }}>
        {caption}
      </p>
    </figure>
  );
}