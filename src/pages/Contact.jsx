import SEO from "@/components/SEO";
import PageHero from "@/components/PageHero";
import Icon from "@/components/Icon";
import QuoteForm from "@/components/QuoteForm";
import Reveal from "@/components/Reveal";
import { site, telLink, whatsappLink, emailLink } from "@/config/site";

export default function Contact() {
  const c = site.contact;
  const contactCards = [
    c.phoneReady && {
      label: "Call Us",
      value: c.phoneDisplay,
      href: telLink(),
      icon: "phone",
      note: "Mon–Fri, business hours",
    },
    c.whatsappReady && {
      label: "WhatsApp",
      value: "Chat with us directly",
      href: whatsappLink(),
      icon: "whatsapp",
      note: "Fastest response",
      external: true,
    },
    c.emailReady && {
      label: "Email",
      value: c.email,
      href: emailLink("Service enquiry"),
      icon: "mail",
      note: "For detailed enquiries",
    },
    c.addressReady && {
      label: "Location",
      value: c.addressLines.join(", "),
      icon: "pin",
      note: "Service area: Harare & across Zimbabwe",
    },
  ].filter(Boolean);

  return (
    <>
      <SEO
        title="Contact — Request a Quote"
        description="Request a quote for CCTV, Wi-Fi, Starlink, networking or IT infrastructure. Get in touch with NEXT IT Technologies in Harare, Zimbabwe."
        path="/contact"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          url: site.url,
          areaServed: "Harare, Zimbabwe",
          telephone: c.phoneReady ? c.phoneTel : undefined,
          email: c.emailReady ? c.email : undefined,
        }}
      />
      <PageHero
        eyebrow="Contact"
        title="Request a Quote"
        intro="Tell us what you need and we'll help you determine the right solution."
      />

      <section className="bg-obsidian py-16 md:py-24">
        <div className="max-w-site mx-auto container-px grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            {contactCards.length > 0 ? (
              <div className="space-y-px bg-[color:var(--border-hair)] border border-[color:var(--border-hair)]">
                {contactCards.map((card) => {
                  const content = (
                    <>
                      <span className="inline-flex items-center justify-center h-10 w-10 hairline text-electric-blue shrink-0">
                        <Icon name={card.icon} size={18} />
                      </span>
                      <span className="min-w-0">
                        <span className="label block">{card.label}</span>
                        <span className="block mt-1 text-sm text-brand-white break-words">{card.value}</span>
                        {card.note && <span className="block mt-1 text-xs" style={{ color: "var(--text-muted)" }}>{card.note}</span>}
                      </span>
                    </>
                  );
                  const cls = "flex items-start gap-4 p-5 bg-graphite hover:bg-dark-slate transition-colors";
                  return card.href ? (
                    <a
                      key={card.label}
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel={card.external ? "noopener noreferrer" : undefined}
                      className={cls}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={card.label} className={cls}>{content}</div>
                  );
                })}
              </div>
            ) : (
              <Reveal as="div" className="hairline bg-graphite p-6">
                <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  Contact details will appear here once they're provided. In the meantime, send your
                  enquiry using the form — we'll get back to you.
                </p>
              </Reveal>
            )}
          </div>

          <div className="lg:col-span-7">
            <div className="hairline bg-graphite p-6 md:p-8 pb-28 md:pb-28">
              <h2 className="font-display text-xl font-semibold tracking-tight text-brand-white">
                Enquiry form
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
                Fields marked * are required. We'll use your details only to respond to this enquiry.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}