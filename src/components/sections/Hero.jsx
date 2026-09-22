import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/config/site";

// Full-bleed black hero. One big headline, one blue CTA, one WhatsApp text link.
// Nothing else above the fold. Real photo/video drops in via the slot below.
export default function Hero() {
  return (
    <section className="relative bg-black text-white min-h-[88vh] flex flex-col justify-end overflow-hidden">
      <div className="max-w-site mx-auto container-px w-full pb-14 md:pb-24">
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