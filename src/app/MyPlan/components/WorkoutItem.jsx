
"use client";

import Image from "next/image";
import Link from "next/link";


const WorkoutItem = ({
  work,
  isSaved,
  isCompleted,
  onMarkAsDone,
  onRemove,
}) => {
  return (
    <div
      key={`${isSaved ? "saved" : "plan"}-${work.id}`}
      className="flex flex-wrap items-center gap-3 rounded-xl border border-[#252830] bg-[#15171c] p-3 text-white sm:flex-nowrap"
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
            isCompleted && !isSaved
              ? "text-gray-500 line-through"
              : "text-white"
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

      <div className="flex shrink-0 flex-wrap items-center gap-2">
        <Link
          href={`/work/${work.id}`}
          className="rounded-full border border-[#30343d] px-3 py-1.5 text-[10px] text-gray-300 hover:border-white"
        >
          View Details
        </Link>

        {!isSaved && (
          <button
            type="button"
            onClick={() => onMarkAsDone(work.id)}
            disabled={isCompleted}
            className="rounded-full bg-[#b9ff00] px-3 py-1.5 text-[10px] font-bold text-black disabled:cursor-default disabled:opacity-60"
          >
            {isCompleted ? "✓ Completed" : "✓ Mark as Done"}
          </button>
        )}

        <button
          type="button"
          onClick={() => onRemove(work.id, isSaved)}
          aria-label={`Remove ${work.name}`}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-[#30343d] text-lg text-gray-400 hover:border-red-500 hover:text-red-500"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default WorkoutItem;
