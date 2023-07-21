import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
function Card_array() {
  return (
    <div>
      <h1 className="main_head">List of top five series </h1>
      <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}
      />
      <Card
        imgsrc="https://www.the-sun.com/wp-content/uploads/sites/6/2020/08/NINTCHDBPICT000602293658.jpg"
        title="dark"
        snmae="netflix"
        link="https://www.netflix.com/pk/title/80100172"
      />
      <Card
        imgsrc="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
        title="dark"
        snmae="netflix"
        link="https://www.netflix.com/pk/title/80100172"
      />
    </div>
  );
}
export default Card_array;
