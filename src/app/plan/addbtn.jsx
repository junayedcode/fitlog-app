
"use client";

import React, { useContext } from "react";
import { PlanContext } from "../context/PlanContext";

const Addbtn = ({ works }) => {
  const { plans, setPlans } = useContext(PlanContext);

  const exists = plans.some(
    (item) => String(item.id) === String(works.id)
  );

  const handleplan = () => {
    if (exists) {
      alert("This workout is already added!");
      return;
    }

    if (plans.length >= 5) {
      alert("You can add a maximum of 5 workouts!");
      return;
    }

    setPlans((previous) => [...previous, works]);

    console.log("Added to plan:", works);
  };

  return (
    <button
      type="button"
      onClick={handleplan}
      disabled={exists}
      className="rounded-lg bg-[#b9ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#a5e600] disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white"
    >
      {exists ? "Already Added ✓" : "Add to Today's Plan"}
    </button>
  );
};

export default Addbtn;
