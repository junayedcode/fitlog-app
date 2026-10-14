import React from "react";
import Workoutscard from "@/app/components/Shaerd/Workoutscard";

const getWorkouts = async () => {
  try {
    const res = await fetch("http://localhost:3000/workouts.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};

const Home = async () => {
  const workoutData = await getWorkouts();

  return (
    <section className="container mx-auto px-4 py-16 text-white">
      {/* Heading */}
      <div className="mb-12 text-center">
        <span className="rounded-full bg-[#b9ff00]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#b9ff00]">
          Workout Collection
        </span>

        <h1 className="mt-4 text-4xl font-bold">Explore Our Workouts</h1>

        <p className="mx-auto mt-3 max-w-2xl text-gray-400">
          Discover amazing workouts from different categories and achieve your
          fitness goals today.
        </p>
      </div>

      {/* Workouts Grid */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {Array.isArray(workoutData) && workoutData.length > 0 ? (
  workoutData.map((workout, ind) => ( 
    <Workoutscard key={workout?.id || ind} work={workout} />
  ))
) : (
  <p className="col-span-full text-center text-gray-400">
    No workouts available.
  </p>
)}
      </div>
    </section>
  );
};

export default Home;