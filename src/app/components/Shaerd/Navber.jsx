
"use client";

import Image from "next/image";
import React, { useContext } from "react";
import Logo from "../../assets/logo.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PlanContext } from "../../context/PlanContext";

const Navber = () => {
  const { plans, loaded } = useContext(PlanContext);
  const pathname = usePathname();

  const navLinks = [
    { name: "Workouts", href: "/work" },
    { name: "My Plan", href: "/MyPlan" },
  ];

  return (
    <header className="border-b border-[#1c1f24] bg-[#0b0c0f] px-5 text-white md:px-[70px]">
      <div className="navbar min-h-[70px] p-0">
        {/* Logo */}
        <div className="navbar-start">
          <Link href="/work" className="flex items-center gap-2">
            <Image
              src={Logo}
              alt="FITLOG logo"
              width={38}
              height={38}
            />
            <span className="text-lg font-bold tracking-wide">
              FITLOG
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-1 rounded-full border border-[#1c1f24] bg-[#101115] p-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2 text-xs font-medium transition ${
                    isActive
                      ? "bg-[#b9ff00] text-black"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Plan and Saved Counters */}
        <div className="navbar-end">
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="/MyPlan"
              className="flex items-center gap-2 text-xs text-gray-300 transition hover:text-white"
            >
              <span>Plan</span>
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-[#b9ff00] px-1.5 font-bold text-black">
                {plans?.length ?? 0}
              </span>
            </Link>

            <Link
              href="/MyPlan"
              className="flex items-center gap-2 text-xs text-gray-300 transition hover:text-white"
            >
              <span>Save</span>
              <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-[#30343d] px-1.5 text-white">
                {loaded?.length ?? 0}
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav className="flex justify-center pb-3 lg:hidden">
        <div className="flex items-center gap-1 rounded-full border border-[#1c1f24] bg-[#101115] p-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-xs font-medium transition ${
                  isActive
                    ? "bg-[#b9ff00] text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navber;
