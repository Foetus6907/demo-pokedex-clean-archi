import React, {Fragment} from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {pokemonHandler} from "@/core/pokemon/adapter/primary/pokemon.module";
import {Link} from "react-router-dom";

interface PokemonListState {
	pokemonList: Pokemon[];
}

interface PokemonListProps {

}


class PokemonList extends React.Component<PokemonListProps, PokemonListState> {
	constructor(props: PokemonListProps) {
		super(props);
		this.state = {
			pokemonList: []
		}
	}

	componentDidMount() {
		pokemonHandler.all().subscribe((pokemons: Pokemon[]) => {
			if (pokemons.length > 0) {
				this.setState({pokemonList: pokemons});
			} else {
				this.setState({pokemonList: []});
			}
		})

	}


	render() {
		return (
			<Fragment>
				<div className="row d-flex justify-content-center align-items-center">
					<h2 className="text-center">Pokedex List</h2>
				</div>

				<div className="container-fluid">
					<div className="row d-flex justify-content-center align-items-center">
							{this.state.pokemonList.map((pokemon: Pokemon, key: number) => {
								return  <Card key={key} className="col-4 m-2" style={{width: '18rem'}}>
									<Card.Img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`} ></Card.Img>
									<Card.Body>
												<Card.Title>{pokemon.name}</Card.Title>
												<Card.Text>
													{pokemon.description}
												</Card.Text>
												<Link to={`/pokemonDetail/${pokemon.name}`} ><Button>Pokemon Détail</Button></Link>
											</Card.Body>
										</Card>

							})}
					</div>
				</div>

			</Fragment>


		)
	}
}

export default PokemonList;
