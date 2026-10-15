
"use client";

import { useContext, useState } from "react";
import { PlanContext } from "../context/PlanContext";
import PlanStats from "./components/PlanStats";
import WorkoutList from "./components/WorkoutList";


const MyPlan = () => {
  const { plans, setPlans, loaded, setLoaded } =
    useContext(PlanContext);

  const [completed, setCompleted] = useState([]);

  const markAsDone = (id) => {
    const workoutId = String(id);

    setCompleted((previous) =>
      previous.includes(workoutId)
        ? previous
        : [...previous, workoutId]
    );
  };

  const removeWorkout = (id, isSaved = false) => {
    const workoutId = String(id);

    if (isSaved) {
      setLoaded((previous) =>
        previous.filter(
          (work) => String(work.id) !== workoutId
        )
      );
    } else {
      setPlans((previous) =>
        previous.filter(
          (work) => String(work.id) !== workoutId
        )
      );

      setCompleted((previous) =>
        previous.filter((item) => item !== workoutId)
      );
    }
  };

  return (
    <main className="min-h-screen bg-[#0b0c0f] px-5 py-8 md:px-[70px] md:py-[50px]">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          MY PLAN
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        <PlanStats plans={plans} />
      </div>

      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Today's Plan ${plans?.length ?? 0}`}
          defaultChecked
        />

        <div className="tab-content border-base-300 p-4 sm:p-6">
          <WorkoutList
            workouts={plans}
            completed={completed}
            onMarkAsDone={markAsDone}
            onRemove={removeWorkout}
          />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab"
          aria-label={`Saved ${loaded?.length ?? 0}`}
        />

        <div className="tab-content border-base-300 p-4 sm:p-6">
          <WorkoutList
            workouts={loaded}
            isSaved={true}
            completed={completed}
            onMarkAsDone={markAsDone}
            onRemove={removeWorkout}
          />
        </div>
      </div>
    </main>
  );
};

export default MyPlan;
