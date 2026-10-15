
export const getUniqueWorkouts = (workouts) => {
  if (!Array.isArray(workouts)) {
    return [];
  }

  return workouts.filter(
    (work, index, array) =>
      work &&
      array.findIndex(
        (item) =>
          item &&
          String(item.id) === String(work.id)
      ) === index
  );
};

export const getTotalMinutes = (workouts) => {
  return getUniqueWorkouts(workouts).reduce(
    (total, work) =>
      total + Number(work.duration || 0),
    0
  );
};

export const getTotalCalories = (workouts) => {
  return getUniqueWorkouts(workouts).reduce(
    (total, work) =>
      total + Number(work.caloriesBurned || 0),
    0
  );
};
