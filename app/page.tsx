import HeroSection from "@/components/home/HeroSection";

import WorkSection from "@/components/home/WorkSection";

export default function Home() {
  return (
    <div className="relative w-full">
      <div
        className="
      flex flex-col"
      >
        <HeroSection />
      </div>

      <WorkSection />

      {/* <CTASection/> */}
    </div>
  );
}
