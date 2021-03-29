import React, { Component } from "react";
import {
	Nav,
	Navbar,
	NavbarBrand,
	NavbarToggler,
	Collapse,
	NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Heading extends Component {
	constructor(props) {
		super(props);

		this.toggleNav = this.toggleNav.bind(this);
		this.state = {
			isNavOpen: false,
			isModalOpen: false,
		};

		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	//UNCONTROLLED FORM

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen,
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen,
		});
	}

	handleLogin(event) {
		alert(
			`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`
		);
		this.toggleModal();
		event.preventDefault();
	}

	render() {
		return (
			<div className="container">
				<Navbar light expand="lg" className="row align-items-center">
					<div className="col">
						<div className="container mt-5 mb-2">
							<NavbarBrand className="mr-auto" href="/">
								Haley Ellis
							</NavbarBrand>
							<NavbarToggler onClick={this.toggleNav} />
							<Collapse
								isOpen={this.state.isNavOpen}
								navbar
								className="justify-content-end"
							>
								<Nav navbar className="navbar-right">
									<NavItem>
										<NavLink className="nav-link" to="/creatures">
											Creatures
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/nature">
											Nature
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/about">
											About
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/commissions">
											Commissions
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/contact">
											Contact
										</NavLink>
									</NavItem>
									<NavItem>
										<a
											className="nav-link"
											href="https://www.instagram.com/hellisillustration/"
										>
											<i className="fa fa-instagram fa-2x" />
										</a>
									</NavItem>
								</Nav>
							</Collapse>
						</div>
					</div>
				</Navbar>
			</div>
		);
	}
}

export default Heading;