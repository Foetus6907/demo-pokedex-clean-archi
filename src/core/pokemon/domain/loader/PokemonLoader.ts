import {Observable} from "rxjs";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";

export interface PokemonLoader {
	all(): Observable<Pokemon[]>;

	get(number: string): Observable<Pokemon>;

	getPokemonByName(name: string): Observable<Pokemon>;
}
