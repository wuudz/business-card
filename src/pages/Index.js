import React, { Component } from 'react'
import axios from "axios";

import Header from "../components/Header.js";
import Content from "../components/Content.js";
import Footer from "../components/Footer.js";

class Index extends Component {
  render() {
    return(
      <div id="container">
        <div id="main">
          <Header/>
          <Content/>
          <Footer/>
        </div>  
      </div>
    );
  }
}

export default Index;