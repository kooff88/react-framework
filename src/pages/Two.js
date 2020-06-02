import React, { useState } from "react";
import { useSelector } from "react-redux";

function Two() {
  const [number, setNumber] = useState(0);
  const counter = useSelector(state => state.couter)

  console.log("asdcounter=>",counter)
  return (
    <div>
      Two
      {number}
      <button onClick={() => setNumber(number + 1)}>点击</button>
    </div>
  );
}

export default Two;
