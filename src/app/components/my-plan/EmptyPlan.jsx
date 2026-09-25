"use client";

import React from "react";
import Link from "next/link";

const EmptyPlan = ({ type = "today" }) => {
  const isSaved = type === "saved";

  return (
    <div className="flex min-h-[280px] flex-col items-center justify-center rounded-xl border border-gray-800 bg-[#101216] px-5 text-center">

      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-gray-800 text-xl">
        {isSaved ? "♡" : "＋"}
      </div>

      <h2 className="text-sm font-bold uppercase">
        {isSaved ? "No saved workouts" : "Your plan is empty"}
      </h2>

      <p className="mt-2 max-w-sm text-xs leading-relaxed text-gray-500">
        {isSaved
          ? "Save workouts you want to come back to later."
          : "Add workouts from the library to start building your plan."}
      </p>

      <Link
        href="/"
        className="mt-5 rounded-md bg-[#B7F500] px-5 py-2.5 text-xs font-bold uppercase text-black"
      >
        Browse Workouts
      </Link>
    </div>
  );
};

export default EmptyPlan;