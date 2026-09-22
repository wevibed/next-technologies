import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "@/components/Logo";
import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { site, whatsappLink, telLink } from "@/config/site";

const nav = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Solutions", to: "/solutions" },
  { label: "Projects", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Header({ open, setOpen }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const drawerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]); // eslint-disable-line

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Esc closes + focus trap
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") { setOpen(false); return; }
      if (e.key === "Tab" && open && drawerRef.current) {
        const f = drawerRef.current.querySelectorAll('a[href], button:not([disabled])');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, setOpen]);

  useEffect(() => {
    if (open) {
      const first = drawerRef.current?.querySelector("a[href], button:not([disabled])");
      first?.focus();
    } else {
      toggleRef.current?.focus();
    }
  }, [open]);

  const solid = scrolled && !open;
  const onDark = open || !scrolled; // white text over hero or open drawer

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-[#2F80ED] focus:text-white focus:px-4 focus:py-2"
      >
        Skip to content
      </a>

      <header
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
          solid ? "bg-white border-b border-[#E3E6EB]" : "bg-transparent"
        }`}
      >
        <div className="max-w-site mx-auto container-px">
          <div className="flex items-center justify-between h-16 overflow-hidden">
            <Link to="/" aria-label={`${site.name} — home`} className="shrink-0">
              <Logo variant={onDark ? "dark" : "light"} />
            </Link>

            <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `text-sm tracking-wide transition-colors ${
                      isActive
                        ? (solid ? "text-[#0B0D10]" : "text-white")
                        : (solid ? "text-[#4A525C] hover:text-[#0B0D10]" : "text-white/70 hover:text-white")
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <Button variant="primary" to="/contact" className="px-4 py-2.5">
                Request a Quote
              </Button>
            </div>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="lg:hidden relative w-7 h-7 flex flex-col items-center justify-center"
              style={{ color: onDark ? "#fff" : "#0B0D10" }}
            >
              <span
                className="absolute w-7 transition-all duration-300"
                style={{ height: "1.5px", backgroundColor: "currentColor", transform: open ? "rotate(45deg)" : "translateY(-5px)" }}
              />
              <span
                className="absolute w-7 transition-all duration-300"
                style={{ height: "1.5px", backgroundColor: "currentColor", transform: open ? "rotate(-45deg)" : "translateY(5px)" }}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — full-screen black, slides down from top */}
      <div
        id="mobile-nav"
        ref={drawerRef}
        className={`lg:hidden fixed inset-0 z-40 bg-black flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)" }}
        aria-hidden={!open}
      >
        <div
          className="flex flex-col h-full pt-20 px-5 overflow-y-auto"
          style={{ paddingBottom: "max(1.5rem, env(safe-area-inset-bottom))" }}
        >
          <nav aria-label="Mobile" className="flex-1">
            <ul>
              {nav.map((item, i) => (
                <li
                  key={item.to}
                  style={{
                    opacity: open ? 1 : 0,
                    transform: open ? "translateY(0)" : "translateY(10px)",
                    transition: "opacity 0.4s ease, transform 0.4s ease",
                    transitionDelay: open ? `${120 + i * 40}ms` : "0ms",
                  }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center justify-between py-5 border-b border-[#222]`
                    }
                  >
                    {({ isActive }) => (
                      <span className="flex items-baseline gap-4">
                        <span className="label-mono" style={{ color: "rgba(255,255,255,0.4)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className="font-display font-semibold tracking-tight"
                          style={{ fontSize: "2rem", lineHeight: 1.1, color: isActive ? "#fff" : "rgba(255,255,255,0.7)" }}
                        >
                          {item.label}
                        </span>
                        {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#2F80ED] self-center" />}
                      </span>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-8">
            <Button variant="primary" to="/contact" className="w-full py-3.5">
              Request a quote
            </Button>
            <div className="mt-6 flex items-center justify-between">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#56A3FF] transition-colors"
              >
                <Icon name="whatsapp" size={18} className="text-[#25D366]" /> WhatsApp us
              </a>
              <a href={telLink()} className="text-sm font-medium text-white/70 hover:text-white transition-colors">
                {site.contact.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}