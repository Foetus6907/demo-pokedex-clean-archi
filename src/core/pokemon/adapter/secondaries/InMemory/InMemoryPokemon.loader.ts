import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {BehaviorSubject, Observable, Subject} from "rxjs";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {map} from "rxjs/operators";
import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";
import {PokemonFlavorBuilder} from "@/core/pokemon/usecases/pokemonFlavor.builder";

export class InMemoryPokemonLoader implements PokemonLoader {

	private pokemons$: Subject<Pokemon[]> = new BehaviorSubject(this.pokemons);

	constructor(private pokemons: Pokemon[]) {
		
	}

	all(): Observable<Pokemon[]> {
		return this.pokemons$
	}

	get(number: string): Observable<Pokemon> {
		return this.pokemons$
			.pipe(
				map(pokemons => pokemons.filter(pokemon => pokemon.number === number)[0])
			);
	}

	getPokemonByName(name: string): Observable<Pokemon> {
		return this.pokemons$
			.pipe(
				map(pokemons => pokemons.filter(pokemon => pokemon.name === name)[0])
			);
	}

	getPokemonFlavorByName(name: string): Observable<PokemonFlavor> {

		return new BehaviorSubject(new PokemonFlavorBuilder()
										.withFlavorText("Ceci sera la description du pokemon")
										.withLanguage("fr")
										.withVersion("red")
										.build())

	}
}
