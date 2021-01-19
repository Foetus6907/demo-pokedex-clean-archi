export interface PokemonSpeciesDTO {
	flavor_text_entries: PokemonFlavorDTO[];
}

export interface PokemonFlavorDTO {
	flavor_text: string;
	language: {
		name: string;
		url: string;
	};
	version: {
		name: string;
		url: string;
	};
}
