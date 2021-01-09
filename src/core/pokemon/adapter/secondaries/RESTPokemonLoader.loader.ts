import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {Observable, of} from "rxjs";
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";
import {PokemonDTO, TypeDTO} from "@/core/pokemon/adapter/secondaries/DTO/PokemonDTO";
import {from} from "rxjs";
import axios, {AxiosResponse} from "axios";


export class RESTPokemonLoader implements PokemonLoader {
	constructor() {

	}

	all(): Observable<Pokemon[]> {
		/*let pokemon: Pokemon = new PokemonBuilder()
			.withNumber("1")
			.withName("pokemon")
			.withHeight(2)
			.withWeight(5)
			.withAvatar("avatar")
			.withDescription("Lorem ipsum pokemon")
			.build()*/

		const pokemon = axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
			.then((reponse) => {
				console.log(reponse)
				const pokemonsDTO = reponse as unknown as PokemonDTO[]

				return pokemonsDTO.map((pokemonDTO: PokemonDTO) => {
					return new PokemonBuilder()
						.withName(pokemonDTO.name)
						.withDescription(pokemonDTO.types.map((type:TypeDTO) => type.type.name).join(', '))
						.withNumber(pokemonDTO.id.toString())
						.withHeight(2)
						.withWeight(5)
						.withAvatar(pokemonDTO.sprites.front_default)
						.withDescription("normal, feu")
						.build()
				})
			})


		return from(pokemon)
	}

	get(number: string): Observable<Pokemon> {
		let pokemon: Pokemon = new PokemonBuilder()
			.withNumber("1")
			.withName("pokemon")
			.withHeight(2)
			.withWeight(5)
			.withAvatar("avatar")
			.withDescription("Lorem ipsum pokemon")
			.build()
		return of(pokemon)
	}
}
