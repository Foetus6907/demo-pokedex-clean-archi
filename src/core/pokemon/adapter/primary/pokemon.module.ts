import {PokemonHandler} from "@/core/pokemon/usecases/pokemon.handler";
import {PokemonDIFactory} from "@/core/pokemon/configuration/pokemonDIFactory";

export const pokemonHandler: PokemonHandler = new PokemonHandler(PokemonDIFactory.pokemonLoader())

