import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";
import {RESTPokemonLoader} from "@/core/pokemon/adapter/secondaries/RestPokeApi/RESTPokemonLoader.loader";
import {InMemoryPokemonLoader} from "@/core/pokemon/adapter/secondaries/InMemory/InMemoryPokemon.loader";

export class PokemonDIFactory {
	static pokemonLoader(): PokemonLoader {
		const pika: Pokemon = new PokemonBuilder()
			.withName("pika")
			.withNumber("1")
			.withDescription("pokemon souri")
			.withAvatar("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png")
			.build();
		const salameche: Pokemon = new PokemonBuilder()
			.withName("salameche")
			.withNumber("2")
			.withDescription("pokemon flamme")
			.withAvatar("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png")
			.build();
		const mew: Pokemon = new PokemonBuilder()
			.withName("mew")
			.withNumber("151")
			.withDescription("pokemon fabuleu")
			.withAvatar("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png")
			.build();
		switch (process.env.VUE_APP_SOURCE) {
			case "rest":
				return new RESTPokemonLoader();
			default:
				return new InMemoryPokemonLoader([pika, salameche, mew])
		}
	}
}
