
import Link from "next/link";

const EmptyPlan = ({ isSaved }) => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-xl font-bold text-white">
        {isSaved
          ? "No Saved Workouts"
          : "No Workouts Added Yet"}
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
};

export default EmptyPlan;
