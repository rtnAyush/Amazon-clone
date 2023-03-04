import React, { createContext, useReducer, useContext } from "react";
import reducer, { initialState } from "./reducer";

// Data layer
export const StateContext = createContext();

// Provider
export const StateProvider = (props) => {
    return (
        < StateContext.Provider value={useReducer(reducer, initialState)} >
            {props.children}
        </ StateContext.Provider >
    )
}

// this is used inside the components
export const useStateValue = () => useContext(StateContext);