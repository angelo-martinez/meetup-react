import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import "../../styles/home.css";

export class MeetUpList extends React.Component {
	render() {
		return (
			<div>
				<div>
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div className="jumbotron jumbotron-fluid text-white bg-dark">
									<div className="container">
										<div className="d-inline-flex justify-content-between">
											<div className="mr-4">
												<img src="https://via.placeholder.com/400x300.png" />
											</div>
											<div className="p-2">
												<h1>
													{actions.findMeetUp(
														this.props.match.params
															.theid
													)}
												</h1>
												<p className="text-secondary mb-0">
													<u>Location</u>
												</p>
												<p className="lead">
													Miami, FL
												</p>
											</div>
										</div>
									</div>
								</div>
							);
						}}
					</Context.Consumer>
				</div>
				<div>
					<Context.Consumer>
						{({ store, actions }) => {
							return actions
								.meetupEventsList(this.props.match.params.theid)
								.map((item, index) => {
									return (
										<div
											className="d-flex flex-row justify-content-center"
											key={index}>
											<div
												className="card m-3"
												style={{ width: "30rem" }}>
												<div className="card-header">
													<Moment format="MMM Do">
														{item.meta_keys.day}
													</Moment>
												</div>
												<div className="card-body d-inline-flex justify-content-start">
													<p className="card-text mr-3">
														<Moment
															format="LT"
															parse="HH:mm:ss">
															{
																item.meta_keys
																	.time
															}
														</Moment>
													</p>
													<div className="d-block ml-3">
														<Link
															to={
																"/eventdetail/" +
																index
															}>
															<h5 className="card-title">
																{
																	item.post_title
																}
															</h5>
														</Link>
														<Link
															to={
																"/meetuplist/" +
																index
															}>
															<h6 className="card-subtitle">
																Meetup:{" "}{
																	item
																		.meta_keys
																		._meetup
																}
															</h6>
														</Link>
													</div>
												</div>
											</div>
										</div>
									);
								});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}

MeetUpList.propTypes = {
	match: PropTypes.object
};

/* 
{ store.meetups[ this.props.match .params .theid ] .post_title }
*/
