"use client"
import React, { useContext } from 'react';
import { PlanContext } from '../context/PlanContext';

const MyPlan = () => {
    const {plans} =useContext(PlanContext);
    console.log(plans,"plan");

    return (
        <div>
            plan
        </div>
    );
};

export default MyPlan;