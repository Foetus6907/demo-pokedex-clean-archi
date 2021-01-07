export class Pokemon {
	constructor(
		private _number: String,
		private _name: String,
		private _description: String,
		private _weight: Number,
		private _height: Number,
		private _avatar: String,
		) {
	}

	get number(): String {
		return this._number;
	}

	get name(): String {
		return this._name;
	}

	get description(): String {
		return this._description;
	}

	get weight(): Number {
		return this._weight;
	}

	get height(): Number {
		return this._height;
	}

	get avatar(): String {
		return this._avatar;
	}
}
