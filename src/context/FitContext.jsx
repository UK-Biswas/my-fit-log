'use client'
import React, { createContext, useState } from 'react';

export const FitContext = createContext(null);



const FitProvider = ({ children }) => {

    const [plans, setPlans] = useState([]);
    const [savedPlan, setSavedPlan] = useState([]);
    const fitData = { plans, setPlans, savedPlan, setSavedPlan }

    return (
        <FitContext.Provider value={fitData}>
            {
                children
            }
        </FitContext.Provider>
    );
};

export default FitProvider;