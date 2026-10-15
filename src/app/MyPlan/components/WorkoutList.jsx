
import WorkoutItem from "./WorkoutItem";
import EmptyPlan from "./EmptyPlan";

const WorkoutList = ({
  workouts,
  isSaved = false,
  completed,
  onMarkAsDone,
  onRemove,
}) => {
  const uniqueWorkouts = Array.isArray(workouts)
    ? workouts.filter(
        (work, index, array) =>
          work &&
          array.findIndex(
            (item) =>
              item &&
              String(item.id) === String(work.id)
          ) === index
      )
    : [];

  if (uniqueWorkouts.length === 0) {
    return <EmptyPlan isSaved={isSaved} />;
  }

  return (
    <div className="space-y-3">
      {uniqueWorkouts.map((work) => (
        <WorkoutItem
          key={`${isSaved ? "saved" : "plan"}-${work.id}`}
          work={work}
          isSaved={isSaved}
          isCompleted={completed.includes(String(work.id))}
          onMarkAsDone={onMarkAsDone}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default WorkoutList;
