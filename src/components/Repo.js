import React, { Component } from 'react';
import moment from "moment";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import "../styles/index.css";

class Repo extends Component {
	render() {
		const { repo } = this.props;  

		return(
			<div className="repo">
				<a href={repo.url}>
					<div className="top">
						<p className="name">{repo.name}</p>
						<div className="icons">
							<div className="icon-container">
								<FontAwesomeIcon icon={faCodeBranch} className="icon"/>
								<p>{repo.forks_count}</p>
							</div>
							<div className="icon-container">
								<FontAwesomeIcon icon={faStar} className="icon"/>
								<p>{repo.stars_count}</p>
							</div>	
							<div className="icon-container">
								<FontAwesomeIcon icon={faEye} className="icon"/>
								<p>{repo.watchers_count}</p>
							</div>		
						</div>
					</div>

					<div className="bottom">
						<ul>
							{ repo.created ?
								<li>Created: {moment.utc(repo.created).format('DD/MM/YYYY')}</li>
								:
								null
							}
							{ repo.updated ?
								<li>Updated: {moment.utc(repo.updated).format('DD/MM/YYYY h:mma')}</li>
								:
								null
							}
							{ repo.language ?
								<li>Language: {repo.language}</li>
								:
								null
							}
						</ul>
					</div>
				</a>
			</div>
		);
	}
}

export default Repo;