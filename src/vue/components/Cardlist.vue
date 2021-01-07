<template>
  <div class="card" v-if="pokemon">
    <img class="card-img-top pokemonCardImage" :src="pokemon.avatar" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{ pokemon.name }}</h5>
      <p class="card-text">{{ pokemon.description }}</p>
      <router-link tag="button" class="btn btn-primary btn-sm" :to="{ name : 'pokemondetail', params:{ pokemonId : pokemon.number }}">Fiche complete</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {Pokemon} from "@/core/pokemon/domain/entities/Pokemon";

export default defineComponent({
  name: 'Navbar',
  props: {
    pokemon: Pokemon
  }
});
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
