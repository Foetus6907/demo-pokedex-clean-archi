import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {Observable} from "rxjs";
import {PokemonDTO, PokemonPageDTO} from "@/core/pokemon/adapter/secondaries/RestPokeApi/DTO/PokemonDTO";
import {from} from "rxjs";
import axios from "axios";
import {PokemonMappers} from "@/core/pokemon/adapter/secondaries/RestPokeApi/mappers/pokemon.mappers";
import {PokemonSpeciesDTO} from "@/core/pokemon/adapter/secondaries/RestPokeApi/DTO/PokemonSpeciesDTO";
import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";


export class RESTPokemonLoader implements PokemonLoader {

	all(): Observable<Pokemon[]> {
		const pokemons = axios.get('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
			.then((reponse) => {
				//console.log(reponse)
				const pokemonPageDTO = reponse.data as PokemonPageDTO;

				return PokemonMappers.mapPageToPokemons(pokemonPageDTO);
			})

		return from(pokemons)
	}

	get(number: string): Observable<Pokemon> {

		const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`)
			.then((reponse) => {
				// console.log(reponse)
				const pokemonDTO = reponse.data as unknown as PokemonDTO;

				return PokemonMappers.mapToPokemon(pokemonDTO);
			})
		return from(pokemon)
	}

	getPokemonByName(name: string): Observable<Pokemon> {
		const pokemon = axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((reponse) => {
				// console.log(reponse)
				const pokemonDTO = reponse.data as unknown as PokemonDTO;

				return PokemonMappers.mapToPokemon(pokemonDTO);
			})
		return from(pokemon)
	}

	getPokemonFlavorByName(name: string): Observable<PokemonFlavor> {
		const pokemonFlavor = axios.get(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
			.then((response) => {
				const pokemonSpeciesDTO = response.data as unknown as PokemonSpeciesDTO
				return PokemonMappers.mapToPokemonFlavor(pokemonSpeciesDTO);
			})
		return from(pokemonFlavor);
	}

}
