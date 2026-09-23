import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/config/site";

// Full-bleed hero with a real installation photo behind it. One big
// headline, one blue CTA, one WhatsApp text link. Nothing else above the fold.
export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[88vh] flex flex-col justify-end overflow-hidden">
      <img
        src="/images/starlink-hero.png"
        alt="NEXT IT Technologies engineer installing a Starlink dish on a rooftop in Harare"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        decoding="async"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.55) 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />
      <div className="relative max-w-site mx-auto container-px w-full pb-14 md:pb-24">
        <h1
          className="font-display font-semibold tracking-tight text-balance"
          style={{ fontSize: "clamp(2.5rem, 10vw, 5rem)", lineHeight: 1.02, maxWidth: "16ch" }}
        >
          Secure, connected, engineered for tomorrow.
        </h1>

        <div className="mt-8 flex items-center gap-6">
          <Button variant="primary" to="/contact" className="px-6 py-3">
            Request a quote
            <Icon name="arrow" size={18} />
          </Button>
          <a
            href={whatsappLink()}
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#56A3FF] transition-colors"
          >
            <Icon name="whatsapp" size={18} className="text-[#2F80ED]" />
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}