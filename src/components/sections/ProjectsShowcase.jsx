import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import { projects } from "@/data/projects";

// Projects — full-bleed feature band. Uses a real photo when available; otherwise
// a #D9DDE3 frame with a caption. No stock images.
export default function ProjectsShowcase() {
  const feature = projects[0];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-site mx-auto container-px">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader
            light
            eyebrow="Projects"
            title="Selected work."
          />
          <Link
            to="/projects"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium shrink-0 pb-2"
            style={{ color: "#2F80ED" }}
          >
            View all projects <Icon name="arrow" size={16} />
          </Link>
        </div>
      </div>

      <div
        className="relative w-full bg-[#D9DDE3] mt-8 md:mt-10"
        style={{ minHeight: "56vh" }}
        role="img"
        aria-label="Placeholder project photo"
      >
        <div className="absolute top-4 left-0 right-0">
          <div className="max-w-site mx-auto container-px">
            <span className="label-mono" style={{ color: "#4A525C" }}>
              PLACEHOLDER — real project photo needed
            </span>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0">
          <div className="max-w-site mx-auto container-px pb-8 md:pb-12">
            <h3
              className="font-display font-semibold tracking-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", color: "#0B0D10", lineHeight: 1.05 }}
            >
              {feature.title}
            </h3>
            <p className="mt-2" style={{ color: "#4A525C" }}>
              {feature.type} · {feature.location}
            </p>
            <Link
              to="/projects"
              className="md:hidden mt-4 inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: "#2F80ED" }}
            >
              View all projects <Icon name="arrow" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}