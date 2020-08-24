import React from 'react';


function Student(props) {
  return (
    <div className="student-container">
      <h1>{props.studentName}</h1>
      <h2>From: {props.studentCountry}</h2>
      <img
        alt={props.studentName}
        className="img-student"
        src={props.studentPicture} />
        <br />
        <br />
      <button>Click to know me!</button>
    </div>
  )
}


export default Student;