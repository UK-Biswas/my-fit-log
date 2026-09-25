
"use client";

import { FitContext } from "@/context/FitContext";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const AddToPlanButton = ({ fit }) => {
  const [added, setAdded] = useState(false);

  const {
    plans,
    setPlans,
    savedPlan,
    setSavedPlan,
  } = useContext(FitContext);

  useEffect(() => {
    const exists = plans.some((item) => item.id === fit.id);

    setAdded(exists);
  }, [plans, fit.id]);

  const handleAddToPlan = () => {
    if (!added) {
      const updatedPlans = [...plans, fit];

      setPlans(updatedPlans);
      setAdded(true);

      toast.success("Workout added to your plan!");
    } else {
      toast.info("Workout is already in your plan.");
    }
  };

  return (
    <button
      onClick={handleAddToPlan}
      className="w-full sm:w-auto rounded-md bg-[#B7F500] px-6 py-3 text-sm font-bold text-black transition hover:bg-[#c9ff33]"
    >
      {added ? "✓ Added to Plan" : "+ Add to Plan"}
    </button>
  );
};

export default AddToPlanButton;