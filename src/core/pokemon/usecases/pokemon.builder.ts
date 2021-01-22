import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";

export class PokemonBuilder {
	protected Number: string
	protected Name: string
	protected Description: string
	protected Weight: number
	protected Height: number
	protected Avatar: string

	constructor() {
		this.Number = "";
		this.Name = "";
		this.Description = "";
		this.Weight = 0;
		this.Height = 0;
		this.Avatar = "";
	}

	withNumber(value: string): PokemonBuilder {
		this.Number = value;
		return this
	}

	withName(value: string): PokemonBuilder {
		this.Name = value;
		return this
	}

	withDescription(value: string): PokemonBuilder {
		this.Description = value;
		return this
	}

	withHeight(value: number): PokemonBuilder {
		this.Weight = value;
		return this
	}

	withWeight(value: number): PokemonBuilder {
		this.Height = value;
		return this
	}

	withAvatar(value: string): PokemonBuilder {
		this.Avatar = value;
		return this
	}

	build(): Pokemon {
		return new Pokemon(this.Number, this.Name, this.Description, this.Weight, this.Height, this.Avatar);
	}
}
