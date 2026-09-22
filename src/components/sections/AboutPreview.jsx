import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";

export default function AboutPreview() {
  return (
    <section className="light-section bg-light-bg py-20 md:py-28">
      <div className="max-w-site mx-auto container-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <ImageSlot
              alt="Technician installing network equipment"
              ratio="4/3"
              caption="Technician installing systems on site"
            />
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2">
            <SectionHeader
              eyebrow="About"
              title="Engineering Technology That Works In The Real World."
              intro="NEXT IT Technologies focuses on practical technology infrastructure — professional installation and reliable systems, designed around the environment they operate in."
              light
            />
            <ul className="mt-8 space-y-3">
              {[
                "Assessment before equipment",
                "Solutions designed, not just supplied",
                "Clean, documented implementation",
                "Support that continues after install",
              ].map((t) => (
                <Reveal key={t} as="li" className="flex items-start gap-3">
                  <Icon name="check" size={18} className="text-electric-blue shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{t}</span>
                </Reveal>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-electric-blue hover:text-blue-highlight transition-colors"
            >
              More about the company
              <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}