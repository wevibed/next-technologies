import { useState } from "react";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/sections/CTABand";
import { projects, projectCategories } from "@/data/projects";
import { realImages } from "@/data/realImages";

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <SEO
        title="Projects — CCTV, Wi-Fi, Starlink & Network Installations"
        description="A portfolio of technology infrastructure installations — CCTV, Wi-Fi, Starlink, networking and IT systems across Harare and Zimbabwe."
        path="/projects"
      />
      <PageHero
        eyebrow="Projects"
        title="Selected Installations"
        intro="A portfolio of work across security, connectivity and infrastructure. Placeholder content shown until real projects are supplied."
      />

      <section className="bg-obsidian py-12 md:py-16">
        <div className="max-w-site mx-auto container-px">
          {/* Filter bar */}
          <div role="tablist" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
            {projectCategories.map((cat) => {
              const isActive = active === cat;
              return (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2.5 text-sm tracking-wide transition-colors hairline ${
                    isActive
                      ? "bg-electric-blue text-white border-electric-blue"
                      : "text-muted-gray hover:text-brand-white hover:border-[color:var(--border-strong)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 70} as="article" className="group">
                <ImageSlot
                  src={realImages[p.image]}
                  real={Boolean(realImages[p.image])}
                  alt={p.title}
                  ratio="4/3"
                  caption="Real installation photo"
                />
                <div className="mt-4">
                  <span className="label">{p.type}</span>
                  <h2 className="mt-2 font-display text-lg font-semibold tracking-tight text-brand-white">
                    {p.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-gray flex items-center gap-1.5">
                    <Icon name="pin" size={14} className="text-electric-blue" />
                    {p.location}
                  </p>
                  <p className="mt-3 text-sm text-muted-gray leading-relaxed">{p.summary}</p>
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.services.map((s) => (
                      <span key={s} className="hairline px-2.5 py-1 text-xs text-muted-gray">{s}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-10 text-sm text-muted-gray">No projects in this category yet.</p>
          )}
        </div>
      </section>

      <CTABand />
    </>
  );
}