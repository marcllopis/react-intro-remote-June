import React from 'react';
import './MainContentStyle.css';

import Student from '../student/Student';


const MainContent = props => {
  console.log(props)
  return (
    <div className="content">
      <div className='left-side'>
        {
          props.students.map((student, index) =>
            <Student
              studentName={student.studentName}
              studentCountry={student.studentCountry}
              studentPicture={student.studentPicture}
              key={index}
            />
          )
        }
      </div>
      <div className='right-side'>
        <h2>{props.texts.title}</h2>
        <p>{props.texts.paragraph}</p>
      </div>

    </div>
  )
};

export default MainContent;