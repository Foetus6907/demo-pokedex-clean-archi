import React, {Component} from "react";

import {Link, match} from 'react-router-dom';
import {Button, Card} from "react-bootstrap";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {pokemonHandler} from "@/core/pokemon/adapter/primary/pokemon.module";
import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";


interface PokemonDetailInterfaceProps {
	match: match<{ pokemonName: string }>;
}

interface PokemonDetailState {
	pokemon: Pokemon | undefined;
	pokemonFlavor: PokemonFlavor | undefined;
}

class PokemonDetail extends Component<PokemonDetailInterfaceProps, PokemonDetailState> {
	constructor(props: PokemonDetailInterfaceProps) {
		super(props);
		this.state = {
			pokemon: undefined,
			pokemonFlavor: undefined
		}
	}

	componentDidMount() {
		pokemonHandler.getPokemonByName(this.props.match.params.pokemonName).subscribe((pokemon: Pokemon) => {
			if (pokemon) {
				this.setState({pokemon: pokemon});
			} else {
				this.setState({pokemon: undefined});
			}
		})

		pokemonHandler.getPokemonFlavorByName(this.props.match.params.pokemonName).subscribe((pokemonFlavor: PokemonFlavor) => {
			if (pokemonFlavor) {
				this.setState({pokemonFlavor: pokemonFlavor});
			} else {
				this.setState({pokemonFlavor: undefined});
			}
		})
	}

	render() {
		return  <div className="container-fluid">
					<div className="row d-flex justify-content-center align-items-center">
						<h4 className="text-center">Pokemon Detail</h4>
						<Card style={{ width: '18rem' }}>
							<Card.Img variant="top" src={this.state.pokemon?.avatar} />
							<Card.Body>
								<Card.Title>{this.state.pokemon?.name}</Card.Title>
								<Card.Text>
									{this.state.pokemonFlavor?.flavorText}
								</Card.Text>
								<Card.Text>
									<p>Height : {this.state.pokemon?.height}</p>
									<p>Weight : {this.state.pokemon?.weight}</p>
								</Card.Text>
								<Link to="/">
									<Button variant="secondary">Retour</Button>
								</Link>
							</Card.Body>
						</Card>
					</div>
				</div>;
	}
}

export default PokemonDetail;
