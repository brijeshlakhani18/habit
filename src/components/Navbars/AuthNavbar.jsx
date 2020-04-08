/*!

=========================================================
* Argon Dashboard React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
	UncontrolledCollapse,
	NavbarBrand,
	Navbar,
	Button,
	NavItem,
	NavLink,
	Nav,
	Container,
	Row,
	Col,
} from "reactstrap";
import GlobalContext from "../../context/Global";

class AdminNavbar extends React.Component {
	static contextType = GlobalContext;
	render() {
		return (
			<>
				<Navbar
					className="navbar-top navbar-horizontal navbar-dark"
					expand="md"
				>
					<Container className="px-4">
						<NavbarBrand to="/" tag={Link}>
							<img
								alt="..."
								src={require("../../assets/img/brand/argon-react-white.png")}
							/>
						</NavbarBrand>
						<button className="navbar-toggler" id="navbar-collapse-main">
							<span className="navbar-toggler-icon" />
						</button>
						<UncontrolledCollapse navbar toggler="#navbar-collapse-main">
							<div className="navbar-collapse-header d-md-none">
								<Row>
									<Col className="collapse-brand" xs="6">
										<Link to="/">
											<img
												alt="..."
												src={require("../../assets/img/brand/argon-react.png")}
											/>
										</Link>
									</Col>
									<Col className="collapse-close" xs="6">
										<button
											className="navbar-toggler"
											id="navbar-collapse-main"
										>
											<span />
											<span />
										</button>
									</Col>
								</Row>
							</div>
							<Nav className="ml-auto" navbar>
								<NavItem>
									<NavLink className="nav-link-icon" to="/" tag={Link}>
										<i className="fas fa-home"></i>
										<span className="nav-link-inner--text">Home</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className="nav-link-icon"
										to="/main/user-profile"
										tag={Link}
									>
										<i className="fas fa-user"></i>
										<span className="nav-link-inner--text">Profile</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink
										className="nav-link-icon"
										tag={Button}
										color="link"
										onClick={this.context.logout}
									>
										<i className="fas fa-sign-out-alt"></i>
										<span className="nav-link-inner--text">Logout</span>
									</NavLink>
								</NavItem>
							</Nav>
						</UncontrolledCollapse>
					</Container>
				</Navbar>
			</>
		);
	}
}

export default AdminNavbar;
