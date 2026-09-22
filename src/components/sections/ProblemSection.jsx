import Icon from "@/components/Icon";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";

const problems = [
  "Wi-Fi dead zones that never get fixed",
  "Unreliable connectivity and dropped connections",
  "Poorly positioned CCTV with blind spots",
  "Complicated network setups that don't scale",
  "Weak security infrastructure",
  "Unreliable IT systems with no support",
];

export default function ProblemSection() {
  return (
    <section className="light-section bg-light-bg py-20 md:py-28">
      <div className="max-w-site mx-auto container-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The Problem"
              title="Technology Should Work. Not Become Another Problem."
              intro="Most technology issues come down to the same thing — equipment installed without a plan. We're the implementation partner that fixes that."
              light
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="grid sm:grid-cols-2 gap-px bg-[color:var(--border-hair)] border border-[color:var(--border-hair)]">
              {problems.map((p, i) => (
                <Reveal
                  key={p}
                  as="li"
                  delay={(i % 2) * 80}
                  className="bg-white p-6 flex items-start gap-3"
                >
                  <span className="mt-0.5 inline-flex items-center justify-center h-6 w-6 hairline text-current shrink-0">
                    <span className="label-mono" style={{ fontSize: "0.6rem" }}>
                      0{i + 1}
                    </span>
                  </span>
                  <span className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>{p}</span>
                </Reveal>
              ))}
            </ul>
            <div className="mt-8 flex items-start gap-3 p-6 hairline bg-white">
              <Icon name="arrowUpRight" size={20} className="text-electric-blue shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                <strong className="font-semibold">NEXT IT Technologies</strong> assesses the
                requirement, designs the appropriate solution, and implements it properly — so your
                technology works as infrastructure, not as a recurring problem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}