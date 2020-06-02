import React from 'react';
import './App.scss';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Progres from './Component/Progress/Progres';
import AboutUs from './Component/AboutUs/AboutUs';
import TrainningProg from './Component/TrainningPrograms/TrainningProg';
import Choose from './Component/Choose/Choose';
import Footer from './Component/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Classes from './Component/Classes/Classes';
import ClassesOption from './Component/ClassesOption/ClassesOption';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Navbar></Navbar>
            <Home></Home>
            <Progres></Progres>
            <AboutUs></AboutUs>
            <TrainningProg></TrainningProg>
            <Choose></Choose>
            <Footer></Footer>
          </Route>
          <Route path="/classes">
            <Navbar></Navbar>
            <Classes></Classes>
            <ClassesOption></ClassesOption>
            <Footer></Footer>
          </Route>


          <Route path="/">
            <Navbar></Navbar>
            <Home></Home>
            <Progres></Progres>
            <AboutUs></AboutUs>
            <TrainningProg></TrainningProg>
            <Choose></Choose>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
