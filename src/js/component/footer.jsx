import React, { Component } from "react";

export class Footer extends Component {
	render() {
		return (
			<footer className="footer mt-auto py-3 text-center">
				<p>
					Made with <i className="fa fa-heart text-danger" /> by{" "}
					<a href="https://github.com/angelo-martinez">
						@angelo-martinez
					</a>
				</p>
			</footer>
		);
	}
}
