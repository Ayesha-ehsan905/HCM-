import {
  AIIntelligenceSection,
  ComingSoonSection,
  OfferingSection,
  WhyChooseUsSection,
  TestimonialsSection,
} from "../sections";
import HeroVisual from "../sections/HeroVisual";

export const LandingPage = () => {
  return (
    <div className=" w-full min-h-screen  ">
      <HeroVisual />
      <div className="relative w-full">
        <div className="absolute top-[310px] left-0 w-[180px] h-[180px] bg-secondary rounded-[90px] blur-[110px]" />

        <div className="absolute top-[120px] right-[20%] w-[194px] h-[194px] bg-orange rounded-[97px] blur-[75px]" />
      </div>
      <AIIntelligenceSection />
      <OfferingSection />
      <WhyChooseUsSection />
      <ComingSoonSection />
      <WhyChooseUsSection />
      <TestimonialsSection />

      {/*  



      <CoreOfferingsSection />

      <PartnerSection />

      <TeamSection /> */}
    </div>
  );
};
