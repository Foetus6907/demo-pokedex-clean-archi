import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import PokemonList from "../../views/PokemonList";
import PokemonDetail from "../../views/PokemonDetail";

class AppContent extends Component {
	render() {
		return  <Switch>
					<Route path='/pokemonDetail/:pokemonName' component={PokemonDetail}  />
					<Route path='/' component={PokemonList} />
				</Switch>;
	}
}

export default AppContent;
