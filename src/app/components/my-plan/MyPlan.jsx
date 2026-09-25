"use client";

import React, { useContext, useEffect, useState } from "react";
import PlanHeader from "./PlanHeader";
import PlanStats from "./PlanStats";
import PlanList from "./PlanList";
import EmptyPlan from "./EmptyPlan";
import { FitContext } from "@/context/FitContext";

const MyPlan = () => {
  const { plans, setPlans, savedPlan, setSavedPlan } = useContext(FitContext);
  const [activeTab, setActiveTab] = useState("today");


  const handleRemove = (id) => {
    const updatedPlan = plans.filter(
      (item) => item.id !== id
    );

    savedPlan(updatedPlan);
  };


  const handleRemoveSaved = (id) => {
    const updatedSaved = savedPlan.filter(
      (item) => item.id !== id
    );

    setSavedPlan(updatedSaved);

    
  };

  const currentList =
    activeTab === "today" ? plans : savedPlan;

  return (
    <main className="min-h-screen bg-[#0d0f13] text-white">

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">

        {/* Header */}
        <PlanHeader
          planCount={plans.length}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        {/* Stats */}
        {activeTab === "today" && (
          <div className="mt-6">
            <PlanStats plan={plans} />
          </div>
        )}

        {/* Section */}
        <div className="mt-8">

          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-bold uppercase">
                {activeTab === "today"
                  ? "Today's Plan"
                  : "Saved Workouts"}
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {currentList.length} workout
                {currentList.length !== 1 ? "s" : ""}
              </p>
            </div>

            {activeTab === "today" && plans.length > 0 && (
              <span className="rounded-full bg-[#1B3210] px-3 py-1 text-[10px] font-bold text-[#B7F500]">
                Active
              </span>
            )}
          </div>

          {/* Empty */}
          {currentList.length === 0 ? (
            <EmptyPlan type={activeTab} />
          ) : (
            <PlanList
              plan={currentList}
              saved={activeTab === "saved"}
              onRemove={handleRemove}
              onRemoveSaved={handleRemoveSaved}
            />
          )}

        </div>
      </div>
    </main>
  );
};

export default MyPlan;