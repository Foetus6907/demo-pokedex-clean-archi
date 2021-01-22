import {PokemonHandler} from "@/core/pokemon/usecases/pokemon.handler";
import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {InMemoryPokemonLoader} from "@/core/pokemon/adapter/secondaries/InMemory/InMemoryPokemon.loader";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {StubPokemonBuilder} from "../stubs/stubPokemon.builder";

describe('Pokemon Handler fetches', () => {
	let pikachu: Pokemon

	beforeEach(() => {
		pikachu = new StubPokemonBuilder().withNumber("pikachu").build() ;
	})

	describe('A list', () => {
		it('With zero pokemon if there is no in the source', done => {
			const pokemonHandler: PokemonHandler = createPokemonHandler([])
			pokemonHandler.all().subscribe(pokemons => {
				verifyListOfPokemon(pokemons, []);
				done()
			})
		})
		it('With 1 pokemon if there is 1 pokemon in the source', done => {
			const pokemonHandler: PokemonHandler = createPokemonHandler([pikachu])
			pokemonHandler.all().subscribe(pokemons => {
				verifyListOfPokemon(pokemons, [pikachu]);
				done()
			})
		})
		it('With 2 pokemon if there is 2 pokemon in the source', done => {
			const salameche: Pokemon = new StubPokemonBuilder().withNumber("salameche").build()
			const pokemonHandler: PokemonHandler = createPokemonHandler([pikachu, salameche])
			pokemonHandler.all().subscribe(pokemons => {
				verifyListOfPokemon(pokemons, [pikachu, salameche]);
				done()
			})
		})

		function verifyListOfPokemon(pokemons: Pokemon[], expectedPokemons: Pokemon[]) {
			expect(pokemons.length).toEqual(expectedPokemons.length);
			expectedPokemons.forEach((expectedPokemon, index) => {
				verifyOnePokemon(pokemons[index], expectedPokemon)
			})
		}

	})

	it('A detail of one pokemon', done => {
		const salameche: Pokemon = new StubPokemonBuilder().withName("salameche").withNumber("2").build()
		const pokemonHandler: PokemonHandler = createPokemonHandler([pikachu, salameche])
		pokemonHandler.get("2").subscribe(pokemon => {
			verifyOnePokemon(pokemon, salameche);
			done()
		})
		pokemonHandler.getPokemonByName("salameche").subscribe(pokemon => {
			verifyOnePokemon(pokemon, salameche);
			done()
		})
	} )

	function verifyOnePokemon(pokemon: Pokemon, expectedPokemon: Pokemon) {
		expect(pokemon.number).toEqual(expectedPokemon.number);
		expect(pokemon.name).toEqual(expectedPokemon.name);
		expect(pokemon.description).toEqual(expectedPokemon.description);
		expect(pokemon.weight).toEqual(expectedPokemon.weight);
		expect(pokemon.height).toEqual(expectedPokemon.height);
		expect(pokemon.avatar).toEqual(expectedPokemon.avatar);
	}

	function createPokemonHandler(pokemonPopulation: Pokemon[]) {
		const pokemonSource: PokemonLoader = new InMemoryPokemonLoader(pokemonPopulation);
		return new PokemonHandler(pokemonSource);
	}

})
