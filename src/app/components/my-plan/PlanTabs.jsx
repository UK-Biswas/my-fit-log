"use client";

import React from "react";

const PlanTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="flex gap-6 border-b border-gray-800">
      <button
        onClick={() => setActiveTab("today")}
        className={`pb-3 text-xs font-bold uppercase ${
          activeTab === "today"
            ? "border-b-2 border-[#B7F500] text-[#B7F500]"
            : "text-gray-500"
        }`}
      >
        Today's Plan
      </button>

      <button
        onClick={() => setActiveTab("saved")}
        className={`pb-3 text-xs font-bold uppercase ${
          activeTab === "saved"
            ? "border-b-2 border-[#B7F500] text-[#B7F500]"
            : "text-gray-500"
        }`}
      >
        Saved
      </button>
    </div>
  );
};

export default PlanTabs;