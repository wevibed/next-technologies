import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import CTABand from "@/components/sections/CTABand";

const solutions = [
  { name: "Home", desc: "Connected homes with reliable Wi-Fi, security and internet infrastructure." },
  { name: "Business", desc: "Technology infrastructure designed for reliable business operations." },
  { name: "Security", desc: "CCTV and surveillance infrastructure designed around your property." },
  { name: "Connectivity", desc: "Wi-Fi, networking and Starlink solutions for dependable connectivity." },
];

export default function Solutions() {
  return (
    <>
      <SEO
        title="Solutions by Environment — Home, Business, Security, Connectivity"
        description="Technology solutions designed around your environment — connected homes, business infrastructure, security systems and dependable connectivity."
        path="/solutions"
      />
      <PageHero
        eyebrow="Solutions"
        title="Solutions by Environment"
        intro="We design infrastructure around the environment it operates in — not a one-size-fits-all catalogue."
      />
      <section className="bg-obsidian py-16 md:py-24">
        <div className="max-w-site mx-auto container-px">
          <div className="border-t border-[color:var(--border-hair)]">
            {solutions.map((s, i) => (
              <Link
                key={s.name}
                to="/contact"
                className="group block border-b border-[color:var(--border-hair)] py-5 md:py-6 hover:bg-graphite transition-colors"
              >
                <div className="flex items-center gap-4 md:gap-8">
                  <span className="label-mono shrink-0">{String(i + 1).padStart(2, "0")}</span>
                  <h2 className="font-display text-lg md:text-xl font-semibold tracking-tight text-brand-white">
                    {s.name}
                  </h2>
                  <p
                    className="hidden md:block md:ml-auto md:max-w-md md:text-right"
                    style={{ fontSize: "0.95rem", color: "var(--text-muted)" }}
                  >
                    {s.desc}
                  </p>
                  <Icon
                    name="arrow"
                    size={20}
                    className="ml-auto text-electric-blue transition-transform group-hover:translate-x-1 shrink-0"
                  />
                </div>
                <p
                  className="md:hidden mt-2 pl-9"
                  style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}
                >
                  {s.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABand />
    </>
  );
}