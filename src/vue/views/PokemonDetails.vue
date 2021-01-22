<template>
  <h1>Detail</h1>
  <div class="container-fluid d-flex justify-content-center">
    <div class="card" v-if="this.pokemon">
      <router-link tag="a" class="btn btn-secondary" to="/">Go Back</router-link>
      <img :src="this.pokemon.avatar" class="card-img-top pokemonCardImage" alt="...">
      <div class="card-body">
        <h5 class="card-title">{{ this.pokemon.name }}</h5>
        <h6 class="card-title">Version : {{ this.pokemonFlavor.version }}</h6>
        <p class="card-text">{{ this.pokemonFlavor.flavorText }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import { Pokemon } from '@/core/pokemon/domain/entities/Pokemon';
import {pokemonHandler} from "@/core/pokemon/adapter/primary/pokemon.module";
import {Subscription} from "rxjs";
import {PokemonFlavor} from "@/core/pokemon/domain/entities/PokemonFlavor";


export default defineComponent({
  name: 'Navbar',
  props: {
    pokemonName: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      pokemon: undefined as unknown as Pokemon,
      pokemonSubscription: new Subscription(),
      pokemonFlavor: undefined as unknown as PokemonFlavor,
      pokemonFlavorSubscription: new Subscription(),
    }
  },
  created() {
    this.pokemonSubscription = pokemonHandler.getPokemonByName(this.pokemonName).subscribe((pokemon: Pokemon) => {
      if (pokemon) {
        this.pokemon = pokemon;
      }
    })

    this.pokemonFlavorSubscription = pokemonHandler.getPokemonFlavorByName(this.pokemonName).subscribe((pokemonFlavor: PokemonFlavor) => {
      if (pokemonFlavor) {
        this.pokemonFlavor = pokemonFlavor;
      }
    })

  },
  beforeUnmount() {
    this.pokemonSubscription.unsubscribe()
    this.pokemonFlavorSubscription.unsubscribe();
  }
});



</script>
