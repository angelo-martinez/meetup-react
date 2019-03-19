import React from "react";
import { HomeList } from "../component/homelist.jsx";

import "../../styles/home.css";

export class Home extends React.Component {
	render() {
		return (
			<div>
				<HomeList />
			</div>
		);
	}
}
