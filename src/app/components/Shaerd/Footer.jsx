import React from "react";
import Image from "next/image";
import Logo from "@/app/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-[#22252b] bg-[#0b0c0f] px-[70px] py-8 text-white">
      <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={Logo}
            alt="FitLog Logo"
            width={24}
            height={24}
            className="object-contain"
          />

          <span className="text-sm font-extrabold tracking-wider">
            FITLOG
          </span>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500">
          © 2026 FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;