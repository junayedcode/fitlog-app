"use client"
import React, { createContext, useState } from 'react';


const PlanContext = createContext({})

const PlanProvider = ({children }) => {
       const [plans, setPlans] = useState([]);
       const [loaded, setLoaded] = useState([]);

       const sheardData ={
        plans,
        setPlans,
        loaded, 
        setLoaded
       }

    return <PlanContext.Provider value={sheardData}>
        {children }
    </PlanContext.Provider>
       
    
};

export default PlanProvider;