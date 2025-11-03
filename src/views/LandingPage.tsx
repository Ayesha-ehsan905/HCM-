import React from "react";
import { CallToActionSection } from "../sections/CallToActionSection";
import { CoreOfferingsSection } from "../sections/CoreOfferingsSection";
import { FooterSection } from "../sections/FooterSection";
import { HeroSection } from "../sections/HeroSection";
import {  Navbar } from "../sections/Navbar";
import { NavigationSection } from "../sections/NavigationSection";
import { PartnerSection } from "../sections/PartnerSection";
import { TeamSection } from "../sections/TeamSection";
import { TrustSection } from "../sections/TrustSection";

export const LandingPage = () => {
  return (
    <div className="bg-white w-full min-h-screen px-[80px] ">
      <Navbar />

      {/* <div className="relative w-full">
        <div className="absolute top-[1102px] left-0 w-[180px] h-[180px] bg-[#7b5ee0] rounded-[90px] blur-[110px]" />

        <div className="absolute top-[914px] left-[1115px] w-[194px] h-[194px] bg-[#ffd8de] rounded-[97px] blur-[75px]" />

        <img
          className="absolute top-0 left-0 w-full h-[810px] object-cover"
          alt="Frame"
          src="/frame-72.svg"
        />

        <div className="absolute top-[136px] left-[1104px] w-[289px] h-[109px] flex bg-white rounded-[10.59px] overflow-hidden shadow-[0px_4px_40px_#0000001f]">
          <div className="mt-[14.8px] w-[243px] h-[79.23px] ml-6 relative opacity-80">
            <div className="absolute top-0 left-px [font-family:'Poppins',Helvetica] font-normal text-[#afbaca] text-xs tracking-[0] leading-3 whitespace-nowrap">
              Team Member
            </div>

            <div className="absolute top-6 left-[50px] w-[42px] h-[55px] flex flex-col gap-1">
              <img
                className="w-10 h-10 object-cover"
                alt="Ellipse"
                src="/ellipse-6.png"
              />

              <div className="ml-px w-[39px] h-[11px] [font-family:'Poppins',Helvetica] font-normal text-[#afbaca] text-[10.8px] text-center tracking-[0] leading-[10.8px] whitespace-nowrap">
                mehrin
              </div>
            </div>

            <div className="absolute top-6 left-0 w-[42px] h-[55px] flex flex-col gap-1">
              <img
                className="w-10 h-10 object-cover"
                alt="Ellipse"
                src="/ellipse-7.png"
              />

              <div className="ml-[7px] w-[26px] h-[11px] [font-family:'Poppins',Helvetica] font-normal text-[#afbaca] text-[10.8px] text-center tracking-[0] leading-[10.8px] whitespace-nowrap">
                Jeny
              </div>
            </div>

            <div className="absolute top-6 left-[151px] w-[42px] h-[55px] flex flex-col gap-1">
              <img
                className="w-10 h-10 object-cover"
                alt="Ellipse"
                src="/ellipse-8.png"
              />

              <div className="ml-1.5 w-7 h-[11px] [font-family:'Poppins',Helvetica] font-normal text-[#afbaca] text-[10.8px] text-center tracking-[0] leading-[10.8px] whitespace-nowrap">
                Jafor
              </div>
            </div>

            <div className="absolute top-6 left-[100px] w-[43px] h-[55px] flex flex-col gap-1">
              <img
                className="ml-px w-10 h-10"
                alt="Group"
                src="/group-1000000746.png"
              />

              <div className="w-[41px] h-[11px] [font-family:'Poppins',Helvetica] font-normal text-[#afbaca] text-[10.8px] text-center tracking-[0] leading-[10.8px] whitespace-nowrap">
                Avishek
              </div>
            </div>

            <img
              className="absolute top-[23px] left-[200px] w-[43px] h-[43px]"
              alt="Group"
              src="/group-1000000749.png"
            />
          </div>
        </div>

        <div className="flex flex-col w-[185px] items-center gap-3 p-4 absolute top-[239px] left-[831px] bg-white rounded-2xl shadow-[0px_4px_40px_#0000001f]">
          <img
            className="relative w-8 h-8"
            alt="Category streamline"
            src="/category--streamline-carbon.svg"
          />

          <div className="relative self-stretch font-medium text-[#1a1a1a] text-base text-center tracking-[0] leading-[19.2px]">
            Employee Management
          </div>
        </div>

        <img
          className="absolute top-[190px] left-[904px] w-[429px] h-[448px]"
          alt="Group"
          src="/group-37.png"
        />

        <img
          className="absolute top-[465px] left-[1099px] w-[293px] h-[233px]"
          alt="Frame"
          src="/frame-1.svg"
        />
      </div> */}

      <FooterSection />

      {/* <NavigationSection />

      <HeroSection />

      <CallToActionSection />

      <TrustSection />

      <CoreOfferingsSection />

      <PartnerSection />

      <TeamSection /> */}
    </div>
  );
};
