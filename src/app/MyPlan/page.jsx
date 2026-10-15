"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlanContext } from "../context/PlanContext";

const MyPlan = () => {
  const { plans, setPlans, loaded } = useContext(PlanContext);
  const [completed, setCompleted] = useState([]);

  const markAsDone = (id) => {
    setCompleted((previous) =>
      previous.includes(id) ? previous : [...previous, id]
    );
  };

  const removeWorkout = (id) => {
    setPlans((previous) =>
      previous.filter((work) => String(work.id) !== String(id))
    );
    setCompleted((previous) =>
      previous.filter((workId) => String(workId) !== String(id))
    );
  };

  const renderWorkouts = (workouts, isSaved = false) => {
    if (!Array.isArray(workouts) || workouts.length === 0) {
      return (
        <div className="py-10 text-center">
          <h2 className="text-xl font-bold text-white">
            {isSaved ? "No Saved Workouts" : "No Workouts Added Yet"}
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            {isSaved
              ? "Workouts you save for later will appear here."
              : "Explore workouts and add them to your plan."}
          </p>
          <Link
            href="/work"
            className="mt-4 inline-block rounded-lg bg-[#b9ff00] px-5 py-3 text-sm font-bold text-black"
          >
            Explore Workouts
          </Link>
        </div>
      );
    }

    return (
      <div className="space-y-3">
        {workouts.filter(Boolean).map((work) => {
          const isCompleted = completed.includes(work.id);

          return (
            <div
              key={work.id}
              className="flex items-center gap-3 rounded-xl border border-[#252830] bg-[#15171c] p-3 text-white"
            >
              <Image
                src={work.image}
                alt={work.name || "Workout"}
                width={100}
                height={64}
                unoptimized
                className="h-[60px] w-[90px] shrink-0 rounded-lg object-cover sm:h-16 sm:w-[100px]"
              />

              <div className="min-w-0 flex-1">
                <h2
                  className={`truncate text-sm font-bold uppercase ${
                    isCompleted ? "text-gray-500 line-through" : "text-white"
                  }`}
                >
                  {work.name}
                </h2>

                <p className="mt-1 truncate text-xs text-gray-500">
                  {work.equipment}
                </p>

                <div className="mt-2 flex flex-wrap gap-3 text-[10px] text-gray-400">
                  <span>◷ {work.duration} min</span>
                  <span>🔥 {work.caloriesBurned} kcal</span>
                  <span>★ {work.rating}</span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <Link
                  href={`/work/${work.id}`}
                  className="rounded-full border border-[#30343d] px-3 py-1.5 text-[10px] text-gray-300 hover:border-white"
                >
                  View Details
                </Link>

                {!isSaved && (
                  <button
                    type="button"
                    onClick={() => markAsDone(work.id)}
                    disabled={isCompleted}
                    className="rounded-full bg-[#b9ff00] px-3 py-1.5 text-[10px] font-bold text-black disabled:cursor-default disabled:opacity-60"
                  >
                    {isCompleted ? "✓ Completed" : "✓ Mark as Done"}
                  </button>
                )}

              {plans.map((works) => (
  <button
    key={works.id}
    onClick={() =>
      setPlans((previous) =>
        previous.filter((item) => item.id !== works.id)
      )
    }
  >
    ×
  </button>
))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-8 md:px-[70px] md:py-[50px]">
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Today's Plan ${plans?.length ?? 0}`}
          defaultChecked
        />

        <div className="tab-content border-base-300 p-4 sm:p-6">
          {renderWorkouts(plans)}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Saved ${loaded?.length ?? 0}`}
        />

        <div className="tab-content border-base-300 p-4 sm:p-6">
          {renderWorkouts(loaded, true)}
        </div>
      </div>
    </main>
  );
};

export default MyPlan;