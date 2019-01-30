import React, { Component } from 'react';
// import logo from './logo.svg';
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Teacher from './Teacher/Teacher'
import NewTeacher from './NewTeacher/NewTeacher'

import {Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Teacher}/>
          <Route path="/new-teacher" component={NewTeacher}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
