import React from "react";

export class Jumbotron extends React.Component {
	render() {
		return (
			<div className="jumbotron bg-dark jumbotron-fluid text-white text-center pb-0 pt-2">
				<h2>The Meetup Clone</h2>
				<h4 className="lead mb-4">
					Created by{" "}
					<a href="https://github.com/angelo-martinez">
						@angelo-martinez
					</a>{" "}
					in 4GeeksAcademy
				</h4>
				<p className="small pb-3">
					Using: ReactJS, Bootstrap, Fontawsome, Moment, and
					React-router
				</p>
			</div>
		);
	}
}
