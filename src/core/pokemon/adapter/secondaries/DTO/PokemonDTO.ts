export interface PokemonDTO {
	id: Number;
	name: String
	abilities: AbilityDTO[]
	base_experience: Number
	location_area_encounters:String
	forms: FormDTO[]
	game_indices: GameIndiceDTO[]
	height: Number
	held_items: []
	is_default: Boolean
	moves: []
	order: Number
	species: {
		name: String
		url: String
	}
	sprites: SpritesDTO
	stats: StatDTO[]
	weight: Number
	types: TypeDTO[]
}

export interface TypeDTO {
	slot: Number
	type: {
		name: String
		url: String
	}
}


export interface StatDTO {
	base_stat: Number
	effort: Number
	stat: {
		name: String
		url: String
	}
}

export interface SpritesDTO {
	back_default: String
	back_female: String
	back_shiny: String
	back_shiny_female: String
	front_default: String
	front_female: String
	front_shiny: String
	front_shiny_female: String
	other: {
		dream_world:{
			front_default: String
			front_female: String
		},
		"official-artwork":{
			front_default: String
			front_female: String
		}
	}
}

export interface AbilityDTO {
	ability: {
		name: String
		url: String
	}
	is_hidden: Boolean
	slot: Number
}

export interface FormDTO {
	name: String
	url: String
}

export interface GameIndiceDTO {
	game_index: Number
	version: {
		name: String
		url: String
	}
}
