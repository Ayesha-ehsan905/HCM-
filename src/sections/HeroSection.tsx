import React from "react";
import { Button } from "../components/ui/button";

export const HeroSection = () => {
  return (
    <section className="flex flex-col   gap-6 w-full max-w-[522px] mt-[180px]">
      <h1 className="self-stretch font-bold text-[56px] tracking-[0] leading-[78.4px]">
        <span className="text-[#1a1a1a]">Smarter HR, Powered by </span>
        <span className="text-[#7b5ee0]">AI.</span>
      </h1>

      <p className="self-stretch font-medium text-[#1a1a1a] text-base tracking-[0] leading-[20.8px]">
        We partner with growth-driven companies to transform their HR
        infrastructure, harmonizing human intelligence with AI to unlock
        organizational efficiency, performance, and innovation.
      </p>

      <Button className="bg-[#7b5ee0] hover:bg-[#6a4ec9]  w-fit inline-flex items-center justify-center gap-2.5 px-4 py-3 rounded-[40px] h-auto">
        <span className="font-semibold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
          Schedule a Consultation
        </span>
      </Button>
    </section>
  );
};
