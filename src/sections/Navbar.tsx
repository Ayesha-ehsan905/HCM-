import React from "react";
import { Button } from "../components/ui/button";
import { scrollToElement } from "../utilis/functions";

const navigationItems = [
  { label: "About", id: "about" },
  { label: "Services", id: "services" },
  { label: "Resources", id: "resources" },
  { label: "Contact", id: "contact" },
];

export const Navbar = () => {
  return (
    <header className=" w-full h-16 ">
      <div className="flex items-center justify-between h-full ">
        <img className="w-[87px] h-[43px]" alt="Group" src="/group-11.png" />

        <nav className="flex items-center gap-12">
          {navigationItems.map((item, index) => (
            <span
              key={index}
              onClick={(e) => scrollToElement(e, item.id)}
              className="font-medium text-black text-base tracking-[0] leading-4 whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer"
            >
              {item.label}
            </span>
          ))}
        </nav>

        <Button className="bg-secondary hover:bg-secondary/90 rounded-[40px] px-4 py-3 h-auto">
          <span className="font-semibold text-white text-base tracking-[0] leading-4 whitespace-nowrap">
            Start Your AI HR Audit
          </span>
        </Button>
      </div>
    </header>
  );
};
