import axios from 'axios';

const axiosToPokeApi = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/'
});

export default axiosToPokeApi;
