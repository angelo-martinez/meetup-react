import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

import Moment from "react-moment";

export class EventDetails extends React.Component {
	render() {
		return (
			<div>
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<div>
								<div className="jumbotron jumbotron-fluid text-white bg-dark">
									<div className="container">
										<div className="row">
											<div className="col-9">
												<p className="lead">
													<Moment format="MMM Do">
														{
															store.events[
																this.props.match
																	.params
																	.theid
															].meta_keys.day
														}
													</Moment>
												</p>
												<h1 className="display-4">
													{
														store.events[
															this.props.match
																.params.theid
														].post_title
													}
												</h1>
												<p className="lead">
													Meetup{" "}
													{
														store.events[
															this.props.match
																.params.theid
														].meta_keys._meetup
													}
												</p>
											</div>
											<div className="w-25 h-25">
												<div
													className="container bg-secondary text-center"
													style={{
														height: "8rem",
														width: "12rem"
													}}>
													<h5>People Going</h5>
													<button
														type="button"
														className="btn btn-primary btn-sm">
														Log in to RSVP
													</button>
													<div className="teext-center">
														<i className="fab fa-twitter fa-sm" />{" "}
														&nbsp;
														<i className="fab fa-facebook fa-sm" />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="container">
									<div className="row">
										<div className="col">
											<h2 className="display-6">
												Details
											</h2>

											<hr className="my-4" />
										</div>
									</div>
									<div className="row">
										<div className="col-10">
											<p>
												{
													store.events[
														this.props.match.params
															.theid
													].post_content
												}
											</p>
										</div>
										<div className="col-2">
											<div className="shadow p-2">
												<i className="fa far fa-clock" />
												<Moment format="MMM Do">
													{
														store.events[
															this.props.match
																.params.theid
														].meta_keys.day
													}
												</Moment>
												<br />
												<Moment
													format="LT"
													parse="HH:mm:ss">
													{
														store.events[
															this.props.match
																.params.theid
														].meta_keys.time
													}
												</Moment>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					}}
				</Context.Consumer>
			</div>
		);
	}
}

EventDetails.propTypes = {
	match: PropTypes.object
};
