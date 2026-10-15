
const PlanStats = ({ plans }) => {
  const uniquePlans = Array.isArray(plans)
    ? plans.filter(
        (work, index, array) =>
          work &&
          array.findIndex(
            (item) =>
              item &&
              String(item.id) === String(work.id)
          ) === index
      )
    : [];

  const totalMinutes = uniquePlans.reduce(
    (total, work) =>
      total + Number(work.duration || 0),
    0
  );

  const totalCalories = uniquePlans.reduce(
    (total, work) =>
      total + Number(work.caloriesBurned || 0),
    0
  );

  const stats = [
    { title: "EXERCISES", value: uniquePlans.length },
    { title: "MINUTES", value: totalMinutes },
    { title: "CALORIES", value: totalCalories },
  ];

  return (
    <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-xl border border-[#252830] bg-[#15171c] p-5 text-white"
        >
          <p className="text-xs text-gray-400">
            {stat.title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {stat.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default PlanStats;
