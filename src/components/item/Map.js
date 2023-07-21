import React from "react";

export default function Map() {
  const arr = [
    { name: "rashid", email: "abc@gmail.com", phone: 1234 },
    { name: "rashid", email: "abc@gmail.com", phone: 1234 },
    { name: "rashid", email: "abc@gmail.com", phone: 1234 },
  ];
  arr.map((data) => {});
  return (
    <div>
      <h1>Hello word</h1>
      <table border="1">
        <tr>
          <td>name</td>
          <td>email</td>
          <td>phone</td>
        </tr>
        {arr.map((data) => {
          <tr>
            <td>{data.name}</td>
            <td>{data.email}</td>
          </tr>;
        })}
      </table>
    </div>
  );
}
