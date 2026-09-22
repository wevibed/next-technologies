import Icon from "@/components/Icon";
import Button from "@/components/ui/Button";
import { whatsappLink } from "@/config/site";

// Final CTA — black, big headline, two buttons.
export default function CTABand() {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="max-w-site mx-auto container-px text-center">
        <h2
          className="font-display font-semibold tracking-tight text-balance mx-auto"
          style={{ fontSize: "clamp(2rem, 6vw, 3.5rem)", lineHeight: 1.05, maxWidth: "18ch" }}
        >
          Let's build your technology infrastructure.
        </h2>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button variant="primary" to="/contact" className="px-6 py-3">
            Request a quote
            <Icon name="arrow" size={18} />
          </Button>
          <Button
            variant="secondary"
            href={whatsappLink()}
            className="px-6 py-3 border-white/40 text-white hover:bg-white/10"
          >
            <Icon name="whatsapp" size={16} /> WhatsApp us
          </Button>
        </div>
      </div>
    </section>
  );
}