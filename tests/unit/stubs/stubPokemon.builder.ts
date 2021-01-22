import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";

export class StubPokemonBuilder extends PokemonBuilder {
	protected Number = "1"
	protected Name = "pikachu"
	protected Description = "description de pikachu"
	protected Weight = 0.6
	protected Height = 0.8
	protected Avatar = "avatar"
}
