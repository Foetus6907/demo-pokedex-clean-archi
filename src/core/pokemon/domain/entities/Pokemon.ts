export class Pokemon {
	constructor(
		private Number: string,
		private Name: string,
		private Description: string,
		private Weight: number,
		private Height: number,
		private Avatar: string,
		) {
	}

	get number(): string {
		return this.Number;
	}

	get name(): string {
		return this.Name;
	}

	get description(): string {
		return this.Description;
	}

	get weight(): number {
		return this.Weight;
	}

	get height(): number {
		return this.Height;
	}

	get avatar(): string {
		return this.Avatar;
	}
}
