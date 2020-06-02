import React, { useState,useReducer } from "react";

import { useSelector, useDispatch } from "react-redux";

import { reducer } from "./utils";

const initialState = { num:0 };


function CounterComponent  () {
  const [state, dispatch ] = useReducer(reducer, initialState);
  
  const { num } = state;
  const counter = useSelector(state => state.addName)
  console.log("asdcounter=>",counter)

  // const dispatch = useDispatch();
  

  return (
    <div>
      <div>{ counter }</div>
      <button onClick={ () => dispatch({ type:"addName" }) }>click Me</button>


      NUMBER: { num }
      <button onClick={ () => dispatch({ type:"increment" }) }>++++</button>
      <button onClick={ () => dispatch({ type:"decrement" }) }>----</button>
    </div>
  )
  
}

export default CounterComponent