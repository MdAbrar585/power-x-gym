import React from 'react';
import './App.scss';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import Progres from './Component/Progress/Progres';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>
      <Progres></Progres>
    </div>
  );
}

export default App;
