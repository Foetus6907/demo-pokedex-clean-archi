import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";
import {RESTPokemonLoader} from "@/core/pokemon/adapter/secondaries/RestPokeApi/RESTPokemonLoader.loader";
import {InMemoryPokemonLoader} from "@/core/pokemon/adapter/secondaries/InMemory/InMemoryPokemon.loader";

export class PokemonDIFactory {
	static pokemonLoader(): PokemonLoader {
		const pika: Pokemon = new PokemonBuilder()
			.withName("pika")
			.withNumber("25")
			.withDescription("pokemon souri")
			.withAvatar("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
			.build();
		const salameche: Pokemon = new PokemonBuilder()
			.withName("salameche")
			.withNumber("4")
			.withDescription("pokemon flamme")
			.withAvatar("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png")
			.build();
		const mew: Pokemon = new PokemonBuilder()
			.withName("mew")
			.withNumber("151")
			.withDescription("pokemon fabuleu")
			.withAvatar("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png")
			.build();

		console.log("env Variable", process.env.REACT_APP_SOURCE)

		switch (process.env.VUE_APP_SOURCE || process.env.REACT_APP_SOURCE) {
			case "rest":
				return new RESTPokemonLoader();
			default:
				return new InMemoryPokemonLoader([pika, salameche, mew])
		}
	}
}
