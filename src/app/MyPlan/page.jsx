"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { PlanContext } from "../context/PlanContext";
import Workoutscard from "../components/Shaerd/Workoutscard";

const MyPlan = () => {
  const { plans, loaded } = useContext(PlanContext);

  return (
    <div className="px-[70px] py-[70px]">
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {plans.length > 0 ? (
            plans.map((works) => (
              <Workoutscard key={works.id} work={works} />
            ))
          ) : (
            <div className="py-10 text-center">
              <h2 className="text-xl font-bold text-white">
                No Workouts Added Yet
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                You haven't added any workouts to your plan yet.
                Explore workouts and add your favorites!
              </p>

              <Link
                href="/work"
                className="mt-4 inline-block rounded-lg bg-[#b9ff00] px-5 py-3 text-sm font-bold text-black"
              >
                Explore Workouts
              </Link>
            </div>
          )}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label="Saved"
        />

        <div className="tab-content border-base-300 bg-base-100 p-10">
          {loaded.length > 0 ? (
            loaded.map((works) => (
              <Workoutscard key={works.id} work={works} />
            ))
          ) : (
            <div className="py-10 text-center">
              <h2 className="text-xl font-bold text-white">
                No Saved Workouts
              </h2>

              <p className="mt-2 text-sm text-gray-400">
                Workouts you save for later will appear here.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPlan;