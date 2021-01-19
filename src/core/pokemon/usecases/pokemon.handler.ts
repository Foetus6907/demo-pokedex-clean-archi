import {Observable} from "rxjs";
import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";

export class PokemonHandler {
	constructor(private pokemonSource: PokemonLoader) {
	}

	all(): Observable<Pokemon[]> {
		return this.pokemonSource.all()
	}


	get(number: string): Observable<Pokemon> {
		return this.pokemonSource.get(number)
	}


	getPokemonByName(name: string): Observable<Pokemon> {
		return this.pokemonSource.getPokemonByName(name)
	}

	getPokemonFlavorByName(name: string): Observable<PokemonFlavor> {
		return this.pokemonSource.getPokemonFlavorByName(name);
	}
}
