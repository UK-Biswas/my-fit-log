
"use client";

import React, { useContext, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import PlanHeader from "./PlanHeader";
import PlanStats from "./PlanStats";
import PlanList from "./PlanList";
import EmptyPlan from "./EmptyPlan";

import { FitContext } from "@/context/FitContext";

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
  const [completedIds, setCompletedIds] = useState([]);
  const [toast, setToast] = useState("");

  // -----------------------------
  // Toast
  // -----------------------------
  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };

  // -----------------------------
  // Remove workout from today's plan
  // -----------------------------
  const handleRemove = (id) => {
    const workout = plans.find((item) => item.id === id);

    setPlans((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (workout) {
      showToast(`${workout.name} removed`);
    }
  };

  // -----------------------------
  // Remove workout from saved plan
  // -----------------------------
  const handleRemoveSaved = (id) => {
    const workout = savedPlan.find((item) => item.id === id);

    setSavedPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );

    if (workout) {
      showToast(`${workout.name} removed from saved`);
    }
  };

  // -----------------------------
  // Mark workout as completed
  // -----------------------------
  const handleMarkDone = (id) => {
    const workout = plans.find((item) => item.id === id);

    setCompletedIds((prev) => {
      if (prev.includes(id)) {
        return prev;
      }

      return [...prev, id];
    });

    if (workout) {
      showToast(`${workout.name} marked as done`);
    }
  };

  // -----------------------------
  // Current tab list
  // -----------------------------
  const currentList =
    activeTab === "today" ? plans : savedPlan;

  // -----------------------------
  // Sort workouts
  // -----------------------------
  const sortedList = useMemo(() => {
    return [...currentList].sort((a, b) => {
      switch (sortBy) {
        case "duration":
          return (
            Number(a.duration || 0) -
            Number(b.duration || 0)
          );

        case "calories":
          return (
            Number(a.caloriesBurned || 0) -
            Number(b.caloriesBurned || 0)
          );

        case "rating":
          return (
            Number(b.rating || 0) -
            Number(a.rating || 0)
          );

        default:
          return 0;
      }
    });
  }, [currentList, sortBy]);

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
        <div className="mt-6">
          <PlanStats plan={currentList} />
        </div>

        {/* Workout Section */}
        <section className="mt-8">

          {/* Section Header */}
          <div className="mb-4 flex items-center justify-between">

            <div>
              <h2 className="text-sm font-bold uppercase">
                {activeTab === "today"
                  ? "Today's Plan"
                  : "Saved Workouts"}
              </h2>

              <p className="mt-1 text-xs text-gray-500">
                {currentList.length}{" "}
                {currentList.length === 1
                  ? "workout"
                  : "workouts"}
              </p>
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-500">
                Sort By
              </span>

              <select
                value={sortBy}
                onChange={(e) =>
                  setSortBy(e.target.value)
                }
                className="rounded-lg border border-gray-700 bg-[#15181e] px-3 py-2 text-xs text-gray-300 outline-none transition focus:border-[#B7F500]"
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

          {/* Active Badge */}
          {activeTab === "today" && plans.length > 0 && (
            <div className="mb-4 flex justify-end">
              <span className="rounded-full bg-[#1B3210] px-3 py-1 text-[10px] font-bold text-[#B7F500]">
                Active
              </span>
            </div>
          )}

          {/* Empty State */}
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

              onMarkDone={handleMarkDone}

              completedIds={completedIds}
            />
          )}

        </section>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-lg border border-gray-700 bg-[#15181e] px-4 py-3 text-sm text-white shadow-xl">
          {toast}
        </div>
      )}

    </main>
  );
};

export default MyPlan;