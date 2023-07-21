import React, { useState } from "react";

let State = () => {
  let [curr_value, updated_func] = useState(1);
  let Decrement = () => {
    updated_func(curr_value-1)
  };
  let Increment = () => {
    updated_func(curr_value + 1);
  };
  return (
    <div className="states">
      <h1>{curr_value}</h1>
      <button onClick={Increment}>click++</button><br /><br />
      <button onClick={Decrement}>click--</button>
    </div>
  );
};
export default State;
