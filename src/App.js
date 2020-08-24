import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Student from './components/student/Student';


let students = [
  {
    studentName: 'Sawi',
    studentCountry: 'Thailand',
    studentPicture: 'https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg'
  },
  {
    studentName: 'Roberto',
    studentCountry: 'Romania',
    studentPicture: 'https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg'
  },
  {
    studentName: 'Pablo',
    studentCountry: 'Argentina',
    studentPicture: 'https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg'
  },
  {
    studentName: 'Carlos',
    studentCountry: 'Portugal',
    studentPicture: 'https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg'
  },
]




function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        {
          students.map((student,index) =>
            <Student
              studentName={student.studentName}
              studentCountry={student.studentCountry}
              studentPicture={student.studentPicture}
              key={index}
            />
          )
        }
      </div>
      <Footer />
    </div>
  );
}


export default App;
