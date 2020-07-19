import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import Index from "./pages/Index.js"
import Config from './configs/active.json'

import "./styles/index.scss";

class App extends Component {
	renderPage = (PageComponent, routeData) => {
		const pageData = Config.pageData;

		switch(pageData.theme) {
			case "light":
				document.body.style.background = "#fcfcfc";
				break;
			case "dark":
				document.body.style.background = "#0f0f0f";
				break;
			default:
				document.body.style.background = "#fcfcfc";
				break;
		}

		return(
			<div className={`page ${routeData && routeData.name} ${pageData.theme ? pageData.theme : "light"}`}>
				<Helmet>
          <title>{`${pageData.firstName} ${pageData.lastName}`}</title>
        </Helmet>
				<PageComponent pageData={pageData} routeData={routeData}/>
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
