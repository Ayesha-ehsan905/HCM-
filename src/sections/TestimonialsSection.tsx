import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Separator } from "../components/ui/separator";

const testimonials = [
  {
    quote:
      "HCM Strategy helped us move from theory to practice - our HR team now runs AI-assisted recruiting and performance reviews with confidence.",
    name: "Michael Rodriguez",
    title: "Chief Human Resources Officer",
    avatar: "/images/testimonials3.png",
  },
  {
    quote:
      "Implementing HCM Strategy has revolutionized our talent acquisition process, allowing for more efficient and data-driven decisions that align with our company goals.",
    name: "Jessica Lee",
    title: "Talent Acquisition Manager",
    avatar: "/images/testimonials1.png",
  },
  {
    quote:
      "Thanks to HCM Strategy, our employee engagement has soared as we now have a structured approach to feedback and development.",
    name: "David Chen",
    title: "Director of Employee Engagement",
    avatar: "/images/testimonials2.png",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="container my-[60px] lg:my-[240px]">
      <div className="flex flex-col w-full items-center gap-4 lg:gap-16 py-16 lg:px-4">
        <div className="flex flex-col items-center gap-4 w-full max-w-[1280px]">
          <Badge
            variant="outline"
            className="inline-flex items-center justify-center gap-2.5 px-4 py-2 bg-[#7b5ee01f] rounded-[80px] border border-solid border-[#7b5ee0] h-auto"
          >
            <span className="font-medium text-[#7b5ee0] text-base tracking-[0] leading-4 whitespace-nowrap">
              Testimonials
            </span>
          </Badge>

          <h2 className="w-full font-semibold text-[24px] lg:text-[40px]  leading-normal   text-center tracking-[0] lg:leading-[52px]">
            <span className="text-black">Trusted by Forward-Thinking </span>
            <span className="text-secondary">HR Teams</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-[1280px]">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="flex flex-col items-start gap-10 p-6 bg-white rounded-3xl overflow-hidden border border-solid border-[#d9d9d9]"
            >
              <CardContent className="flex flex-col items-start gap-4 p-0 w-full">
                <img
                  className="w-10 h-10"
                  alt="Format quote"
                  src="/images/testomionial.svg"
                />

                <div className="flex flex-col items-start gap-6 w-full">
                  <p className="font-medium text-[#1a1a1a] text-base tracking-[0] leading-[20.8px]">
                    "{testimonial.quote}"
                  </p>

                  <Separator className="w-full bg-[#D9D9D9]" />

                  <div className="flex items-center gap-4 w-full">
                    <Avatar className="w-14 h-14">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="object-cover"
                      />
                    </Avatar>

                    <div className="flex flex-col items-start gap-1 flex-1">
                      <h3 className="font-semibold text-[#1a1a1a] text-xl tracking-[0] leading-5">
                        {testimonial.name}
                      </h3>

                      <p className="font-normal text-[#969496] text-base tracking-[0] leading-4">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
