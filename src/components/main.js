import React, { Component } from "react";
import Heading from './heading';
import CreaturesPortfolio from "./creaturesPortfolio";
import NaturePortfolio from "./naturePortfolio";
import About from "./aboutPage";
import Contact from "./contactPage";
import Commissions from "./commissionsPage";
import HomePage from './homePage';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { actions } from "react-redux-form";

const mapStateToProps = state => {
	return {
		ART: state.ART,
	}
};

const mapDispatchToProps = {
	resetFeedbackForm: () => (actions.reset("feedbackForm")),
};

class Main extends Component {

	render() {
		return (
			<div>
				<Heading />
				<Switch>
					<Route
						exact
						path="/"
						render={() => <HomePage ART={this.props.ART} />}
					/>
					<Route
						path="/creatures"
						render={() => <CreaturesPortfolio ART={this.props.ART} />}
					/>
					<Route
						path="/nature"
						render={() => <NaturePortfolio ART={this.props.ART} />}
					/>
					<Route path="/about" render={() => <About ART={this.props.ART} />} />
					<Route
						path="/commissions"
						render={() => <Commissions ART={this.props.ART} />}
					/>
					<Route
						path="/contact"
						render={() => (
							<Contact
								ART={this.props.ART}
								resetFeedbackForm={this.props.resetFeedbackForm}
							/>
						)}
					/>
					<Redirect to="/" />
				</Switch>
				<div className="footer mt-5 mb-3">
					<i className="fa fa-copyright" /> Haley Ellis 2021. All rights
					reserved.
				</div>
			</div>
		);
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));