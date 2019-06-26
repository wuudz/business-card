import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Main from "./components/Main.js"

import "./styles/index.css";

class App extends Component {
    render() {
        return (
            <Router className="router">
				<div className="router-container">
					<Switch>
						<Route exact path="/" component={ Main }/>
					</Switch>
				</div>
			</Router>
        );
    }
}

export default App;
