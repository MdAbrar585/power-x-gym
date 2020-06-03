import React, { useEffect } from 'react';
import './App.scss';
import ReactGa from 'react-ga';
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
import AdvanceHeader from './Component/AdvanceHeader/AdvanceHeader';
import AdvanceBody from './Component/AdvanceBody/AdvanceBody';
import PricingHeader from './Component/PricingHeader/PricingHeader';
import PricingBody from './Component/PricingBody/PricingBody';
import MemberShipHeader from './Component/MemberShipHeader/MemberShipHeader';
import MemberShipBody from './Component/MemberShipBody/MemberShipBody';
import Payment from './Component/Payment/Payment';

function App() {
  useEffect(() => {
    ReactGa.initialize('UA-168214942-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, [])
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
          <Route path="/advance">
            <Navbar></Navbar>
            <AdvanceHeader></AdvanceHeader>
            <AdvanceBody></AdvanceBody>
            <Footer></Footer>
          </Route>

          <Route path="/pricing">
            <Navbar></Navbar>
            <PricingHeader></PricingHeader>
            <PricingBody></PricingBody>
            <Footer></Footer>
          </Route>
          <Route path="/memberShip">
            <Navbar></Navbar>
            <MemberShipHeader></MemberShipHeader>
            <MemberShipBody></MemberShipBody>
            <Footer></Footer>
          </Route>

          <Route path="/payment">
            <Navbar></Navbar>
            <MemberShipHeader></MemberShipHeader>
            <Payment></Payment>
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
