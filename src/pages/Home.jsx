import SEO from "@/components/SEO";
import { site } from "@/config/site";
import Hero from "@/components/sections/Hero";
import CapabilityStrip from "@/components/sections/CapabilityStrip";
import Principles from "@/components/sections/Principles";
import ServicesGrid from "@/components/sections/ServicesGrid";
import SolutionsSection from "@/components/sections/SolutionsSection";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import ProjectsShowcase from "@/components/sections/ProjectsShowcase";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <SEO
        title="Technology Infrastructure & Installation — CCTV, Wi-Fi, Starlink, Networking"
        description="NEXT IT Technologies designs and installs reliable technology infrastructure across Harare and Zimbabwe — CCTV, Wi-Fi, Starlink, networking and IT systems."
        path="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          url: site.url,
          areaServed: "Harare, Zimbabwe",
          description:
            "Technology infrastructure and installation — CCTV, Wi-Fi, Starlink, networking and IT systems.",
        }}
      />

      <Hero />
      <CapabilityStrip />
      <Principles />
      <ServicesGrid />
      <SolutionsSection />
      <ProcessTimeline />
      <ProjectsShowcase />
      <CTABand />
    </>
  );
}