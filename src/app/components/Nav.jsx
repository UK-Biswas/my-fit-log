
"use client";

import Link from "next/link";
import React, { useContext } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FitContext } from "@/context/FitContext";

const Nav = () => {
  const pathname = usePathname();
  const { plans, savedPlan } = useContext(FitContext);
  const Links = (
    <>
      <li>
        <Link
          href="/"
          className={`py-2 rounded-full text-xl transition ${
            pathname === "/"
              ? "bg-[#1B3210] text-[#B7F500]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Workouts
        </Link>
      </li>

      <li>
        <Link
          href="/myplan"
          className={`py-2 rounded-full text-xl transition ${
            pathname === "/myplan"
              ? "bg-[#1B3210] text-[#B7F500]"
              : "text-gray-400 hover:text-white"
          }`}
        >
          My Plan
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {Links}
          </ul>
        </div>

        <div className="flex items-center">
          <div className="flex gap-4 items-center">
            <Image
              src="/assets/logo.png"
              alt="FITLOG Logo"
              width={35}
              height={35}
              className="object-contain"
            />

            <Link className="text-2xl font-bold" href="/">
              FITLOG
            </Link>
          </div>
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>

      <div className="navbar-end gap-12 text-xl">
        <Link href="/myplan">Plan <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-green-400 px-1 text-xs text-white font-bold">{plans.length}</span></Link>
        <Link href="/myplan">Saved <span className="inline-flex h-8 min-w-8 items-center justify-center rounded-full bg-green-400 px-1 text-xs text-white font-bold">{savedPlan.length}</span></Link>
      </div>
    </div>
  );
};

export default Nav;