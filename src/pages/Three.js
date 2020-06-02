import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

function CounterComponent  () {
  const counter = useSelector(state => state.addName)
  console.log("asdcounter=>",counter)

  const dispatch = useDispatch();
  

  return (
    <div>
      <div>{ counter }</div>
      {/* <button onClick={ () => dispatch({ type:"addName" }) }>click Me</button> */}
    </div>
  )
  
}

export default CounterComponent