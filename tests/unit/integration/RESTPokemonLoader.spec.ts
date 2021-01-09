import {PokemonHandler} from "@/core/pokemon/usecases/pokemon.handler";
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";
import {PokemonLoader} from "@/core/pokemon/domain/loader/PokemonLoader";
import {RESTPokemonLoader} from "@/core/pokemon/adapter/secondaries/RESTPokemonLoader.loader";
import {PokemonDTO} from "@/core/pokemon/adapter/secondaries/DTO/PokemonDTO";
import axios from 'axios';
/*
jest.mock('axios',() => {
	get: jest.fn(() => Promise.resolve({ data: 3 }))
});*/
jest.mock("axios", () => Object.assign(
	jest.fn(),
	{ get: jest.fn(() => Promise.resolve({ data: 3 })) }
));

describe('Integration Rest Pokemon loader fetches', () => {
	beforeEach(() => {
		jest.resetAllMocks();
	});
	it('A List with some pokemons', done => {

		const fakePokemonResponse: PokemonDTO = {
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
		};


		let expectedPokemon: Pokemon = new PokemonBuilder()
			.withNumber("1")
			.withName("pokemon")
			.withHeight(2)
			.withWeight(5)
			.withAvatar("avatar")
			.withDescription("normal, feu")
			.build();

		(axios.get as jest.Mocked<any>).mockImplementationOnce(() => Promise.resolve([fakePokemonResponse]));

		const spy = jest.spyOn(axios as any, 'get');

		const pokemonLoader: PokemonLoader = new RESTPokemonLoader()
		const pokemonHandler: PokemonHandler = new PokemonHandler(pokemonLoader);
		pokemonHandler.all().subscribe(pokemons => {
			expect(pokemons).toEqual([expectedPokemon]);
			expect(spy).toHaveBeenCalledTimes(1);
			expect(axios.get).toHaveBeenCalledWith("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0");

			done();
		})
	});
})
