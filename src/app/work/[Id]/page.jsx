
import Image from "next/image";
import Addbtn from "@/app/plan/addbtn";
import Savebtn from "@/app/plan/savebtn";
export const instant = false;


async function getWorkouts() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL;

    if (!baseUrl) {
      console.error(
        "NEXT_PUBLIC_SERVER_BASE_URL is missing in .env.local"
      );
      return [];
    }

    const response = await fetch(`${baseUrl}/workouts.json`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch workouts: ${response.status}`);
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error("Error loading workouts:", error);
    return [];
  }
}

export default async function WorkDetailsPage({ params }) {
  const routeParams = await params;
  const id = String(routeParams.Id ?? routeParams.id ?? "");

  const workoutsData = await getWorkouts();

  const works = workoutsData.find(
    (item) =>
      String(item.id ?? "") === id ||
      String(item._id ?? "") === id
  );

  if (!works) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#0b0c0f] px-6 text-center text-white">
        <h1 className="text-3xl font-bold">
          Workout Not Found
        </h1>

        <p className="mt-3 text-gray-400">
          Workout ID: {id}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Check your JSON data and workout ID.
        </p>
      </main>
    );
  }

  const muscleGroups = Array.isArray(works.muscleGroups)
    ? works.muscleGroups
    : [];

  const instructions = Array.isArray(works.instructions)
    ? works.instructions
    : [];

  const equipment = Array.isArray(works.equipment)
    ? works.equipment.join(", ")
    : works.equipment || "Not specified";

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-6 py-10 text-white md:px-[70px] md:py-[70px]">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] md:min-h-[450px]">
            {works.image && (
              <Image
                src={works.image}
                alt={works.name || "Workout"}
                fill
                unoptimized
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[3px] text-[#b9ff00]">
              Workout Details
            </p>

            <h1 className="mt-3 text-3xl font-bold uppercase md:text-5xl">
              {works.name}
            </h1>

            <p className="mt-5 leading-7 text-gray-400">
              {works.description || "No description available."}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {muscleGroups.map((muscle, index) => (
                <span
                  key={`${muscle}-${index}`}
                  className="rounded-full border border-[#34383f] px-4 py-2 text-sm text-gray-300"
                >
                  {muscle}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <Detail label="Equipment" value={equipment} />
              <Detail
                label="Difficulty"
                value={works.difficulty || "N/A"}
              />
              <Detail
                label="Duration"
                value={
                  works.duration != null
                    ? `${works.duration} min`
                    : "N/A"
                }
              />
              <Detail
                label="Calories"
                value={
                  works.caloriesBurned != null
                    ? `${works.caloriesBurned} kcal`
                    : "N/A"
                }
              />
              <Detail label="Sets" value={works.sets ?? "N/A"} />
              <Detail label="Reps" value={works.reps ?? "N/A"} />
              <Detail label="Rating" value={works.rating ?? "N/A"} />
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Addbtn works={works} />
              <Savebtn works={works} />
            </div>
          </div>
        </div>

        {instructions.length > 0 && (
          <section className="mt-14">
            <h2 className="mb-6 text-2xl font-bold">
              Instructions
            </h2>

            <ol className="space-y-4">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="flex gap-4 rounded-xl border border-[#252830] bg-[#15171c] p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#b9ff00] font-bold text-black">
                    {index + 1}
                  </span>

                  <p className="leading-7 text-gray-300">
                    {instruction}
                  </p>
                </li>
              ))}
            </ol>
          </section>
        )}
      </div>
    </main>
  );
}

function Detail({ label, value }) {
  return (
    <div className="rounded-xl border border-[#252830] bg-[#15171c] p-4">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 break-words font-semibold">{value}</p>
    </div>
  );
}
