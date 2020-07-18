import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Index from "./pages/Index.js"

import "./styles/index.scss";

class App extends Component {
	renderPage = (PageComponent, pageData) => {
		return(
			<div className={`page ${pageData && pageData.name}`}>
				<PageComponent pageData={pageData}/>
			</div>
		)
	}

  render() {
    return (
      <Router className="router">
				<Switch>
					<Route exact path="/" component={() => { return this.renderPage(Index, { name: "index" })}}/>
				</Switch>
			</Router>
    );
  }
}

export default App;
