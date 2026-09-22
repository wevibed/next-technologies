import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import { services } from "@/data/services";

// Services — white index list, large titles, arrows. No icon boxes.
export default function ServicesGrid() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-site mx-auto container-px">
        <SectionHeader
          light
          eyebrow="Services"
          title="Technology infrastructure services."
          intro="Each service addresses a real problem and delivers a working system — not just equipment."
        />

        <div className="mt-10 md:mt-12 border-t border-[#E3E6EB]">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/services/${s.slug}`}
              className="group flex items-start gap-4 md:gap-8 border-b border-[#E3E6EB] py-6 md:py-8 hover:bg-[#F5F6F8] transition-colors"
            >
              <span className="label-mono pt-2 shrink-0" style={{ color: "#4A525C" }}>
                {s.number}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <h3
                    className="font-display font-semibold tracking-tight"
                    style={{ fontSize: "clamp(1.75rem, 8vw, 3rem)", lineHeight: 1.02, color: "#0B0D10" }}
                  >
                    {s.name}
                  </h3>
                  <Icon
                    name="arrow"
                    size={28}
                    className="ml-auto shrink-0 transition-transform group-hover:translate-x-1"
                    style={{ color: "#2F80ED" }}
                  />
                </div>
                <p className="mt-2 md:mt-3" style={{ fontSize: "0.95rem", color: "#4A525C" }}>
                  {s.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}