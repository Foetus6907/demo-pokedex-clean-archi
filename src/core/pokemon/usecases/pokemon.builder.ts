import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";

export class PokemonBuilder {
	protected _number: String = ""
	protected _name: String = ""
	protected _description: String = ""
	protected _weight: number = 0
	protected _height: number = 0
	protected _avatar: String = ""

	withNumber(value: String): PokemonBuilder {
		this._number = value;
		return this
	}

	withName(value: String): PokemonBuilder {
		this._name = value;
		return this
	}

	withDescription(value: String): PokemonBuilder {
		this._description = value;
		return this
	}

	withHeight(value: number): PokemonBuilder {
		this._weight = value;
		return this
	}

	withWeight(value: number): PokemonBuilder {
		this._height = value;
		return this
	}

	withAvatar(value: String): PokemonBuilder {
		this._avatar = value;
		return this
	}

	build(): Pokemon {
		return new Pokemon(this._number, this._name, this._description, this._weight, this._height, this._avatar);
	}
}
