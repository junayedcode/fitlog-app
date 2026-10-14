import Image from "next/image";
import Link from "next/link"; 

const Workoutscard = ({ work }) => {
  return (
    <Link href={`/work/${work.id}`} className="block">
      <div className="overflow-hidden rounded-xl border border-[#252830] bg-[#15171c] transition duration-300 hover:-translate-y-1 hover:border-[#b9ff00]">
        
        <Image
          src={work.image}
          alt={work.name || "Workout Image"}
          width={740}
          height={300}
          className="h-44 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="p-4">
          <h2 className="text-lg font-bold uppercase text-white">
            {work.name}
          </h2>

          <p className="mt-2 text-xs text-gray-400">
            {work.equipment}
          </p>

          <p className="mt-3 line-clamp-2 text-sm text-gray-300">
            {work.description}
          </p>

          <div className="mt-4 flex justify-between gap-2 border-t border-[#292c33] pt-3 text-xs text-gray-400">
            <span>◷ {work.duration} min</span>
            <span>{work.caloriesBurned} kcal</span>
            <span>★ {work.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Workoutscard;