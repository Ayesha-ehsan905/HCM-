import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";

export const ConsultationSection = () => {
  return (
    <section className="w-full flex justify-center py-16 px-4 my-[240px]">
      <Card
        className=" w-full max-w-[1280px]  rounded-3xl overflow-hidden border-0 "
        style={{
          backgroundImage: "url('/images/Frame1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <CardContent className="flex flex-col items-center justify-center gap-10 px-20 py-16 relative">
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

            <Button className="bg-white hover:bg-white/90 text-[#7b5ee0] px-4 py-3 rounded-[40px] h-auto cursor-pointer">
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
