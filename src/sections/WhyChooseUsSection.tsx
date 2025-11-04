import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";

const features = [
  {
    icon: "/images/chart-relationship--streamline-carbon.svg",
    title: "Proven Expertise",
    description:
      "20+ years of experience leading HR transformation across industries.",
  },
  {
    icon: "/images/ibm-z-os-ai-control-interface--streamline-carbon.svg",
    title: "Practical AI Integration",
    description:
      "We go beyond theory - embedding AI directly into your workflows and systems.",
  },
  {
    icon: "/images/gateway-api--streamline-carbon.svg",
    title: "Ethical Approach",
    description:
      "We prioritize trust, transparency, and responsible AI adoption in every engagement.",
  },
  {
    icon: "/images/analytics-reference--streamline-carbon.svg",
    title: "Scalable Results",
    description:
      "From startups to enterprises, our frameworks adapt and grow with you.",
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section
      className="container flex flex-col w-full items-center gap-16 my-[240px]"
      id="resources"
    >
      <div className="flex flex-col items-center gap-4 w-full">
        <Badge
          variant="outline"
          className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-[#7b5ee01f] rounded-[80px] border border-solid border-[#7b5ee0] h-auto"
        >
          <span className="font-medium text-secondary text-base tracking-[0] leading-4 whitespace-nowrap">
            Why Choose Us
          </span>
        </Badge>

        <h2 className="font-semibold text-[40px] text-center tracking-[0] leading-[52px]">
          <span className="text-black">Why Companies Trust </span>
          <span className="text-secondary">HCM Strategy</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="border-0 shadow-none bg-transparent w-[305px]"
          >
            <CardContent className="flex flex-col items-start gap-4 p-0">
              <img
                className="w-10 h-10"
                alt={feature.title}
                src={feature.icon}
              />

              <h3 className="font-semibold text-black text-xl tracking-[0] leading-[26px]">
                {feature.title}
              </h3>

              <div className="flex flex-col items-start gap-3 w-full">
                <p className="font-medium text-black text-base tracking-[0] leading-[20.8px]">
                  {feature.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
