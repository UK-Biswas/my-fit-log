
"use client";

import React, { useContext, useState } from "react";
import PlanHeader from "./PlanHeader";
import PlanStats from "./PlanStats";
import PlanList from "./PlanList";
import EmptyPlan from "./EmptyPlan";
import { FitContext } from "@/context/FitContext";
import { useRouter } from "next/navigation";

const MyPlan = () => {
  const router = useRouter();

  const {
    plans,
    setPlans,
    savedPlan,
    setSavedPlan,
  } = useContext(FitContext);

  const [activeTab, setActiveTab] = useState("today");


  const [sortBy, setSortBy] = useState("duration");

  const handleRemove = (id) => {
    const updatedPlan = plans.filter(
      (item) => item.id !== id
    );

    setPlans(updatedPlan);
  };

  const handleRemoveSaved = (id) => {
    const updatedSaved = savedPlan.filter(
      (item) => item.id !== id
    );

    setSavedPlan(updatedSaved);
  };


  const currentList =
    activeTab === "today" ? plans : savedPlan;


  const sortedList = [...currentList].sort((a, b) => {
    if (sortBy === "duration") {
      return Number(a.duration) - Number(b.duration);
    }

    if (sortBy === "calories") {
      return Number(a.caloriesBurned) - Number(b.caloriesBurned);
    }

    if (sortBy === "rating") {
      return Number(b.rating) - Number(a.rating);
    }

    return 0;
  });

  return (
    <main className="min-h-screen bg-[#0d0f13] text-white">

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">

        <PlanHeader
          planCount={plans.length}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />


        {activeTab === "today" && (
          <div className="mt-6">
            <PlanStats plan={plans} />
          </div>
        )}

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

            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">
                Sort By
              </span>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-lg border border-gray-700 bg-[#15181e] px-3 py-2 text-xs text-gray-300 outline-none focus:border-gray-500"
              >
                <option value="duration">
                  Duration
                </option>

                <option value="calories">
                  Calories
                </option>

                <option value="rating">
                  Rating
                </option>
              </select>
            </div>

          </div>


          {activeTab === "today" && plans.length > 0 && (
            <div className="mb-4 flex justify-end">
              <span className="rounded-full bg-[#1B3210] px-3 py-1 text-[10px] font-bold text-[#B7F500]">
                Active
              </span>
            </div>
          )}

          {currentList.length === 0 ? (
            <EmptyPlan type={activeTab} />
          ) : (
            <PlanList
              plan={sortedList}
              saved={activeTab === "saved"}
              onRemove={handleRemove}
              onRemoveSaved={handleRemoveSaved}

              onViewDetails={(item) => {
                router.push(`/fit/${item.id}`);
              }}

              onMarkDone={(id) => {
                console.log("Mark as Done:", id);
              }}
            />
          )}

        </div>
      </div>
    </main>
  );
};

export default MyPlan;