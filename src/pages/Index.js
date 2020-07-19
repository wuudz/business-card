import React, { Component } from 'react'

import Footer from "../components/Footer.js";

class Index extends Component {
  render() {
    let {
      pageData
    } = this.props;

    return(
      <React.Fragment>
        <div className="container">
          <h1>{`${pageData.firstName} ${pageData.lastName}`}</h1>

          <h2>
            { pageData.titles && pageData.titles.map(title => {
              let content = (
                <span>{title.text && title.text}</span>
              )
              if (title.link) {
                content = (
                  <a href={title.link && title.link}>{content}</a>
                )
              }
              return content
            })}    
          </h2>

          <div className="socials">
            { pageData.socials && pageData.socials.map(column => {
              return(
                <div className={`column ${column.name && column.name}`}>
                  <h3>{column.title && column.title}</h3>
                  { column.items && column.items.map(social => {
                    const icon = social.icon && social.icon;
                    return(
                      <a href={social.link && social.link} target="_blank" rel="noopener noreferrer">
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

        <Footer {...pageData}/>
      </React.Fragment>
    );
  }
}

export default Index;