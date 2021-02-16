import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Detailes from './Components/details';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/detailes" component={Detailes} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
