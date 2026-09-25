"use client";

import { FitContext } from "@/context/FitContext";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SaveButton = ({ fit }) => {
  const [saved, setSaved] = useState(false);

  const { savedPlan, setSavedPlan } = useContext(FitContext);

  useEffect(() => {
    setSaved(savedPlan.some((item) => item.id === fit.id));
  }, [savedPlan, fit.id]);

  const handleSave = () => {
    if (!saved) {
      const updatedPlans = [...savedPlan, fit];

      setSavedPlan(updatedPlans);
      setSaved(true);

      toast.success("Added to Saved!");
    } else {
      toast.info("Already added to Saved!");
    }
  };

  return (
    <>
      <button
        onClick={handleSave}
        className="w-full sm:w-auto border border-gray-700 px-5 py-3 rounded-md text-sm text-gray-300 hover:border-[#B7F500] transition"
      >
        {saved ? "♥ Saved" : "♡ Save for later"}
      </button>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default SaveButton;