import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";

export class PokemonBuilder {
	protected _number = ""
	protected _name = ""
	protected _description = ""
	protected _weight = 0
	protected _height = 0
	protected _avatar = ""

	withNumber(value: string): PokemonBuilder {
		this._number = value;
		return this
	}

	withName(value: string): PokemonBuilder {
		this._name = value;
		return this
	}

	withDescription(value: string): PokemonBuilder {
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

	withAvatar(value: string): PokemonBuilder {
		this._avatar = value;
		return this
	}

	build(): Pokemon {
		return new Pokemon(this._number, this._name, this._description, this._weight, this._height, this._avatar);
	}
}
