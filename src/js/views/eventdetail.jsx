import React from "react";

export class EventDetails extends React.Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="col-1 float-right" />
				<div className="float-right border">
					<p>All of the event info goes here</p>
				</div>
				<div className="container w-75">
					<img
						src="http://via.placeholder.com/640x360"
						alt="Smiley face"
						max-height="500"
						max-width="800"
					/>
				</div>
				<div className="eventtdescription container w-75">
					<p className="font-weight-bold"> Details </p>
					<p>
						Lorem ninja ipsum dolor sit amet, consectetuer
						adipiscing elit, sed diam nonummy nibh euismod tincidunt
						ut laoreet dolore magna aliquam erat volutpat.
					</p>
					<p>There are rules for this event:</p>
					<ul>
						<li>Rule one</li>
						<li>Rule two</li>
						<li>Rule three</li>
					</ul>
				</div>
			</div>
		);
	}
}
