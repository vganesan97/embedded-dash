import React from 'react';
import './App.css';
import Home from './components/Home';
import Teams from './components/Teams';
import Requests from './components/Requests';
import Calendar from './components/Calendar';
import Navigation from './components/Navigation'; 
import Inbox from './components/Inbox';
import Notifications from './components/Notifications';
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
          <Route exact path='/inbox' component={Inbox}/>
          <Route exact path='/notifications' component={Notifications}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
  