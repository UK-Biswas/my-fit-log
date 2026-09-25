"use client";

import React from "react";

const PlanHeader = ({ planCount, activeTab, setActiveTab }) => {
  return (
    <div className="flex flex-col gap-5 border-b border-gray-800 pb-5 sm:flex-row sm:items-end sm:justify-between">

      <div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#B7F500]">
          FITLOG
        </p>

        <h1 className="mt-1 text-2xl sm:text-3xl font-extrabold uppercase">
          My Plan
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Build your workout plan and stay consistent.
        </p>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveTab("today")}
          className={`rounded-md px-4 py-2 text-xs font-bold uppercase transition ${
            activeTab === "today"
              ? "bg-[#B7F500] text-black"
              : "border border-gray-800 text-gray-400 hover:text-white"
          }`}
        >
          Today
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-md px-4 py-2 text-xs font-bold uppercase transition ${
            activeTab === "saved"
              ? "bg-[#B7F500] text-black"
              : "border border-gray-800 text-gray-400 hover:text-white"
          }`}
        >
          Saved
        </button>
      </div>
    </div>
  );
};

export default PlanHeader;