"use client";
import { useState, useEffect } from "react";
import { navigationItems } from "./Navbar";
import { scrollToElement } from "../utilis/functions";
import { X } from "lucide-react";

interface MobileMenuProps {
  visible?: boolean;
  onDismissMobileMenu: () => void;
}

const MobileNavbar = ({ visible, onDismissMobileMenu }: MobileMenuProps) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (visible) {
      document.body.style.overflow = "hidden";
      setShouldRender(true);
      setTimeout(() => setIsAnimating(true), 10); // Start animation after render
    } else {
      setIsAnimating(false);
      document.body.style.overflow = "";
      setTimeout(() => setShouldRender(false), 500); // Matches animation duration
    }
  }, [visible]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-500 ${
        isAnimating ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-500 ${
          isAnimating ? "opacity-50" : "opacity-0"
        }`}
        onClick={onDismissMobileMenu}
      ></div>

      {/* Menu Container */}
      <div
        className={`bg-white border border-gray-200 backdrop-blur-[80px]  p-5 w-[90%]  h-[80%] rounded-2xl shadow-lg transform transition-transform duration-500 ${
          isAnimating
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        {" "}
        <X
          onClick={onDismissMobileMenu}
          className="w-6 h-6 cursor-pointer text-black"
        />
        <nav className="flex flex-col justify-center gap-5 items-center mb-5 mt-6 w-[90%]  h-[80%]">
          {navigationItems.map((menu, index) => (
            <a
              key={index}
              href={`#${menu.id}`}
              className="hover:text-secondary transition text-black text-base tracking-[0] leading-4 whitespace-nowrap"
              onClick={(e) => {
                onDismissMobileMenu();
                scrollToElement(e, menu.id);
              }}
            >
              {menu.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MobileNavbar;
