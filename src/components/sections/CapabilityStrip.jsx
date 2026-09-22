// Capability line — one clean row of text labels on white.
// Mobile: horizontally scrollable with snap + a right-edge fade so clipping
// looks intentional. Desktop: evenly spaced, no scroll.
const items = [
  "CCTV Security",
  "Network Infrastructure",
  "Wi-Fi Systems",
  "Starlink Installation",
  "IT Support",
];

export default function CapabilityStrip() {
  return (
    <section className="bg-white border-b border-[#E3E6EB]">
      <div className="max-w-site mx-auto container-px">
        <div className="relative">
          <div className="flex gap-8 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 md:py-5 md:justify-between md:overflow-visible">
            {items.map((label) => (
              <span
                key={label}
                className="label whitespace-nowrap snap-start"
                style={{ color: "#4A525C" }}
              >
                {label}
              </span>
            ))}
          </div>
          <div className="md:hidden absolute top-0 right-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}