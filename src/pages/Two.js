import React, { useState,useReducer } from "react";
import { useSelector } from "react-redux";
import { reducer } from "./utils";

function Two() {
  const [number, setNumber] = useState(0);
  const counter = useSelector(state => state.couter)
  const [state, dispatch ] = useReducer(reducer, {num:1});
  const { num } = state;

  console.log("asdcounter=>",counter)
  return (
    <div>
      Two
      {number}
      <button onClick={() => setNumber(number + 1)}>点击</button>

      NUMBER: { num }
      <button onClick={ () => dispatch({ type:"increment" }) }>++++</button>
      <button onClick={ () => dispatch({ type:"decrement" }) }>----</button>
    </div>
  );
}

export default Two;
