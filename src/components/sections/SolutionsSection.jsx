import { Link } from "react-router-dom";
import SectionHeader from "@/components/SectionHeader";

// Solutions — 4 image tiles on white, with a headline overlay.
const solutions = [
  "Home",
  "Business",
  "Security",
  "Connectivity",
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#F5F6F8] py-16 md:py-24">
      <div className="max-w-site mx-auto container-px">
        <SectionHeader
          light
          eyebrow="Solutions"
          title="Solutions by environment."
          intro="We design infrastructure around the environment it operates in — not a one-size-fits-all catalogue."
        />

        <div className="mt-10 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {solutions.map((name, i) => (
            <Link
              key={name}
              to="/solutions"
              className="group relative block overflow-hidden rounded-lg border border-[#E3E6EB] transition-colors hover:border-[#0B0D10]"
              style={{ aspectRatio: "3 / 4" }}
            >
              <div className="absolute inset-0 bg-[#D9DDE3]" />
              <span
                className="label-mono absolute top-3 left-3"
                style={{ color: "#4A525C" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4">
                <h3
                  className="font-display font-semibold tracking-tight"
                  style={{ fontSize: "1.25rem", color: "#0B0D10" }}
                >
                  {name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}