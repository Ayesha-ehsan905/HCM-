import React from "react";
import { Button } from "../components/ui/button";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  return (
    <header className=" w-full h-16 ">
      <div className="flex items-center justify-between h-full ">
        <img className="w-[87px] h-[43px]" alt="Group" src="/group-11.png" />

        <nav className="flex items-center gap-12">
          {navigationItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="font-medium text-black text-base tracking-[0] leading-4 whitespace-nowrap hover:opacity-70 transition-opacity cursor-pointer"
            >
              {item.label}
            </a>
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
