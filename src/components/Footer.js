import React, { Component } from 'react'
import axios from "axios";

class Footer extends Component {
  render() {
    return(
      <div className="footer">
        <p>© Hayden Woods - {new Date().getFullYear()}</p>
      </div>
    );
  }
}

export default Footer;