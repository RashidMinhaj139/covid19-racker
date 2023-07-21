import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
function Prop_Map(val) {
  console.log(val);
  return (
    <ul>
      <li>
        <Card
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      </li>
    </ul>
  );
}
export default Prop_Map;

// to be rendred in app.js
{
  /* <>
<h1>mapping</h1>
{Sdata.map(Prop_Map)}
</> */
}
