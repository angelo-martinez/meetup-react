import React from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext.jsx";

export class HomeList extends React.Component {
	render() {
		return (
			<div className="container w-50">
				<ul className="list-group">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.eventlist.map((item, index) => {
								return (
									<li key={index} className="list-group-item">
										<div className="card">
											<div className="card-header">
												{item.eventDate}
											</div>
											<div className="d-flex p-2">
												<div>{item.eventTime}</div>
												<div className="col-1" />
												<ul className="list-group">
													<li key={item.eventMeetup}>
														<Link
															to={
																item.meetupUrl +
																item.eventUrl
															}>
															<span>
																{item.eventInfo}
															</span>
														</Link>
													</li>
													<li key={item.meetupUrl}>
														<Link
															to={item.meetupUrl}>
															<span>
																{
																	item.eventMeetup
																}
															</span>
														</Link>
													</li>
												</ul>
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
