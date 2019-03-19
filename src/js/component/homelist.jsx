import React from "react";
import { Link } from "react-router-dom";
import Moment from "react-moment";

import { Context } from "../store/appContext.jsx";

export class HomeList extends React.Component {
	render() {
		return (
			<div className="container w-50">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.events.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										<div className="card">
											<div className="card-header">
												<Moment format="MMM DD">
													{item.meta_keys.day}
												</Moment>
											</div>
											<div className="d-flex p-2">
												<div>{item.meta_keys.time}</div>
												<div className="col-1" />
												<div className="d-block">
													<div>
														<Link
															to={
																"/" +
																item.meta_keys
																	._meetup +
																"/" +
																item.post_title
															}>
															<span>
																{
																	item.post_title
																}
															</span>
														</Link>
													</div>
													<div>
														<Link
															to={
																"/" +
																item.meta_keys
																	._meetup
															}>
															<span>
																{
																	item
																		.meta_keys
																		._meetup
																}
															</span>
														</Link>
													</div>
												</div>
											</div>
										</div>
									</li>
								);
							});
						}}
					</Context.Consumer>
				</ul>
			</div>
		);
	}
}
