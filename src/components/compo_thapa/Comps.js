function Comps() {
  let currdate = new Date();
  currdate = currdate.getHours();
  let greeting = "";
  if (currdate >= 1 && currdate <= 12) {
    greeting = "Good Morning";
  } else if (currdate >= 12 && currdate <= 20) {
    greeting = "Good AfterNoon";
  } else if (currdate >= 20 && currdate <= 24) {
    greeting = "Good Night";
  }

  return (
    <>
      <h1 className="head">
        Hello sir ,<span className="greet">{greeting}</span>{" "}
      </h1>
    </>
  );
}
export default Comps;
