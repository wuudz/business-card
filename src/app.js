import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Index from "./pages/Index.js"

import "./styles/index.scss";

class App extends Component {
  render() {
    return (
      <Router className="router">
				<Switch>
					<Route exact path="/" component={ Index }/>
				</Switch>
			</Router>
    );
  }
}

export default App;
