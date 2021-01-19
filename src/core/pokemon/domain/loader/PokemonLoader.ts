import {Observable} from "rxjs";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";

export interface PokemonLoader {
	all(): Observable<Pokemon[]>;

	get(number: string): Observable<Pokemon>;

	getPokemonByName(name: string): Observable<Pokemon>;

	getPokemonFlavorByName(name: string): Observable<PokemonFlavor>;
}
