<template>
  <!--<div class="container">
    <h1>List</h1>

    <div class="card-deck d-flex justify-content-center">
      <Cardlist :key="key" v-for="(pokemon,key) in pokemonList" class="m-2" v-bind:pokemon="pokemon"></Cardlist>
    </div>
  </div>-->

  <div class="card-deck row justify-content-center">
      <Cardlist class="m-2 col-4" :key="key" v-for="(pokemon,key) in pokemonList" v-bind:pokemon="pokemon"></Cardlist>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue';
import Cardlist from "@/vue/components/Cardlist.vue";
import { Pokemon } from '@/core/pokemon/domain/entities/Pokemon';
import {pokemonHandler} from "@/core/pokemon/adapter/primary/pokemon.module";
import {Subscription} from "rxjs";



export default defineComponent({
  name: 'Home',
  components: {
    Cardlist,
  },
  data() {
    return {
      pokemonList: [] as Pokemon[],
      pokemonsSubcription: new Subscription()
    }
  },
  created() {
    this.pokemonsSubcription = pokemonHandler.all().subscribe(pokemons => {
      if (pokemons.length > 0) {
        this.pokemonList.push(...pokemons)
      } else {
        this.pokemonList.push(...[])
      }
    })
  },
  beforeUnmount() {
    this.pokemonsSubcription.unsubscribe()
  }
});
</script>


<style scoped>

</style>
