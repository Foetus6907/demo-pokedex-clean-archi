import React, {Component, Fragment} from "react";

class AppMenu extends Component {
	render() {
		return  <Fragment>
					<nav className="navbar navbar-expand-lg navbar-light bg-light">
						<div className="container-fluid">
							<a className="navbar-brand" href={"/"}>
								<img width={100} id="logo" alt="Vue logo" src="../../assets/strawhatball.png"/>
							</a>
							<button className="navbar-toggler" type="button" data-bs-toggle="collapse"
							        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
							        aria-expanded="false" aria-label="Toggle navigation">
								<span className="navbar-toggler-icon"/>
							</button>
							<div className="collapse navbar-collapse" id="navbarSupportedContent">
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									<li className="nav-item">
										<a className="nav-item nav-link pr-4 pl-4 pb-2 pt-2" href={"/"}>Home
										</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				</Fragment>


	}
}

export default (AppMenu);
