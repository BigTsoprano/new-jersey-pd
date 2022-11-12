// setup data layer
// need to track basket
 
import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//Build a provider

export const StateProvider = ({ reducer, initialState, children }) => (

<StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
</StateContext.Provider>


);

// how we use in component
export const useStateValue = () => useContext(StateContext); 
