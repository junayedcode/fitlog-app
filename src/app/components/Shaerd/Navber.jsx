"use client";
import Image from 'next/image';
import React from 'react';
import Logo from '../../assets/logo.png'
import Link from 'next/link';
import { useContext } from "react";
import { PlanContext } from "../../context/PlanContext";

const Navber = () => {
  const { plans, loaded } = useContext(PlanContext);
    return (
  <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
     
         
     
      </ul>
    </div>
     <div className="flex items-center gap-2">
          <Image src={Logo} alt="logo" width={48} height={48} />
          <span className="text-lg font-medium">FITLOG</span>
        </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li>
 <Link href="/work">Workouts</Link>
      </li>
     
      <li>
          <Link href="/MyPlan">My Plan</Link>
      </li>
    </ul>
  </div>
  
<div className="navbar-end">
  <div className="flex items-center gap-8 text-white">
    <Link href="/MyPlan" className="flex items-center gap-3">
      <span>Plan</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#b9ff00] text-sm font-bold text-black">
        {plans?.length ?? 0}
      </span>
    </Link>

    <Link href="/MyPlan" className="flex items-center gap-3">
      <span>Save</span>
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#30343d] text-sm text-white">
        {loaded?.length ?? 0}
      </span>
    </Link>
  </div>
</div>

</div>
    );
};

export default Navber;