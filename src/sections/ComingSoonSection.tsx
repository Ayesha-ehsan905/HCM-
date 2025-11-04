import { SparklesIcon } from "lucide-react";
import { Badge } from "../components/ui/badge";

export const ComingSoonSection = () => {
  return (
    <section className="container my-[60px] lg:my-[240px]">
      <div className=" relative w-full px-5 pt-8  pb-40 lg:px-10 lg:py-16 bg-secondary/12 rounded-2xl overflow-hidden ">
        <div className="absolute top-[-95px] left-[-76px] w-[194px] h-[194px] bg-orange rounded-[97px] blur-[75px]" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="flex flex-col items-start gap-4 max-w-[590px]">
            <Badge className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-[#7b5ee01f] rounded-[80px] border border-solid border-[#7b5ee0] text-[#7b5ee0] hover:bg-[#7b5ee01f] h-auto">
              <SparklesIcon className="w-4 h-4" />
              <span className="font-medium text-base leading-4">
                Coming Soon
              </span>
            </Badge>

            <div className="flex flex-col items-start gap-6 w-full">
              <h2 className="font-semibold text-[24px] lg:text-[40px] leading-normal lg:leading-[52px]">
                <span className="text-black">Your </span>
                <span className="text-secondary">Personal AI</span>
                <span className="text-black"> HR Partner</span>
              </h2>

              <div className="flex flex-col items-start gap-4 w-full">
                <p className="font-medium text-black text-base leading-[20.8px]">
                  We are building the next generation of HR technology - your
                  very personal HR Assistant, that integrates directly with your
                  systems and supports you in your day-to-day HR needs.
                </p>

                <p className="font-medium text-secondary text-base leading-[20.8px]">
                  "AI that understands your people - not replaces them."
                </p>
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-[690px] lg:ml-auto">
            <div className="absolute right-[-6%] top-[-30px]">
              <img
                src="/images/Home.png"
                alt="Coming Soon"
                className="w-full h-full object-cover "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
