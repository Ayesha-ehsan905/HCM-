import { ArrowUpRightIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

const serviceCards = [
  {
    id: 1,
    title: "AI Adoption & Change Management",
    description:
      "Helping HR functions adopt AI safely, train employees, and embed trust and ethics using data and technology.",
    size: "large",
    visual: "chart",
  },
  {
    id: 2,
    title: "AI-Enhanced Recruitment",
    description:
      "Hire faster and smarter. From AI-driven job description to automated candidate shortlists, we help you save time and improve quality of hire.",
    size: "medium",
    visual: "candidates",
  },
  {
    id: 3,
    title: "Organizational Design",
    description:
      "Structure follows strategy. We use AI to model your organization, identify gaps, and optimize for efficiency, collaboration, and growth.",
    size: "medium",
    visual: "network",
  },
  {
    id: 4,
    title: "HR Strategy & Business Development",
    description:
      "Build scalable people operations. We design policies, programs, and systems that grow with your business - while leveraging AI to keep you ahead.",
    size: "large",
    visual: "tasks",
  },
];

const candidates = [
  {
    name: "Evelyn Hayes",
    role: "Content Creator",
    image: "/ellipse-1145-1.svg",
  },
  {
    name: "Naomi Watts",
    role: "Frontend Developer",
    image: "/ellipse-1145-2.svg",
  },
  {
    name: "Arthur Clarke",
    role: "Designer",
    image: "/ellipse-1145.svg",
  },
];

const chartLines = [
  { left: "left-[99px]" },
  { left: "left-[199px]" },
  { left: "left-[299px]" },
  { left: "left-[399px]" },
  { left: "left-[499px]" },
];

const yAxisLabels = [
  { value: "30", marginLeft: "ml-0" },
  { value: "20", marginLeft: "ml-[0.7px]" },
  { value: "10", marginLeft: "ml-[4.0px]" },
  { value: "0", marginLeft: "ml-[9.1px]" },
];

const xAxisLabels = [
  { value: "Apr", width: "w-[30.71px]" },
  { value: "May", width: "w-[34.55px]" },
  { value: "Jun", width: "w-[30.71px]" },
  { value: "Jul", width: "w-[25.59px]" },
  { value: "Aug", width: "w-[33.27px]" },
  { value: "Sep", width: "w-[33.27px]" },
];

export const HeroSection = () => {
  return (
    <section className="relative w-full px-20 py-16 bg-[#7b5ee00a] overflow-hidden">
      <div className="absolute top-[590px] left-[400px] w-[347px] h-[347px] bg-[#7b5ee0] rounded-[173.5px] blur-[200px]" />
      <div className="absolute -right-10 bottom-0 w-[347px] h-[347px] bg-[#ffd8de] rounded-[173.5px] blur-[200px]" />

      <div className="relative max-w-[1280px] mx-auto flex flex-col items-center gap-16">
        <header className="flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-4 w-full">
            <Badge className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-[#7b5ee01f] rounded-[80px] border border-solid border-[#7b5ee0] h-auto">
              <span className="font-medium text-[#7b5ee0] text-base tracking-[0] leading-4">
                Our Services
              </span>
            </Badge>

            <h2 className="font-semibold text-[40px] text-center tracking-[0] leading-[52px]">
              <span className="text-[#1a1a1a]">Our Core </span>
              <span className="text-[#7b5ee0]">Offerings</span>
            </h2>
          </div>

          <p className="w-[846px] font-medium text-[#1a1a1a] text-base text-center tracking-[0] leading-[20.8px]">
            We focus on all pillars of HR, designed to help companies build and
            scale internal AI-powered HR function.
          </p>
        </header>

        <div className="flex flex-col items-start gap-5 w-full">
          <div className="flex items-center gap-5 w-full">
            <Card className="w-[738px] h-[545px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col h-full justify-between p-6">
                <div className="relative w-[696px] h-[299px]">
                  <div className="absolute top-0 left-0 w-[690px] h-[299px] bg-white rounded-2xl border-[1.15px] border-solid border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f]" />

                  <div className="absolute top-[62px] left-[120px] w-[500px] h-[183px]">
                    {chartLines.map((line, index) => (
                      <img
                        key={`line-${index}`}
                        className={`absolute top-[34px] ${line.left} w-0.5 h-[150px]`}
                        alt="Line"
                        src="/line-1.svg"
                      />
                    ))}
                    <img
                      className="absolute top-[34px] -left-px w-0.5 h-[150px]"
                      alt="Line"
                      src="/line-1.svg"
                    />

                    <div className="absolute top-0 left-[271px] w-[57px] h-7">
                      <div className="absolute top-0 left-0 w-[55px] h-7 bg-[#7b5ee0] rounded-[16.64px]" />
                      <div className="absolute top-[calc(50.00%_-_7px)] left-[calc(50.00%_-_11px)] font-normal text-white text-[14.6px] tracking-[0] leading-[14.6px] whitespace-nowrap">
                        30
                      </div>
                    </div>
                  </div>

                  <img
                    className="absolute top-[120px] left-[85px] w-[564px] h-[108px]"
                    alt="Vector"
                    src="/vector-2.svg"
                  />

                  <img
                    className="absolute top-[90px] left-[88px] w-[579px] h-[163px]"
                    alt="Vector"
                    src="/vector-3-1.svg"
                  />

                  <div className="absolute top-24 left-[31px] w-[30px] h-[170px] flex flex-col gap-[26px]">
                    {yAxisLabels.map((label, index) => (
                      <div
                        key={`y-axis-${index}`}
                        className={`${label.marginLeft} [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#969496] text-lg text-right tracking-[0] leading-[22.2px] whitespace-nowrap`}
                      >
                        {label.value}
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-[261px] left-[107px] w-[540px] h-[23px] flex gap-[68px]">
                    {xAxisLabels.map((label, index) => (
                      <div
                        key={`x-axis-${index}`}
                        className={`${label.width} h-[23.03px] [font-family:'General_Sans-Regular',Helvetica] font-normal text-[#969496] text-lg tracking-[0] leading-[22.2px] whitespace-nowrap`}
                      >
                        {label.value}
                      </div>
                    ))}
                  </div>

                  <div className="absolute top-[15px] left-[31px] font-medium text-black text-xl tracking-[0] leading-5 whitespace-nowrap">
                    Team Performance
                  </div>

                  <div className="absolute top-[45px] left-[41px] font-medium text-black text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                    Project Team
                  </div>

                  <div className="absolute top-[45px] left-[186px] font-medium text-black text-[10px] tracking-[0] leading-[10px] whitespace-nowrap">
                    Product Team
                  </div>

                  <div className="absolute top-12 left-44 w-1.5 h-1.5 bg-[#ffd8de] rounded-[3px]" />
                  <div className="absolute top-12 left-[31px] w-1.5 h-1.5 bg-[#7b5ee0] rounded-[3px]" />
                </div>

                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="font-semibold text-[#1a1a1a] text-2xl tracking-[0] leading-[31.2px]">
                    AI Adoption &amp; Change Management
                  </h3>

                  <p className="font-medium text-[#1a1a1a] text-base tracking-[0] leading-[20.8px]">
                    Helping HR functions adopt AI safely, train employees, and
                    embed trust and ethics using data and technology.
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

            <Card className="w-[522px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col justify-center gap-6 p-6">
                <div className="relative w-[475px] h-[299px]">
                  <div className="relative top-[calc(50.00%_-_120px)] left-[calc(50.00%_-_238px)] h-[239px]">
                    {candidates.map((candidate, index) => {
                      const positions = [
                        { top: "top-[23px]", left: "left-0", zIndex: "z-10" },
                        { top: "top-0", left: "left-[138px]", zIndex: "z-20" },
                        {
                          top: "top-[23px]",
                          left: "left-[290px]",
                          zIndex: "z-10",
                        },
                      ];
                      const widths = ["w-[185px]", "w-[199px]", "w-[185px]"];
                      const heights = ["h-[216px]", "h-[222px]", "h-[216px]"];

                      return (
                        <Card
                          key={`candidate-${index}`}
                          className={`flex flex-col ${widths[index]} ${heights[index]} items-center justify-center gap-4 p-4 absolute ${positions[index].top} ${positions[index].left} ${positions[index].zIndex} bg-white rounded-2xl border border-solid border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f]`}
                        >
                          <CardContent className="flex flex-col items-center gap-4 p-0 w-full">
                            <img
                              className="w-12 h-12 object-cover"
                              alt={candidate.name}
                              src={candidate.image}
                            />

                            <div className="flex flex-col items-start gap-3 w-full">
                              <h4 className="w-full font-semibold text-[#1a1a1a] text-base text-center tracking-[0] leading-4">
                                {candidate.name}
                              </h4>

                              <p className="w-full font-medium text-[#1a1a1a] text-xs text-center tracking-[0] leading-3">
                                {candidate.role}
                              </p>
                            </div>

                            <Button
                              variant="outline"
                              className="w-full h-auto gap-2.5 p-2 rounded-lg border border-solid border-[#7b5ee0] bg-transparent hover:bg-[#7b5ee00a]"
                            >
                              <span className="flex-1 font-semibold text-[#1a1a1a] text-xs text-center tracking-[0] leading-3">
                                Hire Now
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="font-semibold text-[#1a1a1a] text-2xl tracking-[0] leading-[31.2px]">
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

          <div className="flex items-center gap-5 w-full">
            <Card className="w-[522px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col justify-center gap-6 p-6">
                <div className="relative w-[475px] h-[299px] bg-white rounded-xl overflow-hidden border border-solid border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f]">
                  <div className="relative top-[calc(50.00%_-_101px)] left-[calc(50.00%_-_216px)] w-[432px] h-[203px]">
                    <div className="absolute top-[46px] left-[158px] w-[114px] h-28 rounded-[100px] border border-solid border-[#7b5ee0] [background:radial-gradient(50%_50%_at_50%_50%,rgba(217,217,217,0)_0%,rgba(123,94,224,0.12)_100%)]" />

                    <img
                      className="absolute top-0 left-[72px] w-[289px] h-[203px]"
                      alt="Vector"
                      src="/vector-2178.svg"
                    />

                    <div className="absolute top-[135px] left-0 w-[72px] h-[45px] bg-[#7b5ee014] rounded-md border border-solid border-[#d9d9d9]" />
                    <div className="absolute top-[23px] left-0 w-[72px] h-[46px] bg-[#7b5ee014] rounded-md border border-solid border-[#d9d9d9]" />
                    <div className="absolute top-[23px] left-[360px] w-[72px] h-[46px] bg-[#7b5ee014] rounded-md border border-solid border-[#d9d9d9]" />
                    <div className="absolute top-[135px] left-[359px] w-[72px] h-[45px] bg-[#7b5ee014] rounded-md border border-solid border-[#d9d9d9]" />

                    <img
                      className="absolute w-[8.79%] h-[25.64%] top-[37.37%] left-[45.43%]"
                      alt="Vector"
                      src="/vector.svg"
                    />

                    <div className="absolute top-[34px] left-6 w-6 h-6 bg-[#7b5ee0] rounded-xl">
                      <img
                        className="absolute w-[52.63%] h-[52.63%] top-[23.68%] left-[23.68%]"
                        alt="Icons lightning"
                        src="/icons-lightning-filled.svg"
                      />
                    </div>

                    <img
                      className="absolute top-[146px] left-6 w-6 h-6"
                      alt="Frame"
                      src="/frame.svg"
                    />

                    <img
                      className="absolute top-[34px] left-96 w-6 h-6"
                      alt="Icon document bold"
                      src="/icon-document-bold.svg"
                    />

                    <img
                      className="absolute top-[147px] left-[383px] w-6 h-6"
                      alt="Capa"
                      src="/capa-1.svg"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="font-semibold text-[#1a1a1a] text-2xl tracking-[0] leading-[31.2px]">
                    Organizational Design
                  </h3>

                  <p className="font-medium text-[#1a1a1a] text-base tracking-[0] leading-[20.8px]">
                    Structure follows strategy. We use AI to model your
                    organization, identify gaps, and optimize for efficiency,
                    collaboration, and growth.
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

            <Card className="w-[738px] h-[545px] bg-white rounded-2xl border-0 shadow-none">
              <CardContent className="flex flex-col h-full justify-between p-6">
                <div className="relative w-[690px] h-[299px] bg-base-00 rounded-2xl overflow-hidden border border-solid border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f]">
                  <div className="absolute top-6 left-8 w-[307px] h-[136px] opacity-80">
                    <div className="absolute top-0 left-0 w-[305px] h-[136px] bg-[#f7f0fe] rounded-[21.5px]" />
                    <div className="absolute top-4 left-[27px] w-[174px] h-[19px] bg-[#7b5ee0] rounded-[30px]" />
                    <div className="absolute top-[51px] left-[27px] w-[113px] h-[11px] bg-[#7b5ee029] rounded-[30px]" />
                    <div className="absolute top-[93px] left-[148px] w-[62px] h-[11px] bg-[#7b5ee029] rounded-[30px]" />
                    <div className="left-[241px] w-11 [font-family:'Poppins',Helvetica] text-base-100 absolute top-[91px] font-medium text-[12.1px] tracking-[0] leading-[16.1px] whitespace-nowrap">
                      50/80
                    </div>
                    <div className="absolute top-[114px] left-[148px] w-[134px] h-1.5 flex bg-[#7b5ee0] rounded-[3.36px]">
                      <div className="w-[73.9px] h-[5.87px] bg-base-00 rounded-[3.36px]" />
                    </div>
                    <div className="absolute top-[86px] left-[30px] w-[87px] h-[38px]">
                      <img
                        className="absolute -top-px -left-px w-10 h-10 border-[1.34px] border-solid border-white object-cover"
                        alt="Ellipse"
                        src="/ellipse-3.png"
                      />
                      <img
                        className="absolute -top-px left-[23px] w-10 h-10 border-[1.34px] border-solid border-white object-cover"
                        alt="Ellipse"
                        src="/ellipse-6.png"
                      />
                      <img
                        className="absolute -top-px left-12 w-10 h-10 border-[1.34px] border-solid border-white object-cover"
                        alt="Ellipse"
                        src="/ellipse-5.png"
                      />
                    </div>
                  </div>

                  <div className="absolute top-6 left-[356px] w-[307px] h-[136px] opacity-80">
                    <div className="absolute top-0 left-0 w-[305px] h-[136px] bg-base-00 rounded-[21.5px] border-[1.34px] border-solid border-[#ecf3ff]" />
                    <div className="absolute top-4 left-[27px] w-[174px] h-[19px] bg-[#7b5ee0] rounded-[30px]" />
                    <div className="absolute top-[51px] left-[27px] w-[113px] h-[11px] bg-[#7b5ee029] rounded-[30px]" />
                    <div className="top-[93px] left-[148px] bg-[#ffc9e9] absolute w-[62px] h-[11px] rounded-[30px]" />
                    <div className="left-60 w-[41px] [font-family:'Inter',Helvetica] text-[#1a1a1a] absolute top-[91px] font-medium text-[12.1px] tracking-[0] leading-[16.1px] whitespace-nowrap">
                      50/80
                    </div>
                    <div className="absolute top-[114px] left-[148px] w-[134px] h-1.5 bg-[#ffc9e9] rounded-[3.36px]" />
                    <div className="absolute top-[114px] left-[148px] w-[74px] h-1.5 bg-[#f3f3f3] rounded-[3.36px]" />
                    <div className="absolute top-[86px] left-[29px] w-[87px] h-[38px]">
                      <img
                        className="absolute -top-px -left-px w-10 h-10 border-[1.34px] border-solid border-white object-cover"
                        alt="Ellipse"
                        src="/ellipse-3.png"
                      />
                      <img
                        className="absolute -top-px left-[23px] w-10 h-10 border-[1.34px] border-solid border-white object-cover"
                        alt="Ellipse"
                        src="/ellipse-6.png"
                      />
                      <img
                        className="absolute -top-px left-12 w-10 h-10 border-[1.34px] border-solid border-white object-cover"
                        alt="Ellipse"
                        src="/ellipse-5.png"
                      />
                    </div>
                  </div>

                  <div className="absolute top-[172px] left-8 w-[629px] h-[117px] flex flex-col gap-2.5 opacity-80">
                    <div className="ml-[0.3px] w-[624.75px] flex gap-[459.7px]">
                      <div className="w-[143px] h-[25px] [font-family:'Poppins',Helvetica] font-semibold text-[#002055] text-[16.2px] tracking-[0] leading-[24.2px] whitespace-nowrap">
                        Tasks In Progress
                      </div>
                      <div className="mt-[3px] w-5 h-5 flex rotate-180">
                        <img
                          className="flex-1 w-5 -rotate-180"
                          alt="Iconly light arrow"
                          src="/iconly-light-arrow---left-2.svg"
                        />
                      </div>
                    </div>

                    <div className="w-[629px] h-[82px] flex bg-base-00 rounded-[21.5px] border border-solid border-[#7b5ee0]">
                      <div className="mt-[17px] w-[52px] h-[50px] ml-[556.6px] relative">
                        <div className="absolute top-[19px] left-[13px] [font-family:'Poppins',Helvetica] font-medium text-[#002055] text-[12.1px] text-center tracking-[0] leading-[16.1px] whitespace-nowrap">
                          60%
                        </div>
                        <div className="absolute top-0 left-0 w-[50px] h-[50px] rounded-[25px] border-[5.38px] border-solid border-[#a990ff]" />
                        <img
                          className="absolute top-px left-[11px] w-[39px] h-[50px]"
                          alt="Ellipse"
                          src="/ellipse-717.svg"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="absolute w-[calc(100%_-_281px)] top-[-272px] left-px h-[59px] opacity-80">
                    <div className="absolute w-[10.35%] h-[40.91%] top-[31.82%] left-[8.18%] flex items-center">
                      <div className="h-[24.19px] ml-0 w-[40.32px] [font-family:'SF_Pro_Display-Semibold',Helvetica] font-normal text-base-100 text-[20.2px] text-center tracking-[-0.22px] leading-[24.2px] whitespace-nowrap">
                        9:41
                      </div>
                    </div>
                    <img
                      className="absolute top-[calc(50.00%_-_2056px)] right-[965px] w-[90px] h-[15px]"
                      alt="Container"
                      src="/container.png"
                    />
                  </div>

                  <div className="absolute top-[243px] left-[51px] w-[174px] h-[11px] bg-[#7b5ee0] rounded-[30px]" />
                  <div className="absolute top-[220px] left-[52px] w-[142px] h-[11px] bg-[#7b5ee029] rounded-[30px]" />
                  <div className="top-[268px] left-[51px] bg-[#7b5ee029] absolute w-[62px] h-[11px] rounded-[30px]" />
                </div>

                <div
                  className="flex flex-
col items-start gap-4 w-full"
                >
                  <h3 className="font-semibold text-[#1a1a1a] text-2xl tracking-[0] leading-[31.2px]">
                    HR Strategy &amp; Business Development
                  </h3>

                  <p className="font-medium text-[#1a1a1a] text-base tracking-[0] leading-[20.8px]">
                    Build scalable people operations. We design policies,
                    programs, and systems that grow with your business - while
                    leveraging AI to keep you ahead.
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
        </div>
      </div>
    </section>
  );
};
