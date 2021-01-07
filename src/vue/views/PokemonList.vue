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
import {pokemonHandler} from "@/vue/views/pokemon.module";

export default defineComponent({
  name: 'Home',
  components: {
    Cardlist,
  },
  setup() {
    let pokemonList: Pokemon[] = [];
    //const pokemons =  pokemonHandler.all()
    pokemonHandler.all().subscribe(pokemons => pokemonList = pokemons);

    return{
      pokemonList: pokemonList
    }
  }
});
</script>


<style scoped>

</style>
