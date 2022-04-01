import React from 'react'

const teaTypes = ["green", "black", "herbal"];

const Filter = () =>
  teaTypes.map((tea) => {
    return <button key={tea}>{tea}</button>;
  })

export default Filter
