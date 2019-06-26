import React, { Component } from 'react'

import RepoList from "./RepoList.js";

import GitHubDark from "../images/githubDark.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import "../styles/index.css";

class Content extends Component {
  render() {
    return(
      <div id="content"> 
        { //  _____  ______ _____   ____         _____  ____   _____ _____          _      
          // |  __ \|  ____|  __ \ / __ \       / ____|/ __ \ / ____|_   _|   /\   | |     
          // | |__) | |__  | |__) | |  | |_____| (___ | |  | | |      | |    /  \  | |     
          // |  _  /|  __| |  ___/| |  | |______\___ \| |  | | |      | |   / /\ \ | |     
          // | | \ \| |____| |    | |__| |      ____) | |__| | |____ _| |_ / ____ \| |____ 
          // |_|  \_\______|_|     \____/      |_____/ \____/ \_____|_____/_/    \_\______| 
        }                                                                             
        <div className="content-section repo-social">
          <div className="restrict">
            {/* REPOSITORIES */}
            <div id="left">
              <h1 className="title">Repositories</h1>

              <RepoList/>
            </div>

            {/* SOCIALS */}
            <div id="right">
              <h1 className="title">Socials</h1>

              <div id="social-list">
                <a href={this.props.githubURL}>
                  <div className="social-item">
                    <div className="container">
                      <div className="left">
                        <div className="logo-container">
                          <img src={GitHubDark} className="logo" alt=""/>
                        </div>
                      </div>
                      <div className="right">
                        <h1>Github</h1>
                        <p>This is where I will upload any projects that I am currently working on. All these projects are viewable by the public and can be expanded upon by others.</p>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </a>

                <a href="google.com">
                  <div className="social-item">
                    <div className="container">
                      <div className="left">
                        <div className="logo-container">
                          <img src={GitHubDark} className="logo" alt=""/>
                        </div>
                      </div>
                      <div className="right">
                        <h1>Other Stuff</h1>
                        <p>This is where I will upload any projects that I am currently working on. All these projects are viewable by the public and can be expanded upon by others.</p>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                  </div>
                </a>

                <div className="clearfix"></div>
              </div>
            </div>
          </div>
        </div>

        { //  _____  _____  _____ _____ _____ _   _  _____ 
          // |  __ \|  __ \|_   _/ ____|_   _| \ | |/ ____|
          // | |__) | |__) | | || |      | | |  \| | |  __ 
          // |  ___/|  _  /  | || |      | | | . ` | | |_ |
          // | |    | | \ \ _| || |____ _| |_| |\  | |__| |
          // |_|    |_|  \_\_____\_____|_____|_| \_|\_____|                                  
        }   
        <div className="content-section pricing">
          <div className="restrict">
            <h1 className="title">Need a Website?</h1>

            {/* PRICING OPTIONS*/}
            <div id="options-container">
              <div className="option">
                <h1>Simple Single Page</h1>
                <ul>
                  <li>Singular Page</li>
                  <li>Simple Design</li>
                  <li>Some Interactive Content</li>
                </ul>
                <div className="button">
                  <p>enquire</p>
                </div>
              </div>
              
              <div className="option">
                <h1>Simple Multi Page</h1>
                <ul>
                  <li>Multiple Pages</li>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                </ul>
                <div className="button">
                  <p>enquire</p>
                </div>
              </div>

              <div className="option">
                <h1>Complex Single Page</h1>
                <ul>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                </ul>
                <div className="button">
                  <p>enquire</p>
                </div>
              </div>

              <div className="option">
                <h1>Complex Multi Page</h1>
                <ul>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                  <li>Singular Page</li>
                </ul>
                <div className="button">
                  <p>enquire</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {   
          //   _____ ____  _   _ _______       _____ _______ 
          //  / ____/ __ \| \ | |__   __|/\   / ____|__   __|
          // | |   | |  | |  \| |  | |  /  \ | |       | |   
          // | |   | |  | | . ` |  | | / /\ \| |       | |   
          // | |___| |__| | |\  |  | |/ ____ \ |____   | |   
          //  \_____\____/|_| \_|  |_/_/    \_\_____|  |_|                                                          
        }   
        <div className="content-section contact">
          <div className="restrict">
            <h1 className="title">Contact Me For More Information</h1>

            <div id="left">
              <h2>For any further enquires or requests you can email me here.</h2>
              <p>Ensure to include all details about the request for example: </p>
              <ul>
                <li>Full Name</li>
                <li>Design/Details for Website</li>
                <li>Pricing</li>
                <li>Contact Info</li>
              </ul>

              <p>For contact outside of the website, please use the contact info below: </p>
              <ul>
                <li>woodsh2001@gmail.com</li>
                <li>+61 416 778 433</li>
              </ul>
            </div>
            <div id="right">
              <form> 
                <input type="text" name="fullname" placeholder="Full Name..."></input>
                <input type="text" name="email" placeholder="Email Address..."></input>
                <input type="text" name="subject" placeholder="Subject..."></input>
                <textarea type="text" name="message" placeholder="Message..." rows="4"></textarea>
                <button>
                  <FontAwesomeIcon className="icon" icon={faPaperPlane}/>
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Content;