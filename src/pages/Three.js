import React, { useState } from "react";

function Three() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      Three
      {number}
      <button onClick={() => setNumber(number + 1)}>点击</button>
    </div>
  );
}

export default Three;
