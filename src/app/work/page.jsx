"use client";

import React, { useEffect, useState } from "react";
import Workoutscard from "@/app/components/Shaerd/Workoutscard";

const WorkPage = () => {
  const [workoutData, setWorkoutData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getWorkouts = async () => {
      try {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "";
        const res = await fetch(`${baseUrl}/workouts.json`);

        if (!res.ok) {
          throw new Error("Failed to fetch workouts");
        }

        const data = await res.json();
        setWorkoutData(data);
      } catch (error) {
        console.error("Error fetching workouts:", error);
      } finally {
        setLoading(false);
      }
    };

    getWorkouts();
  }, []);

  return (
    <main className="container mx-auto px-4 py-16 text-white">
      <div className="mb-12 text-center">
        <span className="rounded-full bg-[#b9ff00]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#b9ff00]">
          FitLog Library
        </span>

        <h1 className="mt-4 text-4xl font-bold">
          All Workouts
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-400">
          Explore workouts and find the right exercises for your fitness goals.
        </p>
      </div>

      {loading ? (
        <p className="text-center text-gray-400">Loading workouts...</p>
      ) : (
        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {Array.isArray(workoutData) && workoutData.length > 0 ? (
            workoutData.map((workout, ind) => (
              <Workoutscard
                key={workout?.id || ind}
                work={workout}
              />
            ))
          ) : (
            <p className="col-span-full text-center text-gray-400">
              No workouts available.
            </p>
          )}
        </div>
      )}
    </main>
  );
};

export default WorkPage;