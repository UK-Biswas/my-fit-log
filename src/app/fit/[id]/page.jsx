import React from "react";
import Image from "next/image";
import SaveButton from "./SaveButton";
import AddToPlanButton from "./AddToPlanButton";



const FitDetailsPage = async ({ params }) => {
  const { id } = await params;

  const response = await fetch(
    `https://api.abcz.workers.dev/api/fitlog/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    return (
      <div className="min-h-screen bg-[#0d0f13] flex items-center justify-center px-4 text-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Workout Not Found
        </h1>
      </div>
    );
  }

  const fit = await response.json();

  return (
    <div className="min-h-screen w-full bg-[#0d0f13] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        <div className="w-full overflow-hidden rounded-2xl bg-[#101216] border border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">

            {/* Image */}
            <div className="w-full h-[300px] sm:h-[450px] lg:h-[700px] p-4 sm:p-6 lg:p-10">
              <Image
                src={fit.image}
                alt={fit.name}
                width={800}
                height={650}
                priority
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>

            {/* Details */}
            <div className="w-full p-5 sm:p-7 lg:p-10">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase leading-tight">
                {fit.name}
              </h1>

              <p className="text-gray-400 text-sm sm:text-base mt-3 leading-relaxed">
                {fit.description}
              </p>

              {/* Muscle Groups */}
              <div className="flex flex-wrap gap-2 mt-5">
                {fit.muscleGroups?.map((muscle) => (
                  <span
                    key={muscle}
                    className="bg-[#B7F500] text-black px-3 py-1.5 rounded-full text-xs font-bold"
                  >
                    {muscle}
                  </span>
                ))}
              </div>

              {/* Information */}
              <div className="mt-6 border border-gray-800 rounded-xl overflow-hidden">

                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-gray-800 text-sm">
                  <span className="text-gray-400 uppercase">
                    Equipment
                  </span>
                  <span>{fit.equipment}</span>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-gray-800 text-sm">
                  <span className="text-gray-400 uppercase">
                    Difficulty
                  </span>
                  <span>{fit.difficulty}</span>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-gray-800 text-sm">
                  <span className="text-gray-400 uppercase">
                    Sets
                  </span>
                  <span>{fit.sets}</span>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-gray-800 text-sm">
                  <span className="text-gray-400 uppercase">
                    Reps
                  </span>
                  <span>{fit.reps}</span>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-gray-800 text-sm">
                  <span className="text-gray-400 uppercase">
                    Duration
                  </span>
                  <span>{fit.duration} min</span>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 border-b border-gray-800 text-sm">
                  <span className="text-gray-400 uppercase">
                    Calories
                  </span>
                  <span>{fit.caloriesBurned} kcal</span>
                </div>

                <div className="flex items-center justify-between gap-4 px-4 sm:px-5 py-3 text-sm">
                  <span className="text-gray-400 uppercase">
                    Rating
                  </span>
                  <span>⭐ {fit.rating}</span>
                </div>

              </div>

              {/* Instructions */}
              <div className="mt-7">
                <h2 className="text-base sm:text-lg font-bold uppercase">
                  Instructions
                </h2>

                <ol className="mt-4 space-y-3">
                  {fit.instructions?.map((instruction, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-400 leading-relaxed"
                    >
                      <span className="text-[#B7F500] font-bold mr-2">
                        {index + 1}.
                      </span>

                      {instruction}
                    </li>
                  ))}
                </ol>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <AddToPlanButton fit={fit} />

                <SaveButton fit={fit} />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitDetailsPage;