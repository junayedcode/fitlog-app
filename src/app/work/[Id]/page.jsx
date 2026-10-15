import React from "react";
import Link from "next/link";
import Image from "next/image";
import Addbtn from "@/app/plan/addbtn";
import Savebtn from "@/app/plan/savebtn";

// Required for Next.js 16 blocking dynamic routes
export const instant = false;

const getWorkouts = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL || "";
    const res = await fetch(`${baseUrl}/workouts.json`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch workouts");
    }

    return await res.json();
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};

const WorkDetailsPage = async ({ params }) => {
  const { id } = await params;
  const workoutsData = await getWorkouts();

  const works = workoutsData.find(
    (item) => String(item.id).trim() === String(id).trim() || String(item._id).trim() === String(id).trim()
  );

  if (!works) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center bg-[#0b0c0f] px-5 text-center text-white">
        <div>
          <h1 className="text-2xl font-bold">Workout Not Found</h1>
          <p className="mt-3 text-gray-400">
            The workout you are looking for does not exist.
          </p>
          <Link
            href="/work"
            className="mt-6 inline-block rounded-lg bg-[#b9ff00] px-5 py-3 font-semibold text-black"
          >
            Back to Workouts
          </Link>
        </div>
      </div>
    );
  }

  const instructions = Array.isArray(works.instructions) ? works.instructions : [];
  const muscleGroups = Array.isArray(works.muscleGroups) ? works.muscleGroups : [];

  const details = [
    { label: "Equipment", value: Array.isArray(works.equipment) ? works.equipment.join(", ") : works.equipment },
    { label: "Difficulty", value: works.difficulty },
    { label: "Sets", value: works.sets },
    { label: "Reps", value: works.reps },
    { label: "Duration", value: works.duration },
    { label: "Calories", value: works.caloriesBurned != null ? `${works.caloriesBurned} kcal` : null },
    { label: "Rating", value: works.rating },
  ];

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-10 text-white md:px-[70px] md:py-[70px]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="overflow-hidden rounded-xl border border-[#252830] bg-[#15171c]">
          <Image
            src={works.image}
            alt={works.name || "Workout"}
            width={600}
            height={700}
            className="h-[520px] w-full object-cover"
          />
        </div>

        <div className="min-w-0">
          <h1 className="text-2xl font-extrabold uppercase leading-tight tracking-wide sm:text-3xl">
            {works.name}
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            {works.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {muscleGroups.map((muscle, index) => (
              <span
                key={`${muscle}-${index}`}
                className="rounded-full bg-[#b9ff00] px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] px-4">
            {details.map((detail) => (
              <div
                key={detail.label}
                className="flex min-h-10 items-center justify-between gap-4 border-b border-[#252830] py-3 last:border-b-0"
              >
                <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400">
                  {detail.label}
                </span>
                <span className="text-right text-xs font-medium text-gray-200">
                  {detail.value ?? "N/A"}
                </span>
              </div>
            ))}
          </div>

          <section className="mt-7">
            <h2 className="text-sm font-bold uppercase tracking-wider">
              Instructions
            </h2>

            {instructions.length > 0 ? (
              <ol className="mt-3 list-decimal space-y-2 pl-5 text-xs leading-5 text-gray-400">
                {instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ol>
            ) : (
              <p className="mt-3 text-sm text-gray-400">
                No instructions available for this workout.
              </p>
            )}
          </section>

          <div className="mt-7 flex flex-wrap gap-3">
            <Addbtn works={works} />
            <Savebtn works={works} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default WorkDetailsPage;