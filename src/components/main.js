import React, { Component } from "react";
import Heading from './heading';
import CreaturesPortfolio from "./creaturesPortfolio";
import NaturePortfolio from "./naturePortfolio";
import About from "./aboutPage";
import Contact from "./contactPage";
import Commissions from "./commissionsPage";
import HomePage from './homePage';
import { Switch, Route, Redirect} from "react-router-dom";

class Main extends Component {

	render() {
		return (
			<div>
				<Heading />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/creatures" component={CreaturesPortfolio} />
					<Route path="/nature" component={NaturePortfolio} />
					<Route path="/about" component={About} />
					<Route path="/commissions" component={Commissions} />
					<Route path="/contact" component={Contact} />
					<Redirect to="/" />
				</Switch>
				<div className="footer mt-5 mb-3">
					<i className="fa fa-copyright" /> Haley Ellis 2021. All rights reserved.
				</div>
			</div>
		);
	}
}

export default Main;