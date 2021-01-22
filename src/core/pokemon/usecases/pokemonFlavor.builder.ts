import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";

export class PokemonFlavorBuilder {
	protected FlavorText: string;
	protected Language: string;
	protected Version: string;

	constructor() {
		this.FlavorText = "";
		this.Language = "";
		this.Version = "";
	}

	withFlavorText(flavorText: string) {
		this.FlavorText = flavorText;
		return this;
	}

	withLanguage(language: string) {
		this.Language = language;
		return this;
	}

	withVersion(version: string) {
		this.Version = version;
		return this;
	}

	build() {
		return new PokemonFlavor(this.FlavorText, this.Language, this.Version);
	}
}
