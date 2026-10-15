"use client";

import React, { createContext, useState } from "react";

export const PlanContext = createContext(null);

const PlanProvider = ({ children }) => {
  const [plans, setPlans] = useState([]);
  const [loaded, setLoaded] = useState([]);

  const sharedData = {
    plans,
    setPlans,
    loaded,
    setLoaded,
  };

  return (
    <PlanContext.Provider value={sharedData}>
      {children}
    </PlanContext.Provider>
  );
};

export default PlanProvider;