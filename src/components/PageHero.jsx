import Reveal from "@/components/Reveal";

// Inner-page hero: eyebrow, title, intro on a dark surface with grid texture.
export default function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="relative bg-obsidian overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.05]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-electric-blue/40 to-transparent" />
      <div className="relative max-w-site mx-auto container-px pt-16 md:pt-24 pb-14 md:pb-20">
        <Reveal className="max-w-3xl">
          {eyebrow && (
            <span className="label" style={{ color: "var(--electric-blue)" }}>{eyebrow}</span>
          )}
          <h1
            className="mt-5 font-display font-bold tracking-tight text-brand-white text-balance"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.02 }}
          >
            {title}
          </h1>
          {intro && (
            <p className="mt-5 text-lg text-muted-gray leading-relaxed max-w-2xl">{intro}</p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}