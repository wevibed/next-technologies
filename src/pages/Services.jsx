import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTABand from "@/components/sections/CTABand";
import { services } from "@/data/services";

export default function Services() {
  return (
    <>
      <SEO
        title="Technology Infrastructure Services"
        description="CCTV installation, Wi-Fi, Starlink, networking, IT infrastructure and support services across Harare and Zimbabwe — designed and installed properly."
        path="/services"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Services", item: "/services" },
          ],
        }}
      />
      <PageHero
        eyebrow="Services"
        title="Technology Infrastructure Services"
        intro="From security and connectivity to full IT systems — each service is designed, installed and supported as working infrastructure."
      />

      <section className="bg-obsidian py-16 md:py-24">
        <div className="max-w-site mx-auto container-px">
          <div className="border-t border-[color:var(--border-hair)]">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group block border-b border-[color:var(--border-hair)] py-6 md:py-8 hover:bg-graphite transition-colors"
              >
                <div className="flex items-start gap-4 md:gap-8">
                  <span className="label-mono pt-2 shrink-0">{s.number}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3">
                      <h2
                        className="font-display font-bold tracking-tight text-brand-white"
                        style={{ fontSize: "clamp(2rem, 9vw, 3.5rem)", lineHeight: 1.02 }}
                      >
                        {s.name}
                      </h2>
                      <Icon
                        name="arrow"
                        size={28}
                        className="ml-auto text-electric-blue transition-transform group-hover:translate-x-1 shrink-0"
                      />
                    </div>
                    <p className="mt-2 md:mt-3" style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}>
                      {s.short}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}