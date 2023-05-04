import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/banner';
import Rowpost from './components/Rowpost/card'


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Banner/>
    <Rowpost/>
    
   
 </div>
  );
}

export default App;
