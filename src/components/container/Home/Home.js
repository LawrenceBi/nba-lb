import React, { Component } from "react";

const coverUrl = require('../../../assets/images/nba_cover.jpg');

class Home extends Component {

	render() {
		return (
			<div>
				<img className="img-fluid" src={coverUrl}/>
			</div>
		);
	}

}

export default Home;