
"use client";
import React, { useContext } from "react";
import { PlanContext } from "../context/PlanContext";

const Savebtn = ({ works }) => {
  const {  loaded,  setLoaded, plans,  setPlans,} = useContext(PlanContext);

  const handloaded = () => {
    const exists = plans.some(
      (item) => String(item.id) === String(works.id)
    );

    setLoaded([...loaded, works]);
    console.log("Added to plan:", works);
  };

  const isSaved = plans.some(
    (item) => String(item.id) === String(works.id)
  );

  return (
   <button
              type="button"
              className="rounded-lg bg-[#b9ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#a5e600]" onClick={()=> handloaded()}
            >
                ♧ Save for Later
            </button>
  );
};

export default Savebtn;
