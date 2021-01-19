import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";

export class PokemonFlavorBuilder {
	protected _flavor_text = "";
	protected _language = "";
	protected _version = "";

	withFlavorText(flavorText: string) {
		this._flavor_text = flavorText;
		return this;
	}

	withLanguage(language: string) {
		this._language = language;
		return this;
	}

	withVersion(version: string) {
		this._version = version;
		return this;
	}

	build() {
		return new PokemonFlavor(this._flavor_text, this._language, this._version);
	}
}