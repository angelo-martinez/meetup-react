import React from "react";

import "../../styles/home.css";

export class MeetUpList extends React.Component {
	render() {
		return (
			<div className="container w-50">
				<div className="card">
					<div className="card-header">Date</div>
					<div className="d-flex p-2">
						<div>time</div>
						<div className="col-1" />
						<div>Event info</div>
					</div>
				</div>
			</div>
		);
	}
}
