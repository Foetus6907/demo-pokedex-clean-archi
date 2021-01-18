import {PokemonHandler} from "@/core/pokemon/usecases/pokemon.handler";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";
import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {RESTPokemonLoader} from "@/core/pokemon/adapter/secondaries/RestPokeApi/RESTPokemonLoader.loader";
import {PokemonDTO, PokemonPageDTO} from "@/core/pokemon/adapter/secondaries/RestPokeApi/DTO/PokemonDTO";
import axios from 'axios';

jest.mock("axios", () => Object.assign(
	jest.fn(),
	{ get: jest.fn() }
));

describe('Integration Rest Pokemon loader fetches', () => {
	let fakePokemonPageResponse: any
	let expectedSimplePokemon: Pokemon
	let fakePokemonResponse: any
	let expectedPokemon: Pokemon

	let pokemonHandler: PokemonHandler

	beforeEach(() => {
		jest.resetAllMocks();

		fakePokemonPageResponse = { data: {
				count: 100,
				next: "next",
				previous: "next",
				results: [
					{
						name: "pokemon",
						url: "pokemon"
					}
				]
			}} ;

		expectedSimplePokemon = new PokemonBuilder()
			.withNumber("1")
			.withName("pokemon")
			.withDescription("pokemon")
			.build();

		fakePokemonResponse = {
			data: {
				id: 1,
				name: "pokemon",
				sprites: {
					back_default: "avatar",
					back_female: "sprite",
					back_shiny: "sprite",
					back_shiny_female: "sprite",
					front_default: "avatar",
					front_female: "sprite",
					front_shiny: "sprite",
					front_shiny_female: "sprite",
					other: {
						dream_world:{
							front_default: "sprite",
							front_female: "sprite",
						},
						"official-artwork":{
							front_default: "sprite",
							front_female: "sprite",
						}
					}
				},
				height: 2,
				weight: 5,
				abilities: [],
				base_experience: 64,
				location_area_encounters:"location",
				forms: [],
				game_indices: [],
				held_items: [],
				is_default: true,
				moves: [],
				order: 1,
				species: {
					name: "pokemon",
					url: "pokemon"
				},
				stats: [],
				types:  [{
					slot:1,
					type: {
						name:"normal",
						url: "url"
					}
				},
					{
						slot:2,
						type: {
							name:"feu",
							url: "url"
						}
					}]
			}
		} ;

		expectedPokemon = new PokemonBuilder()
			.withNumber("1")
			.withName("pokemon")
			.withDescription("normal, feu")
			.withAvatar("avatar")
			.withWeight(5)
			.withHeight(2)
			.build();

		const pokemonLoader: PokemonLoader = new RESTPokemonLoader();
		pokemonHandler = new PokemonHandler(pokemonLoader);
	});
	it('A List with some pokemons', done => {
		(axios.get as jest.Mocked<any>).mockImplementationOnce(() => Promise.resolve(fakePokemonPageResponse));
		const spy = jest.spyOn(axios as any, 'get');

		pokemonHandler.all().subscribe(pokemons => {
			expect(pokemons).toEqual([expectedSimplePokemon]);
			expect(spy).toHaveBeenCalledTimes(1);
			expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0");
			done();
		})
	});
	it('A Detail of one pokemon by number', done => {
		(axios.get as jest.Mocked<any>).mockImplementationOnce(() => Promise.resolve(fakePokemonResponse));
		const spy = jest.spyOn(axios as any, 'get');

		pokemonHandler.get("1").subscribe(pokemons => {
			expect(pokemons).toEqual(expectedPokemon);
			expect(spy).toHaveBeenCalledTimes(1);
			expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/1");
			done();
		})
	});
	it('A Detail of one pokemon by name', done => {
		(axios.get as jest.Mocked<any>).mockImplementationOnce(() => Promise.resolve(fakePokemonResponse));
		const spy = jest.spyOn(axios as any, 'get');

		pokemonHandler.getPokemonByName("bulbasaur").subscribe(pokemon => {
			expect(pokemon).toEqual(expectedPokemon);
			expect(spy).toHaveBeenCalledTimes(1);
			expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon/bulbasaur");
			done();
		})
	})
})
