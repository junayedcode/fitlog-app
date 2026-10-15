
"use client";

import React, { useContext } from "react";
import { PlanContext } from "../context/PlanContext";

const Savebtn = ({ works }) => {
  const { loaded, setLoaded } = useContext(PlanContext);

  const isSaved = Array.isArray(loaded) &&
    loaded.some(
      (item) => String(item.id) === String(works.id)
    );

  const handleSave = () => {
    setLoaded((previous) => {
      const current = Array.isArray(previous) ? previous : [];

      const exists = current.some(
        (item) => String(item.id) === String(works.id)
      );

      if (exists) {
        return current;
      }

      return [...current, works];
    });
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      disabled={isSaved}
      className="rounded-lg bg-[#b9ff00] px-5 py-3 text-xs font-bold text-black transition hover:bg-[#a5e600] disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-white"
    >
      {isSaved ? "✓ Saved" : "♧ Save for Later"}
    </button>
  );
};

export default Savebtn;
