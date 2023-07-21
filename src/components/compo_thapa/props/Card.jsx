import React from "react";
export default function Card(props) {
  console.log(props);
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="my pic" />
          <div className="card_info">
            <span className="card_catagory">{props.title}</span>
            <h1 className="card_title">{props.sname}</h1>
            <a href={props.link} className="link">
              <button>Watch</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
