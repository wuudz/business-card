import React, { Component } from 'react'
import axios from "axios";

import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

import "../styles/index.css";

class Main extends Component {
  state = {
    user: {},
    isLoading: true,
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/HaydenWoods")
    .then(r => {
      let user = {
        id: r.data.id,
        name: r.data.name,
        username: r.data.login,
        url: r.data.html_url,
        avatar_url: r.data.avatar_url,
        following: r.data.following,
        followers: r.data.followers
      };
      this.setState({ user, isLoading: false });
    })
    .catch(error => this.setState({ error }));
  }

  render() {
    const { isLoading, user } = this.state;

    return(
      <div id="container">
        { !isLoading ?
          <div id="main">
            <Header user={user}/>
            <Content githubURL={user.url}/>
            <Footer/>
          </div>
          :
          <div id="loading">
            <div className="spinner">
              <div className="loader"></div>
            </div>
          </div>
        }    
      </div>
    );
  }
}

export default Main;