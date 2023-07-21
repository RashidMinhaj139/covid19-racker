import React, { useState } from "react";

let State_time = () => {
  let date = new Date().toLocaleTimeString(); //4:23:05 PM
  let [curr_date, updated_date] = useState(date);
  let Update_date = () => {
    let date2 = new Date().toLocaleTimeString();
    updated_date(date2);
  };
  return (
    <div className="states">
      <h2>{date}</h2>
      <button onClick={Update_date}>Get Time</button>
    </div>
  );
};
export default State_time;
