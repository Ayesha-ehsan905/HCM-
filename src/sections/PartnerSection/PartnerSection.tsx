import React from "react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";

export const PartnerSection = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4">
      <Card className="relative w-full max-w-[1280px] bg-[#7b5ee0] rounded-3xl overflow-hidden border-0">
        <CardContent className="flex flex-col items-center justify-center gap-10 px-20 py-16 relative">
          <img
            className="absolute top-[158px] left-1/2 -translate-x-1/2 w-[1246px] h-[223px] pointer-events-none"
            alt="Frame"
            src="/frame-2.svg"
          />

          <img
            className="absolute top-[-338px] left-[-220px] w-[287px] h-[397px] pointer-events-none"
            alt="Vector"
            src="/vector.svg"
          />

          <img
            className="absolute top-[219px] right-[-101px] w-[244px] h-[338px] pointer-events-none"
            alt="Vector"
            src="/vector.svg"
          />

          <div className="flex flex-col items-center gap-10 relative w-full z-10">
            <div className="flex flex-col items-center gap-4 w-full">
              <p className="font-medium text-white text-base text-center tracking-[0] leading-4">
                Ready to make your HR&nbsp;&nbsp;Smarter?
              </p>

              <div className="flex flex-col items-center gap-4 w-full">
                <h2 className="font-semibold text-white text-[40px] text-center tracking-[0] leading-[52px]">
                  Let&#39;s Explore how AI can unlock Efficiency, Exceptional
                  Performance, and Growth of your Organization
                </h2>

                <p className="font-medium text-white text-base text-center tracking-[0] leading-[20.8px]">
                  No commitment required. Let&apos;s talk about your HR
                  challenges and opportunities.
                </p>
              </div>
            </div>

            <Button className="bg-white hover:bg-white/90 text-[#7b5ee0] px-4 py-3 rounded-[40px] h-auto">
              <span className="font-semibold text-base tracking-[0] leading-4 whitespace-nowrap">
                Schedule a Consultation
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
