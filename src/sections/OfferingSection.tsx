import { ArrowUpRightIcon } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const OfferingSection = () => {
  return (
    <section
      className="relative w-full container py-10 lg:py-16 bg-secondary/4 overflow-hidden my-[60px] lg:my-[200px] "
      id="services"
    >
      {/* Background Blurs */}
      <div className="absolute top-[400px] left-[100px] lg:top-[590px] lg:left-[400px] w-[200px] lg:w-[347px] h-[200px] lg:h-[347px] bg-secondary rounded-full blur-[150px]" />
      <div className="absolute -right-10 bottom-0 w-[200px] lg:w-[347px] h-[200px] lg:h-[347px] bg-orange rounded-full blur-[150px]" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center gap-10 lg:gap-16">
        {/* Header */}
        <header className="flex flex-col items-center gap-4 lg:gap-6 text-center">
          <Badge className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-secondary/12 rounded-[80px] border border-solid border-secondary">
            <span className="font-medium text-secondary text-base leading-4">
              Our Services
            </span>
          </Badge>

          <h2 className="font-semibold text-[24px] lg:text-[40px] tracking-tight leading-normal lg:leading-[52px]">
            <span className="text-[#1a1a1a]">Our Core </span>
            <span className="text-[#7b5ee0]">Offerings</span>
          </h2>

          <p className="max-w-[846px] text-sm sm:text-base font-medium text-black text-center leading-relaxed">
            We focus on all pillars of HR, designed to help companies build and
            scale internal AI-powered HR function.
          </p>
        </header>

        {/* Offerings Grid */}
        <div className="flex flex-col gap-8 w-full">
          {/* Row 1 */}
          <div className="flex flex-col lg:flex-row gap-5 w-full">
            {/* Card 1 */}
            <Card className="max-w-[738px] lg:h-[545px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col justify-between gap-6 p-4 sm:p-6 h-full">
                <div className=" px-[13px]  py-[8px] lg:py-[14px] lg:px-[30px]  w-full bg-white rounded-2xl border border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f] overflow-hidden">
                  <img
                    src="/images/team.png"
                    alt="Offering 1"
                    className="w-full h-auto "
                  />
                </div>

                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-semibold text-xl sm:text-2xl text-[#1a1a1a]">
                    AI Adoption &amp; Change Management
                  </h3>
                  <p className="font-medium text-black text-sm sm:text-base leading-relaxed">
                    Helping HR functions adopt AI safely, train employees, and
                    embed trust and ethics using data and technology.
                  </p>
                </div>

                <Button className="w-[150px] sm:w-[173px] gap-2.5 px-4 py-3 bg-secondary rounded-[40px] hover:bg-secondary/80">
                  <span className="font-semibold text-white text-sm sm:text-base">
                    Learn More
                  </span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="max-w-[522px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col justify-between gap-6 p-4 sm:p-6 h-full">
                <div className="w-full">
                  <img
                    src="/images/hire.png"
                    alt="Offering 2"
                    className="w-full h-auto "
                  />
                </div>

                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-semibold text-xl sm:text-2xl text-[#1a1a1a]">
                    AI-Enhanced Recruitment
                  </h3>

                  <p className="font-medium text-[#1a1a1a] text-base tracking-[0] leading-[20.8px]">
                    Hire faster and smarter. From AI-driven job description to
                    automated candidate shortlists, we help you save time and
                    improve quality of hire.
                  </p>
                </div>

                <Button className="w-[173px] h-auto gap-2.5 px-4 py-3 bg-[#7b5ee0] rounded-[40px] hover:bg-[#6a4dd0]">
                  <span className="font-semibold text-white text-base tracking-[0] leading-4">
                    Learn More
                  </span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            {/* Card 3 */}
            <Card className="max-w-[522px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col justify-between gap-6 p-4 sm:p-6 h-full">
                <div className="py-[19px] px-[30px] lg:py-[48px]  lg:px-[20px] w-full bg-white rounded-2xl border border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f] overflow-hidden">
                  <img
                    src="/images/organization.png"
                    alt="Offering 3"
                    className="w-full h-auto "
                  />
                </div>

                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-semibold text-xl sm:text-2xl text-[#1a1a1a]">
                    Organizational Design
                  </h3>
                  <p className="font-medium text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
                    Structure follows strategy. We use AI to model your
                    organization, identify gaps, and optimize for efficiency,
                    collaboration, and growth.
                  </p>
                </div>

                <Button className="w-[150px] sm:w-[173px] gap-2.5 px-4 py-3 bg-[#7b5ee0] rounded-[40px] hover:bg-[#6a4dd0]">
                  <span className="font-semibold text-white text-sm sm:text-base">
                    Learn More
                  </span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="max-w-[738px] lg:h-[545px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col justify-between gap-6 p-4 sm:p-6 h-full">
                <div className="pt-[18px] pb-[16px] px-[16px] lg:pt-[24px] lg:pb-[10px] lg:px-[30px]w-full bg-white rounded-2xl border border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f] overflow-hidden">
                  <img
                    src="/images/development.png"
                    alt="Offering 4"
                    className="w-full h-auto "
                  />
                </div>

                <div className="flex flex-col items-start gap-3">
                  <h3 className="font-semibold text-xl sm:text-2xl text-[#1a1a1a]">
                    HR Strategy &amp; Business Development
                  </h3>
                  <p className="font-medium text-[#1a1a1a] text-sm sm:text-base leading-relaxed">
                    Build scalable people operations. We design policies,
                    programs, and systems that grow with your business — while
                    leveraging AI to keep you ahead.
                  </p>
                </div>

                <Button className="w-[150px] sm:w-[173px] gap-2.5 px-4 py-3 bg-[#7b5ee0] rounded-[40px] hover:bg-[#6a4dd0]">
                  <span className="font-semibold text-white text-sm sm:text-base">
                    Learn More
                  </span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
