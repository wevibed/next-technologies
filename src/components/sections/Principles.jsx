import { useState } from "react";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import ImageSlot from "@/components/ImageSlot";

// Principles block — 4 short statements as an accordion (mobile) / tabs (desktop),
// with one large image beside the text on desktop. Two short lines per principle.
const principles = [
  {
    title: "Professional installation",
    lines: "Installed with attention to reliability, positioning and performance.",
    caption: "Installer mounting and aligning equipment on site",
  },
  {
    title: "Engineered solutions",
    lines: "Designed around your environment, not a one-size-fits-all approach.",
    caption: "Network design plan and equipment layout on a desk",
  },
  {
    title: "Reliable technology",
    lines: "Appropriate hardware and infrastructure for each installation's needs.",
    caption: "Network rack with structured cabling, wide angle",
  },
  {
    title: "Ongoing support",
    lines: "Maintenance and support that keeps systems working after installation.",
    caption: "Technician maintaining network equipment on site",
  },
];

export default function Principles() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#F5F6F8] py-16 md:py-24">
      <div className="max-w-site mx-auto container-px">
        <SectionHeader
          light
          eyebrow="Principles"
          title="How we work."
          intro="The difference between technology that works and technology that becomes a problem is how it's implemented."
        />

        <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-8 md:gap-16 items-start">
          <div className="border-t border-[#E3E6EB]">
            {principles.map((p, i) => {
              const open = active === i;
              return (
                <div key={p.title} className="border-b border-[#E3E6EB]">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex items-center justify-between w-full py-5 text-left"
                    aria-expanded={open}
                  >
                    <span
                      className="font-display font-semibold tracking-tight transition-colors"
                      style={{
                        fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
                        color: open ? "#0B0D10" : "#4A525C",
                      }}
                    >
                      {p.title}
                    </span>
                    <Icon
                      name={open ? "minus" : "plus"}
                      size={20}
                      className="shrink-0 ml-4"
                      style={{ color: "#2F80ED" }}
                    />
                  </button>
                  {open && (
                    <p className="pb-5 leading-relaxed" style={{ color: "#4A525C" }}>
                      {p.lines}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="hidden md:block">
            <ImageSlot
              key={active}
              tone="light"
              alt={principles[active].title}
              ratio="4/3"
              caption={principles[active].caption}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}