import React, {Component, Fragment} from "react";
import AppMenu from "../components/AppMenu";
import AppContent from "../components/AppContent";

class AppLayout extends Component {
	render() {
		 return (<Fragment>
					<AppMenu/>
					<AppContent/>
				</Fragment>)

	}
}

export default (AppLayout);
