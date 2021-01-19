export class PokemonFlavor {
	constructor(
		private _flavor_text: string,
		private _language: string,
		private _version: string,
	) {
	}

	get flavorText(): string {
		return this._flavor_text;
	}

	get languages(): string {
		return this._language;
	}

	get version(): string {
		return this._version;
	}
}
