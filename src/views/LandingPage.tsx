import {
  AIIntelligenceSection,
  ComingSoonSection,
  OfferingSection,
  WhyChooseUsSection,
  TestimonialsSection,
  ConsultationSection,
  FooterSection,
} from "../sections";
import HeroVisual from "../sections/HeroVisual";

export const LandingPage = () => {
  return (
    <div className=" w-full min-h-screen  ">
      <HeroVisual />
      <div className="relative w-full">
        <div className="absolute top-[170px] lg:top-[310px] left-[-23%] lg:left-0 w-[180px] h-[180px] bg-secondary rounded-[90px] blur-[110px]" />

        <div className="absolute right-0  top-[-87px] w-[90px]  lg:top-[120px] lg:right-[17%] lg:w-[194px] h-[194px] bg-orange rounded-[97px] blur-[75px]" />
      </div>
      <AIIntelligenceSection />
      <OfferingSection />
      <WhyChooseUsSection />
      <ComingSoonSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <ConsultationSection />
      <FooterSection />
    </div>
  );
};
