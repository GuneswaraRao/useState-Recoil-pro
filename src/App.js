import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Add from "./components/java/Operation";
import ComponentIncrement from './components/java/ComponentIncrement';
import ComponentValue from "./components/java/ComponentValue";

class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     name: "React",
  //     isUserAuthenticated: true
  //   };
  // }

  render() {
    return (
      <div>
        <Router>
          <div>
            <Add />
            <hr />
            <Switch>

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
export default App;