import SectionHeader from "@/components/SectionHeader";

// Process — black band, 4 numbered steps.
const steps = [
  { no: "01", title: "Assess", desc: "Understand the property, requirements and existing infrastructure." },
  { no: "02", title: "Design", desc: "Develop the appropriate technology solution." },
  { no: "03", title: "Install", desc: "Professionally install and configure the system." },
  { no: "04", title: "Support", desc: "Provide assistance and maintenance after deployment." },
];

export default function ProcessTimeline() {
  return (
    <section className="bg-black text-white py-16 md:py-24">
      <div className="max-w-site mx-auto container-px">
        <SectionHeader
          eyebrow="Process"
          title="Assess, design, install, support."
          intro="A methodical approach that turns equipment into working infrastructure."
        />

        <div className="mt-10 md:mt-14 grid md:grid-cols-4 gap-6 md:gap-0">
          {steps.map((s) => (
            <div key={s.no} className="border-t border-white/15 pt-6 md:pt-8 md:pr-6">
              <span className="label-mono" style={{ color: "#2F80ED" }}>
                {s.no}
              </span>
              <h3 className="mt-4 font-display font-semibold tracking-tight" style={{ fontSize: "1.25rem" }}>
                {s.title}
              </h3>
              <p className="mt-2 leading-relaxed" style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}