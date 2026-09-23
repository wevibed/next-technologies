import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import CTABand from "@/components/sections/CTABand";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import { getService, services } from "@/data/services";
import { realImages } from "@/data/realImages";
import { whatsappLink } from "@/config/site";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <Navigate to="/services" replace />;

  const waMsg = `Hi NEXT IT Technologies, I'd like a quote for ${service.name}.`;

  return (
    <>
      <SEO
        title={`${service.name} — Harare & Zimbabwe`}
        description={`${service.short} ${service.keywords}.`}
        path={`/services/${service.slug}`}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.name,
          description: service.short,
          provider: { "@type": "Organization", name: "NEXT IT Technologies", areaServed: "Harare, Zimbabwe" },
        }}
      />
      <PageHero eyebrow={`Service ${service.number}`} title={service.name} intro={service.short}>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Button variant="primary" to="/contact" className="px-7 py-3.5">
            Request a Quote <Icon name="arrow" size={18} />
          </Button>
          <Button variant="whatsapp" href={whatsappLink(waMsg)} className="px-7 py-3.5">
            <Icon name="whatsapp" size={18} /> Enquire on WhatsApp
          </Button>
        </div>
      </PageHero>

      {/* Visual + description */}
      <section className="bg-obsidian py-16 md:py-24">
        <div className="max-w-site mx-auto container-px grid gap-10 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <ImageSlot
              src={realImages[service.image]}
              real={Boolean(realImages[service.image])}
              alt={service.imageAlt}
              ratio="4/3"
              eager
              caption={service.photoBrief}
            />
          </div>
          <div className="lg:col-span-6">
            <span className="label" style={{ color: "var(--electric-blue)" }}>Overview</span>
            <h2 className="mt-4 font-display text-2xl md:text-3xl font-bold tracking-tight text-brand-white">
              {service.name}
            </h2>
            <p className="mt-5 text-base text-muted-gray leading-relaxed">{service.solution}</p>
            <div className="mt-7 hairline p-5 bg-graphite">
              <span className="label">The Problem</span>
              <p className="mt-2 text-sm text-muted-gray leading-relaxed">{service.problem}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="bg-graphite py-16 md:py-24 border-y border-[color:var(--border-hair)]">
        <div className="max-w-site mx-auto container-px">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <span className="label" style={{ color: "var(--electric-blue)" }}>Typical Applications</span>
              <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-brand-white">
                Where it applies
              </h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="grid sm:grid-cols-2 gap-px bg-[color:var(--border-hair)] border border-[color:var(--border-hair)]">
                {service.applications.map((a) => (
                  <Reveal key={a} as="li" className="bg-dark-slate p-5 flex items-start gap-3">
                    <Icon name="check" size={18} className="text-electric-blue shrink-0 mt-0.5" />
                    <span className="text-sm text-brand-white leading-relaxed">{a}</span>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-obsidian py-16 md:py-24">
        <div className="max-w-site mx-auto container-px">
          <div className="flex items-center gap-3 mb-10">
            <span className="h-px w-8 bg-electric-blue" />
            <span className="label" style={{ color: "var(--electric-blue)" }}>How we approach {service.name}</span>
          </div>
          <ol className="grid gap-px bg-[color:var(--border-hair)] border border-[color:var(--border-hair)] sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((p, i) => (
              <Reveal key={p} delay={i * 70} as="li" className="bg-graphite p-6">
                <span className="label-mono" style={{ color: "var(--electric-blue)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm text-brand-white leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-graphite py-16 border-t border-[color:var(--border-hair)]">
        <div className="max-w-site mx-auto container-px">
          <h2 className="font-display text-lg font-semibold tracking-tight text-brand-white mb-6">
            Other services
          </h2>
          <div className="flex flex-wrap gap-3">
            {services.filter((s) => s.slug !== service.slug).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="hairline px-4 py-2.5 text-sm text-muted-gray hover:text-brand-white hover:border-[color:var(--border-strong)] transition-colors flex items-center gap-2"
              >
                <Icon name={s.icon} size={16} className="text-electric-blue" />
                {s.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  );
}