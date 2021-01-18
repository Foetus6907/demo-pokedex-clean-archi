import {
	PokemonDTO,
	PokemonPageDTO,
	PokemonSimpleDTO
} from "@/core/pokemon/adapter/secondaries/RestPokeApi/DTO/PokemonDTO";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";

export class PokemonMappers {
	static mapToPokemon(pokemonDTO: PokemonDTO): Pokemon {
		console.log(pokemonDTO)

		return new PokemonBuilder()
			.withNumber(pokemonDTO.id.toString())
			.withName(pokemonDTO.name)
			.withDescription(pokemonDTO.types.map(t => t.type.name).join(', '))
			.withHeight(pokemonDTO.height.valueOf())
			.withWeight(pokemonDTO.weight.valueOf())
			.withAvatar(pokemonDTO.sprites.front_default)
			.build()
	}

	static mapPageToPokemons(pokemonPageDTO: PokemonPageDTO): Pokemon[] {
		return pokemonPageDTO.results.map((pokemonDTO: PokemonSimpleDTO, index: number) => {
			return new PokemonBuilder()
				.withName(pokemonDTO.name)
				.withDescription(pokemonDTO.name)
				.withNumber((index + 1).toString())
				.build()
		})
	}
}
