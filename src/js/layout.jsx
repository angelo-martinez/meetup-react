import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Demo } from "./views/demo.jsx";
import { EventDetails } from "./views/eventdetail.jsx";
import { MeetUpList } from "./views/meetupdetail.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
import { Jumbotron } from "./component/jumbotron.jsx";

//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-column h-100">
				<BrowserRouter>
					<ScrollToTop>
						<Navbar />
						<Jumbotron />
						<Switch>
							<Route exact path="/" component={Home} />
							<Route
								path="/eventdetail"
								component={EventDetails}
							/>
							<Route path="/meetuplist" component={MeetUpList} />
							<Route path="/demo" component={Demo} />
							<Route render={() => <h1>Not found!</h1>} />
						</Switch>
						<Footer />
					</ScrollToTop>
				</BrowserRouter>
			</div>
		);
	}
}

export default Store(Layout);
