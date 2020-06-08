import React from 'react';
import './App.css';
import Home from './components/Home';
import Teams from './components/Teams';
import Requests from './components/Requests';
import Calendar from './components/Calendar';
import Navigation from './components/Navigation'; 
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/teams' component={Teams}/>
          <Route exact path='/calendar' component={Calendar}/>
          <Route exact path='/request' component={Requests}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  