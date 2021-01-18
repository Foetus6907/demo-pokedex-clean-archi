import {PokemonHandler} from "@/core/pokemon/usecases/pokemon.handler";
import {InMemoryPokemonLoader} from "@/core/pokemon/adapter/secondaries/InMemory/InMemoryPokemon.loader";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";
import {RESTPokemonLoader} from "@/core/pokemon/adapter/secondaries/RestPokeApi/RESTPokemonLoader.loader";

const pika: Pokemon = new PokemonBuilder()
	.withName("pika")
	.withNumber("1")
	.withDescription("pokemon souri")
	.withAvatar("http://via.placeholder.com/475px475")
	.build();

const salameche: Pokemon = new PokemonBuilder()
	.withName("salameche")
	.withNumber("2")
	.withDescription("pokemon flamme")
	.withAvatar("http://via.placeholder.com/475px475")
	.build();

const mew: Pokemon = new PokemonBuilder()
	.withName("mew")
	.withNumber("151")
	.withDescription("pokemon fabuleu")
	.withAvatar("http://via.placeholder.com/475px475")
	.build();

// export const pokemonHandler: PokemonHandler = new PokemonHandler(new InMemoryPokemonLoader([pika, salameche, mew]))
export const pokemonHandler: PokemonHandler = new PokemonHandler(new RESTPokemonLoader())

