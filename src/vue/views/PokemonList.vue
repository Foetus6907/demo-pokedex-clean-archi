<template>
  <div class="container">
    <h1>List</h1>

    <div class="card-deck d-flex justify-content-center">
      <Cardlist :key="key" v-for="(pokemon,key) in pokemonList" class="m-2" v-bind:pokemon="pokemon"></Cardlist>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Cardlist from "@/vue/components/Cardlist.vue";
import { Pokemon } from '@/core/pokemon/domain/entities/Pokemon';
import {PokemonBuilder} from "@/core/pokemon/usecases/pokemon.builder";
import {PokemonHandler} from "@/core/pokemon/usecases/pokemon.handler";
import {InMemoryPokemonLoader} from "@/core/pokemon/adapter/secondaries/InMemoryPokemon.loader";

export default defineComponent({
  name: 'Home',
  components: {
    Cardlist,
  },
  setup() {
    let pokemonList: Pokemon[] = [];
    const pika: Pokemon = new PokemonBuilder()
        .withName("pika")
        .withNumber("1")
        .withDescription("pokemon souri")
        .withAvatar("http://via.placeholder.com/475px475")
        .build();

    const salameche: Pokemon = new PokemonBuilder()
        .withName("salameche")
        .withNumber("2")
        .withDescription("pokemon flamme")
        .withAvatar("http://via.placeholder.com/475px475")
        .build();

    const pokemons =  new PokemonHandler(new InMemoryPokemonLoader([pika, salameche])).all()
    pokemons.subscribe(pokemons => pokemonList = pokemons);

    return{
      pokemonList: pokemonList
    }
  }
});
</script>


<style scoped>

</style>
