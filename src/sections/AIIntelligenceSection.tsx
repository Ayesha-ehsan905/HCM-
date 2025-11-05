import { Badge } from "../components/ui/badge";

export const AIIntelligenceSection = () => {
  return (
    <section
      className="container flex flex-col items-center gap-6 w-full  mx-auto px-4 my-[60px] lg:my-[240px]"
      id="about"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <Badge
          variant="outline"
          className="bg-secondary/10 border-secondary text-secondary px-4 py-2 rounded-[80px] h-auto"
        >
          <span className="font-medium text-base leading-4">About Us</span>
        </Badge>

        <h2 className="font-semibold text-[24px] lg:text-[40px] text-center tracking-[0] leading-normal lg:leading-[52px] w-full">
          <span className="text-black">Where </span>
          <span className="text-secondary">HR</span>
          <span className="text-black"> Innovation Meets </span>
          <span className="text-secondary">AI</span>
          <span className="text-black"> Intelligence</span>
        </h2>
      </div>

      <p className="font-medium text-[#1a1a1a] text-base text-center tracking-[0] leading-[20.8px]  max-w-[846px] w-full mx-auto">
        We combine 20+ years of hands-on leadership with deep AI capability to
        help companies modernize how they hire, engage, and grow talent. Our
        approach turns HR into a strategic, data-driven partner, to help you
        lead change, scale culture, and outperform in the age of intelligence.
      </p>
    </section>
  );
};
