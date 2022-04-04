import React, { useState } from 'react'

// filters are: less than 3 minutes green, 3-5 minutes black, over 5 minutes herbal
// const teaTypes = ["green", "black", "herbal"];

function greenTea({songs}) {
  console.log("green tea");
  debugger;
  return songs.filter(song => song.duration < 180)
}

function blackTea({songs}) {
  console.log("blak tea");
}

function herbalTea({songs}) {
  console.log("herbal tea");
}

function removeFiter() {
  console.log("reset data");
}

const Filter = ({songs}) => {
  return(
    <div>
      <button onClick={() => greenTea({songs})}>green tea</button>
      <button onClick={() => blackTea({songs})}>black tea</button>
      <button onClick={() => herbalTea({songs})}>herbal tea</button>
      <button onClick={() => removeFiter()}>reset</button>
    </div>
  )}

export default Filter
