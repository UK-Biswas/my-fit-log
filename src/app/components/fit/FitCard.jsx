
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const FitCard = ({ fit }) => {
  const router = useRouter();

  const {
    id,
    name,
    image,
    muscleGroups,
    equipment,
    duration,
    caloriesBurned,
    rating,
  } = fit;

  const handleCardClick = () => {
    router.push(`/fit/${id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="w-full cursor-pointer overflow-hidden rounded-xl border border-gray-700 bg-[#15171c] text-white"
    >
      <Image
        src={image}
        alt={name}
        width={400}
        height={200}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <div className="mb-3 flex flex-wrap gap-2">
          {muscleGroups.map((muscle) => (
            <span
              key={muscle}
              className="rounded-full bg-lime-400 px-2 py-1 text-[9px] font-bold uppercase text-black"
            >
              {muscle}
            </span>
          ))}
        </div>

        <h3 className="text-sm font-bold uppercase">{name}</h3>

        <p className="mt-1 text-xs text-gray-400">{equipment}</p>

        <div className="my-3 border-t border-gray-800"></div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400">
          <span>◷ {duration} min</span>
          <span>● {caloriesBurned} kcal</span>
          <span>★ {rating}</span>
        </div>
      </div>
    </div>
  );
};

export default FitCard;