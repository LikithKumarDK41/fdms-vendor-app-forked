"use client";
import React from "react";

const ArrayDemo = () => {
  let a = [
    { id: 1, name: "harish", age: "27" },
    { id: 2, name: "ramu", age: "27" },
    { id: 3, name: "test", age: "27" },
    { id: 1, name: "sandeep", age: "27" },
  ];
  function findById(array, id) {
    return array.find((item) => item.id === id);
  }
  function filterById(array, id) {
    return array.filter((item) => item.id === id);
  }
  const single = findById(a, 1);
  const all = filterById(a, 1);

  return (
    <>
      {a.map((panel, index) => (
        <>
          <div key={index}>{panel.name}</div>
        </>
      ))}
      <h1>First Occurrence</h1>
      {single ? (
        <div>
          <p>Name: {single.name}</p>
        </div>
      ) : (
        <p>No matching record found.</p>
      )}{" "}
      <h1>All Occurrences</h1>
      {all.length > 0 ? (
        all.map((item, index) => (
          <div key={index}>
            <p>Name: {item.name}</p>
          </div>
        ))
      ) : (
        <p>No matching records found.</p>
      )}
    </>
  );
};

export default ArrayDemo;


//Return an array of all values in a 