import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/sections/CTABand";

const principles = [
  { title: "Professional Installation", desc: "Reliability, positioning and performance are designed in from the start." },
  { title: "Engineered Solutions", desc: "Solutions designed around the environment, not a one-size-fits-all catalogue." },
  { title: "Reliable Technology", desc: "Appropriate hardware chosen for the requirements of each installation." },
  { title: "Clean Implementation", desc: "Cable management, positioning and configuration are part of the solution." },
  { title: "Ongoing Support", desc: "Infrastructure that continues working after the install team leaves." },
];

export default function About() {
  return (
    <>
      <SEO
        title="About NEXT IT Technologies"
        description="NEXT IT Technologies focuses on practical technology infrastructure — professional installation and reliable systems for homes and businesses in Harare, Zimbabwe."
        path="/about"
      />
      <PageHero
        eyebrow="About"
        title="Engineering Technology That Works In The Real World."
        intro="NEXT IT Technologies is a technology infrastructure and installation company. We assess, design, install and support the systems that keep homes and businesses secure and connected."
      />

      {/* Mission + image */}
      <section className="bg-obsidian py-16 md:py-24">
        <div className="max-w-site mx-auto container-px grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <ImageSlot
              alt="Technician installing network equipment on site"
              ratio="4/3"
              caption="Technician installing systems on site"
            />
          </div>
          <div className="lg:col-span-6">
            <span className="label" style={{ color: "var(--electric-blue)" }}>Mission</span>
            <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-white">
              Turn equipment into reliable infrastructure.
            </h2>
            <p className="mt-5 text-base text-muted-gray leading-relaxed">
              CCTV isn't just a camera — it's a security system. Starlink isn't just a dish — it's a
              connectivity solution. Wi-Fi isn't just a router — it's a network infrastructure problem.
              That distinction shapes everything we do.
            </p>
            <p className="mt-4 text-base text-muted-gray leading-relaxed">
              We help customers turn technology equipment into properly implemented infrastructure
              that works in the real world.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-graphite py-16 md:py-24 border-y border-[color:var(--border-hair)]">
        <div className="max-w-site mx-auto container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="label" style={{ color: "var(--electric-blue)" }}>Approach</span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-white">
                How we work
              </h2>
              <p className="mt-4 text-sm text-muted-gray leading-relaxed">
                We don't sell hardware and leave. We implement systems that work — and keep working.
              </p>
            </div>
            <div className="lg:col-span-8 grid gap-px bg-[color:var(--border-hair)] border border-[color:var(--border-hair)] sm:grid-cols-2">
              {[
                ["Assess first", "Understand the property, requirements and existing infrastructure before recommending anything."],
                ["Design the solution", "Develop the appropriate technology solution for the environment — not a generic package."],
                ["Install properly", "Professional installation with attention to positioning, cabling and configuration."],
                ["Support after", "Ongoing maintenance and support so the system keeps performing."],
              ].map(([t, d], i) => (
                <Reveal key={t} delay={(i % 2) * 70} as="div" className="bg-dark-slate p-6">
                  <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-display text-base font-semibold text-brand-white">{t}</h3>
                  <p className="mt-2 text-sm text-muted-gray leading-relaxed">{d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-obsidian py-16 md:py-24">
        <div className="max-w-site mx-auto container-px">
          <span className="label" style={{ color: "var(--electric-blue)" }}>Core Principles</span>
          <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-white max-w-2xl">
            What we stand for
          </h2>
          <div className="mt-12 grid gap-px bg-[color:var(--border-hair)] border border-[color:var(--border-hair)] sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={(i % 3) * 70} as="article" className="bg-graphite p-7">
                <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-display text-base font-semibold text-brand-white">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-gray leading-relaxed">{p.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}