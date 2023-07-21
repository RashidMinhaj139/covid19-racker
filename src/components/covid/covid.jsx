import React, { useState } from "react";
import "../covid/covid.css";
const Covid = () => {
  const [data, setdata] = useState([]);
  async function getapidata() {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const apidata = await res.json();
      console.log(apidata.statewise[0]);
      console.log("recovered cases=", apidata.statewise[0].recovered);
      console.log("confirmed cases=", apidata.statewise[0].confirmed);
      console.log("deaths=", apidata.statewise[1].deaths);
      console.log("active cases=", apidata.statewise[0].active);
      console.log("updated cases=", apidata.statewise[0].lastupdatedtime);

      setdata(apidata.statewise[0]);
    } catch (error) {
      console.log(error);
    }
  }
  getapidata();

  return (
    <>
      <h1 className="head1">Pakistan</h1>
      <h1 className="head1">Covid information</h1>
      <div className="main">
        <div className="fir-row">
          <div className="first-country">
            <h1>PAKISTAN</h1>
          </div>
          <div className="first">
            <span>Total </span> <h1>RECOVERED</h1>
            <p>{data.recovered}</p>
          </div>
          <div className="first">
            <span>Total </span> <h1>CONFIRMED</h1>
            <p>{data.active}</p>
          </div>
        </div>
        <div className="sec-row">
          <div className="first">
            <span>Total </span> <h1>DEATHS</h1>
            <p>{data.deaths}</p>
          </div>
          <div className="first">
            <span>Total </span> <h1>ACTIVE</h1>
            <p>{data.active}</p>
          </div>
          <div className="first">
            <span>Total </span> <h1>UPDATED</h1>
            <p>{data.lastupdatedtime}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Covid;
