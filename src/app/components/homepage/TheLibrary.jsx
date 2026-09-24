
import React from "react";
import FitCard from "../fit/FitCard";

const getFitCard = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog");

  if (!res.ok) {
    throw new Error("Failed to fetch fitness data");
  }

  const data = await res.json();
  return data;
};

const TheLibrary = async () => {
  const fitData = await getFitCard();

  return (
    <div className="container mx-auto py-4">
      <h2 className="text-2xl font-bold text-white">THE LIBRARY</h2>

      <p className="text-gray-400">
        Twelve lifts covering every major muscle group.
      </p>

      <div className="grid grid-cols-1 gap-4 py-4 md:grid-cols-2 lg:grid-cols-3">
        {fitData.map((fit) => (
          <FitCard key={fit.id} fit={fit} />
        ))}
      </div>
    </div>
  );
};

export default TheLibrary;