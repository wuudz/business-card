import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import "../styles/index.css";

class Header extends Component {
  render() {
    const { user } = this.props;

    return(
      <div id="header">
        <div className="restrict">
          <a href={user.url}>
            <div id="left">
              <img id="profile-pic" src={user.avatar_url} alt=""></img>
            </div>
          </a>

          <div id="right">
            <div id="id" className="right-container">
              <a href={user.url}> 
                <div className="top">
                  <h1>{user.name}</h1>
                </div>
              </a>

              <div className="bottom">
                <ul id="subheading">
                  <li className="programmer">
                    <span role="img" aria-label="Headphones">🎧</span> Programmer
                  </li>
                  <li className="designer">
                    <span role="img" aria-label="Marker">🖍</span> Designer
                  </li>
                  <li className="student">
                    <span role="img" aria-label="Student Hat">🎓</span> Student
                  </li>
                </ul>
              </div>
            </div>

            <div id="contact" className="right-container">
              <div className="top">
                <a href="tel:416-778-433">
                  <h2 className="phone"> +61 416 778 433</h2>
                  <FontAwesomeIcon icon={faPhone} className="emoji phone"/>
                  {//<span className="emoji phone" role="img" aria-label="Phone">📞</span>
                  }
                </a>
              </div>
              <div className="bottom">
                <a href="mailto:woodsh2001@gmail.com">
                  <h2 className="email">woodsh2001@gmail.com</h2>
                  <FontAwesomeIcon icon={faEnvelope} className="emoji email"/>
                </a>
              </div>
            </div>
          </div>
        </div>  
      </div>
    );
  }
}

export default Header;