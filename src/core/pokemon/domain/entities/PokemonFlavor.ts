export class PokemonFlavor {
	constructor(
		private FlavorText: string,
		private Language: string,
		private Version: string,
	) {
	}

	get flavorText(): string {
		return this.FlavorText;
	}

	get languages(): string {
		return this.Language;
	}

	get version(): string {
		return this.Version;
	}
}
