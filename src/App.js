import React, { Component } from "react";
// import logo from './logo.svg';
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Teacher from "./containers/Teacher/Teacher";
import NewTeacher from "./containers/NewTeacher/NewTeacher";
import EditTeacher from "./containers/EditTeacher/EditTeacher";

import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Teacher} />
          <Route path="/new-teacher" component={NewTeacher} />
          <Route path="/edit-teacher/:id" component={EditTeacher} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
