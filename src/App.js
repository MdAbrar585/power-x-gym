import React from 'react';
import './App.scss';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Progres from './Component/Progress/Progres';
import AboutUs from './Component/AboutUs/AboutUs';
import TrainningProg from './Component/TrainningPrograms/TrainningProg';
import Choose from './Component/Choose/Choose';
import Footer from './Component/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Progres></Progres>
      <AboutUs></AboutUs>
      <TrainningProg></TrainningProg>
      <Choose></Choose>
      <Footer></Footer>
    </div>
  );
}

export default App;
