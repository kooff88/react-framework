import React, { useState } from "react";

function Two() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      Two
      {number}
      <button onClick={() => setNumber(number + 1)}>点击</button>
    </div>
  );
}

export default Two;
