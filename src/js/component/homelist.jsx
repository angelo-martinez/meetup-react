import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";
import { Context } from "../store/appContext.jsx";
import { Jumbotron } from "./jumbotron.jsx";

export class HomeList extends React.Component {
	render() {
		return (
			<div>
				<Jumbotron />
				<Context.Consumer>
					{({ store, actions }) => {
						return store.events.map((item, index) => {
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
													{item.meta_keys.time}
												</Moment>
											</p>
											<div className="d-block ml-3">
												<Link
													to={
														"/eventdetail/" + index
													}>
													<h5 className="card-title">
														{item.post_title}
													</h5>
												</Link>
												<Link
													to={
														"/meetuplist/" +
														item.meta_keys._meetup
													}>
													<h6 className="card-subtitle">
														{item.meta_keys._meetup}
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
		);
	}
}
