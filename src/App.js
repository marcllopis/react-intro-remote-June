import React from 'react';
import './App.css';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <div className="student-container">
          <h1>Roberto</h1>
          <h2>From Romania</h2>
          <img
            alt="roberto"
            className="img-student"
            src="https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg" />
        </div>
        <div className="student-container">
          <h1>Carlos</h1>
          <h2>From Portugal</h2>
          <img
            alt="roberto"
            className="img-student"
            src="https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg" />
        </div>
        <div className="student-container">
          <h1>Pablo</h1>
          <h2>From Argentina</h2>
          <img
            alt="roberto"
            className="img-student"
            src="https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg" />
        </div>
        <div className="student-container">
          <h1>Adam</h1>
          <h2>From Romania</h2>
          <img
            alt="roberto"
            className="img-student"
            src="https://i.ytimg.com/vi/OOFGdRmN70k/maxresdefault.jpg" />
        </div>
      </div>
      <Footer />
    </div>
  );
}


export default App;
