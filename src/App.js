import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => (
  <div>
    <h1>Hats Page</h1>
  </div>
);

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/shop/hats' component={HatsPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
