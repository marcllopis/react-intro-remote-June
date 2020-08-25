import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import MainContent from './components/mainContent/MainContent';

import {studentList} from './data/studentList/StudentList';
import {texts} from './data/texts/texts'

function App() {
  return (
    <div>
      <Navbar />
      <MainContent students={studentList} texts={texts} />
      <Footer />
    </div>
  );
}


export default App;
