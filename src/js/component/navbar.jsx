import React from "react";
import { Link } from "react-router-dom";
import LogIn from "./login.jsx";

export class Navbar extends React.Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark mb-0">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				<div className="ml-auto">
					<button onClick={LogIn}>Log In</button>
				</div>
			</nav>
		);
	}
}
