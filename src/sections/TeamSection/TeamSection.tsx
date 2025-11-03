import React from "react";
import { Separator } from "../../components/ui/separator";

const servicesData = [
  "AI adoption and Change management",
  "AI-Enhanced Recruitment",
  "Performance Management",
  "Workforce Planning & Predictive People Analytics",
  "Organizational Design",
  "Policy and procedure automation",
  "Skills and career pathing",
  "Employee Engagement & Experience Analytics",
];

const companyData = ["About Us", "Resources", "Contact Us"];

export const TeamSection = () => {
  return (
    <footer className="flex flex-col w-full items-start gap-6 pt-10 pb-6 px-10 bg-[#7b5ee014] rounded-3xl overflow-hidden">
      <div className="flex items-start gap-[100px] w-full">
        <div className="flex flex-col w-[225px] items-start gap-6">
          <img
            className="w-[117px] h-[57.68px]"
            alt="Group"
            src="/group-11-2.png"
          />

          <div className="flex flex-col items-start gap-4 w-full">
            <p className="font-medium text-[#1a1a1a] text-base tracking-[0] leading-4">
              Smarter HR, Powered by AI.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-[265px] items-start gap-6">
          <h3 className="font-semibold text-[#1a1a1a] text-xl tracking-[0] leading-5">
            Services
          </h3>

          <nav className="flex flex-col items-start justify-center gap-3 w-full">
            {servicesData.map((service, index) => (
              <a
                key={index}
                href="#"
                className="font-medium text-[#1a1a1a] text-sm tracking-[0] leading-[14px] hover:underline"
              >
                {service}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-6 flex-1">
          <h3 className="font-semibold text-[#1a1a1a] text-xl tracking-[0] leading-5">
            Company
          </h3>

          <nav className="flex flex-col items-start justify-center gap-3 w-full">
            {companyData.map((item, index) => (
              <a
                key={index}
                href="#"
                className="font-medium text-[#1a1a1a] text-sm tracking-[0] leading-[14px] hover:underline"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex flex-col items-start gap-6 flex-1">
          <h3 className="font-semibold text-[#1a1a1a] text-xl tracking-[0] leading-5">
            Contact Info
          </h3>

          <div className="flex flex-col items-start justify-center gap-3 w-full">
            <a
              href="mailto:hello@hcmstrategy.com"
              className="font-medium text-[#1a1a1a] text-sm tracking-[0] leading-[14px] hover:underline"
            >
              hello@hcmstrategy.com
            </a>

            <img
              className="flex-[0_0_auto]"
              alt="Frame"
              src="/frame-1000012049.svg"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start gap-6 w-full">
        <Separator className="w-full" />

        <div className="flex items-start justify-center gap-6 w-full">
          <p className="flex items-center justify-center w-fit opacity-80 font-medium text-[#1a1a1a] text-sm tracking-[0] leading-[14px] whitespace-nowrap">
            © 2025 HCM Strategy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
