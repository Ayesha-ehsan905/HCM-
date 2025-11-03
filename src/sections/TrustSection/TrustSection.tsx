import { SearchIcon, SparklesIcon } from "lucide-react";
import React from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";

const insights = [
  {
    title:
      "Quick Insight: 3 open positions in Engineering have been active for 45+ days",
    description:
      "Recommended action: Review job descriptions and salary ranges",
    status: "Active",
    statusColor: "text-[#7b5ee0]",
    borderColor: "border-[#7b5ee099]",
  },
  {
    title:
      "Quick Insight: 5 applicants have scored above 85% in technical assessments",
    description: "Recommended action: Conduct interviews with top candidates",
    status: "Pending",
    statusColor: "text-[#ee9d29]",
    borderColor: "border-[#7b5ee099]",
  },
  {
    title: "Quick Insight: Current project deadlines for 2 teams are at risk",
    description:
      "Recommended action: Assess team workload and redistribute tasks",
    status: "Urgent",
    statusColor: "text-[#f01313]",
    borderColor: "border-[#7b5ee099]",
  },
];

export const TrustSection = () => {
  return (
    <section className="relative w-full px-10 py-16 bg-[#7b5ee029] rounded-2xl overflow-hidden">
      <div className="absolute top-[-95px] left-[-76px] w-[194px] h-[194px] bg-[#ffd8de] rounded-[97px] blur-[75px]" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex flex-col items-start gap-4 max-w-[590px]">
          <Badge className="inline-flex items-center justify-center gap-1 px-4 py-2 bg-[#7b5ee01f] rounded-[80px] border border-solid border-[#7b5ee0] text-[#7b5ee0] hover:bg-[#7b5ee01f] h-auto">
            <SparklesIcon className="w-4 h-4" />
            <span className="font-medium text-base leading-4">
              Coming Soon
            </span>
          </Badge>

          <div className="flex flex-col items-start gap-6 w-full">
            <h2 className="font-semibold text-[40px] leading-[52px]">
              <span className="text-[#1a1a1a]">Your </span>
              <span className="text-[#7b5ee0]">Personal AI</span>
              <span className="text-[#1a1a1a]"> HR Partner</span>
            </h2>

            <div className="flex flex-col items-start gap-4 w-full">
              <p className="font-medium text-[#1a1a1a] text-base leading-[20.8px]">
                We are building the next generation of HR technology - your very
                personal HR Assistant, that integrates directly with your
                systems and supports you in your day-to-day HR needs.
              </p>

              <p className="font-medium text-[#7b5ee0] text-base leading-[20.8px]">
                "AI that understands your people - not replaces them."
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-[690px] lg:ml-auto">
          <Card className="w-full bg-base-00 rounded-2xl overflow-hidden border border-solid border-[#d9d9d9] shadow-[0px_4px_40px_#0000001f]">
            <CardContent className="p-0">
              <div className="relative w-full h-[399px]">
                <div className="absolute top-4 left-8">
                  <img
                    className="w-[87px] h-[43px]"
                    alt="Group"
                    src="/group-11-1.png"
                  />
                </div>

                <div className="absolute top-0 left-[194px] w-full max-w-[496px] bg-graywhite px-[31px] py-[15px]">
                  <div className="flex items-center w-full">
                    <div className="flex items-center gap-4 w-full px-3.5 py-3 bg-[#f5f4f6] rounded-lg">
                      <SearchIcon className="w-5 h-5 text-graydark-4" />
                      <div className="flex items-center gap-1">
                        <div className="w-0.5 h-[22px] bg-[#7b5ee0] rounded" />
                        <span className="font-tittle-16-m font-[number:var(--tittle-16-m-font-weight)] text-graydark-4 text-[length:var(--tittle-16-m-font-size)] tracking-[var(--tittle-16-m-letter-spacing)] leading-[var(--tittle-16-m-line-height)]">
                          SearchIcon or type
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[100px] left-8 w-[calc(100%-64px)] max-w-[629px] flex flex-col gap-6">
                  {insights.map((insight, index) => (
                    <div
                      key={index}
                      className={`flex bg-base-00 rounded-[21.5px] border-[1.34px] border-solid ${insight.borderColor} p-5`}
                    >
                      <div className="flex flex-col gap-[7px] w-full">
                        <div className="flex items-start justify-between gap-4">
                          <p className="flex-1 [font-family:'Poppins',Helvetica] font-medium text-[#002055] text-[15.8px] leading-[18.8px]">
                            {insight.title}
                          </p>
                          <span
                            className={`[font-family:'Poppins',Helvetica] font-medium text-[15.8px] leading-[18.8px] whitespace-nowrap ${insight.statusColor}`}
                          >
                            {insight.status}
                          </span>
                        </div>
                        <p className="[font-family:'Poppins',Helvetica] font-normal text-colorsslate-300 text-[12.1px] leading-[16.1px]">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
