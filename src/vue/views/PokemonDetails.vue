<template>
  <h1>Detail</h1>
  <div class="container-fluid d-flex justify-content-center">
    <div class="card" v-if="this.pokemon">
      <img :src="this.pokemon.avatar" class="card-img-top pokemonCardImage" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ this.pokemon.name }}</h5>
        <p class="card-text">{{ this.pokemon.description }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, computed} from "vue";
import { Pokemon } from '@/core/pokemon/domain/entities/Pokemon';
import {pokemonHandler} from "@/vue/views/pokemon.module";


export default defineComponent({
  name: 'Navbar',
  props: {
    pokemonId: {
      type: String,
      required: true
    }
  },
  setup: (props) => {
    let pokemonToDisplay: Pokemon;
    pokemonHandler.get(props.pokemonId).subscribe(pokemon => pokemonToDisplay = pokemon)

    return {
      pokemon: computed(() => pokemonToDisplay),
    }
  },
});



</script>
