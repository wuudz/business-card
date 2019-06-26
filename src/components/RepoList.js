import React, { Component } from 'react'
import axios from "axios";

import Repo from "./Repo.js";

import "../styles/index.css";

class RepoList extends Component {
		state = {
	    repos: [],
	    isloading: true,
	  };

	  componentDidMount() {
	    axios.get("https://api.github.com/users/HaydenWoods/repos")
	    .then(response => {
	      const repos = response.data.map(r => {
	        let repo = {
	          id: r.id,
	          name: r.name,
	          full_name: r.full_name,
	          url: r.html_url,
	          clone_url: r.clone_url,
	          homepage_url: r.homepage,
	          created: r.created_at,
	          updated: r.updated_at,  
	          language: r.language,
	          stars_count: r.stargazers_count,
	          forks_count: r.forks_count,
	          watchers_count: r.watchers_count
	        };
	      	return repo
	      });
	      this.setState({ repos, isloading: false });
	    })
	    .catch(error => this.setState({ error }));
	  }

	render() {
		return(
			<div id="repo-list">
				{this.state.repos.map(
		    		repo => <Repo key={repo.id} repo={repo}/>
		    	)}
		    	<div className="clearfix"></div>
			</div>
		);
	}
}

export default RepoList;