import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";

export class StubPokemonBuilder extends PokemonBuilder {
	protected _number: String = "1"
	protected _name: String = "pikachu"
	protected _description: String = "description de pikachu"
	protected _weight: number = 0.6
	protected _height: number = 0.8
	protected _avatar: String = "avatar"
}
