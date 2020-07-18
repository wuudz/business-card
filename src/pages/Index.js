import React, { Component } from 'react'
import axios from "axios";

import Footer from "../components/Footer.js";

class Index extends Component {
  render() {
    const socials = [
      {
        name: "socials",
        title: "Socials",
        items: [
          {
            name: "github",
            label: "GitHub",
            icon: {
              name: "fa fa-github",
            },
            link: "https://github.com/HaydenWoods",
          },
          {
            name: "twitter",
            label: "Twitter",
            icon: { 
              name: "fa fa-twitter",
            },
            link: "https://twitter.com/HaydenW02234662",
          },
          {
            name: "linkedin",
            label: "LinkedIn",
            icon: {
              name: "fa fa-linkedin",
              size: "30px",
            },
            link: "https://www.linkedin.com/in/hayden-woods-79788a191/",
          },
        ],
      },
      {
        name: "music",
        title: "Music",
        items: [
          {
            name: "spotify",
            label: "Spotify",
            icon: {
              name: "fa fa-spotify",
            },
            link: "https://open.spotify.com/user/hayden-woods01?si=Nk4nwMTETMamdaLaFLD13g",
          },
          {
            name: "lastfm",
            label: "Last.fm",
            icon: { 
              name: "fa fa-lastfm",
            },
            link: "https://www.last.fm/user/hayden-woods01",
          },
        ],
      },
      {
        name: "contact",
        title: "Contact",
        items: [
          {
            name: "mail",
            label: "Message me",
            icon: {
              name: "fa fa-envelope",
              size: "26px",
            },
            link: "mailto:hadywady@gmail.com",
          },
          {
            name: "call",
            label: "Call me",
            icon: {
              name: "fa fa-phone",
              size: "28px",
            },
            link: "tel:0416778433",
          },
        ],
      },
    ];

    return(
      <React.Fragment>
        <div className="container">
          <h1>Hayden Woods</h1>

          <h2>
            <span>Full Stack Engineer</span>
            <a href="https://declan.sh"><span>> declan.sh</span></a>
          </h2>

          <div className="socials">
            { socials && socials.map(column => {
              return(
                <div className={`column ${column.name && column.name}`}>
                  <h3>{column.title && column.title}</h3>
                  { column.items && column.items.map(social => {
                    const icon = social.icon && social.icon;
                    return(
                      <a href={social.link && social.link} target="_blank">
                        <div className={`social ${social.name && social.name}`}>
                          { icon && <i className={icon.name} style={{fontSize: icon.size ? icon.size : ""}}></i> }
                          
                          { social.label &&
                            <div className="tooltip">
                              { social.label }
                            </div>
                          }
                        </div>
                      </a>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>

        <Footer/>
      </React.Fragment>
    );
  }
}

export default Index;