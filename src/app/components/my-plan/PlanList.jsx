"use client";

import React from "react";
import Image from "next/image";

const PlanList = ({
  plan,
  onRemove,
  saved = false,
  onRemoveSaved,
  onViewDetails,
  onMarkDone,
}) => {
  return (
    <div className="space-y-3">
      {plan.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 rounded-xl border border-gray-800 bg-[#101216] p-3 sm:flex-row sm:items-center"
        >

          <Image
            src={item.image}
            alt={item.name}
            width={100}
            height={70}
            className="h-20 w-full rounded-lg object-cover sm:h-16 sm:w-24"
          />

          <div className="min-w-0 flex-1">
            <h3 className="truncate text-sm font-bold uppercase">
              {item.name}
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              {item.equipment}
            </p>

            <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-gray-500">
              <span>{item.duration} min</span>
              <span>{item.caloriesBurned} kcal</span>
              <span>★ {item.rating}</span>
            </div>
          </div>


          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onViewDetails?.(item)}
              className="rounded-full border border-gray-700 px-4 py-2 text-xs text-gray-300 hover:text-white"
            >
              View Details
            </button>

            {!saved && (
              <button
                type="button"
                onClick={() => onMarkDone?.(item.id)}
                className="flex items-center gap-1.5 rounded-full bg-[#baff00] px-4 py-2 text-xs font-semibold text-black hover:bg-[#caff33]"
              >
                <span>✓</span>
                Mark as Done
              </button>
            )}
          </div>



          <button
            onClick={() =>
              saved
                ? onRemoveSaved(item.id)
                : onRemove(item.id)
            }
            className="text-xs text-gray-500 hover:text-red-400"
          >
            Remove
          </button>

        </div>
      ))}
    </div>
  );
};

export default PlanList;