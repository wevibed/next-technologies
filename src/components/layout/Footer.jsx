import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import { site, whatsappLink, telLink, emailLink } from "@/config/site";
import { services } from "@/data/services";

export default function Footer() {
  const year = new Date().getFullYear();
  const c = site.contact;

  const contactItems = [
    c.phoneReady && { label: "Phone", value: c.phoneDisplay, href: telLink(), icon: "phone" },
    c.whatsappReady && { label: "WhatsApp", value: "Chat with us", href: whatsappLink(), icon: "whatsapp", external: true },
    c.emailReady && { label: "Email", value: c.email, href: emailLink(), icon: "mail" },
    c.addressReady && { label: "Location", value: c.addressLines.join(", "), icon: "pin" },
  ].filter(Boolean);

  return (
    <footer className="bg-black text-muted-gray border-t border-white/10">
      <div className="max-w-site mx-auto container-px py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <Logo variant="dark" />
            <p className="label mt-4" style={{ color: "var(--electric-blue)" }}>
              {site.tagline}
            </p>
            <p className="mt-5 leading-relaxed max-w-xs" style={{ fontSize: "0.9rem" }}>
              Technology infrastructure and installation — CCTV, Wi-Fi, Starlink, networking and
              IT systems for homes and businesses.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="label mb-5">Navigation</h3>
            <ul className="space-y-3" style={{ fontSize: "0.9rem" }}>
              <li><Link to="/" className="hover:text-brand-white transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-brand-white transition-colors">Services</Link></li>
              <li><Link to="/solutions" className="hover:text-brand-white transition-colors">Solutions</Link></li>
              <li><Link to="/projects" className="hover:text-brand-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-brand-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-brand-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="label mb-5">Services</h3>
            <ul className="space-y-3" style={{ fontSize: "0.9rem" }}>
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="hover:text-brand-white transition-colors">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="label mb-5">Contact</h3>
            {contactItems.length > 0 ? (
              <ul className="space-y-3" style={{ fontSize: "0.9rem" }}>
                {contactItems.map((it) => (
                  <li key={it.label}>
                    {it.href ? (
                      <a
                        href={it.href}
                        target={it.external ? "_blank" : undefined}
                        rel={it.external ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-2.5 hover:text-brand-white transition-colors break-words"
                      >
                        <Icon name={it.icon} size={16} className="mt-0.5 shrink-0 text-electric-blue" />
                        <span>{it.value}</span>
                      </a>
                    ) : (
                      <span className="flex items-start gap-2.5">
                        <Icon name={it.icon} size={16} className="mt-0.5 shrink-0 text-electric-blue" />
                        <span>{it.value}</span>
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <Link to="/contact" className="inline-flex items-center gap-2 text-electric-blue hover:text-blue-highlight transition-colors" style={{ fontSize: "0.9rem" }}>
                Get in touch <Icon name="arrow" size={16} />
              </Link>
            )}
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[color:var(--border-hair)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>
            © {year} {site.name}. All rights reserved.
          </p>
          <span className="label">HARARE · ZIMBABWE</span>
        </div>
      </div>
    </footer>
  );
}