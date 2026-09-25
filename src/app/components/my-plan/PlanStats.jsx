import React from "react";

const PlanStats = ({ plan }) => {
  const totalExercises = plan.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalDuration = plan.reduce(
    (total, item) =>
      total + (Number(item.duration) || 0) * (item.quantity || 1),
    0
  );

  const totalCalories = plan.reduce(
    (total, item) =>
      total +
      (Number(item.caloriesBurned) || 0) *
        (item.quantity || 1),
    0
  );

  return (
    <div className="grid grid-cols-3 overflow-hidden rounded-xl border border-gray-800 bg-[#101216]">

      <div className="border-r border-gray-800 p-4 sm:p-5">
        <p className="text-[9px] uppercase text-gray-500">
          Exercises
        </p>

        <p className="mt-2 text-xl sm:text-2xl font-bold">
          {totalExercises}
        </p>
      </div>

      <div className="border-r border-gray-800 p-4 sm:p-5">
        <p className="text-[9px] uppercase text-gray-500">
          Duration
        </p>

        <p className="mt-2 text-xl sm:text-2xl font-bold">
          {totalDuration}
          <span className="ml-1 text-xs text-gray-500">
            min
          </span>
        </p>
      </div>

      <div className="p-4 sm:p-5">
        <p className="text-[9px] uppercase text-gray-500">
          Calories
        </p>

        <p className="mt-2 text-xl sm:text-2xl font-bold">
          {totalCalories}
          <span className="ml-1 text-xs text-gray-500">
            kcal
          </span>
        </p>
      </div>

    </div>
  );
};

export default PlanStats;