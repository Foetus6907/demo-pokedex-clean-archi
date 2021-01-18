import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";

export class StubPokemonBuilder extends PokemonBuilder {
	protected _number = "1"
	protected _name = "pikachu"
	protected _description = "description de pikachu"
	protected _weight = 0.6
	protected _height = 0.8
	protected _avatar = "avatar"
}
