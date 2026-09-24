

import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="container mx-auto my-6 border-t border-gray-200 pt-4 px-4">
      <div className="flex flex-col items-center gap-3 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex items-center">
          <Image
            src="/assets/logo.png"
            alt="FITLOG Logo"
            width={24}
            height={24}
            className="object-contain"
          />

          <Link className="btn btn-ghost text-xl font-bold" href="/">
            FITLOG
          </Link>
        </div>

        <div className="text-sm text-gray-500">
          &copy; 2026 FitLog — Workout Library. Train hard, log honest.
        </div>
      </div>
    </div>
  );
};

export default Footer;