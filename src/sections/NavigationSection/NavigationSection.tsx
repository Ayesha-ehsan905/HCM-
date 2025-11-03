import React from "react";
import { Badge } from "../../components/ui/badge";

export const NavigationSection = () => {
  return (
    <section className="flex flex-col items-center gap-6 w-full max-w-[846px] mx-auto px-4">
      <div className="flex flex-col items-center gap-4 w-full">
        <Badge
          variant="outline"
          className="bg-[#7b5ee01f] border-[#7b5ee0] text-[#7b5ee0] px-4 py-2 rounded-[80px] h-auto"
        >
          <span className="font-medium text-base leading-4">
            About Us
          </span>
        </Badge>

        <h2 className="font-semibold text-[40px] text-center tracking-[0] leading-[52px] w-full">
          <span className="text-[#1a1a1a]">Where </span>
          <span className="text-[#7b5ee0]">HR</span>
          <span className="text-[#1a1a1a]"> Innovation Meets </span>
          <span className="text-[#7b5ee0]">AI</span>
          <span className="text-[#1a1a1a]"> Intelligence</span>
        </h2>
      </div>

      <p className="font-medium text-[#1a1a1a] text-base text-center tracking-[0] leading-[20.8px] w-full">
        We combine 20 years of hands-on HR leadership with deep AI capability to
        help companies modernize how they hire, engage, and grow talent. Our
        approach turns HR into a strategic, data-driven partner-helping you lead
        change, scale culture, and outperform in the age of intelligence.
      </p>
    </section>
  );
};
