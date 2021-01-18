<template>
  <div class="card" style="width: 200px" v-if="pokemon">
    <img class="card-img-top" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.number}.png`" style="width: 200px" alt="Card image cap">
    <!--<img class="card-img-top" :src="pokemon.avatar" style="width: 200px" alt="Card image cap">-->
    <div class="card-body">
      <h5 class="card-title">{{ pokemon.name }}</h5>
      <p class="card-text">{{ pokemon.description }}</p>
      <router-link tag="button" class="btn btn-primary btn-sm" :to="{ name : 'pokemondetail', params:{ pokemonName : pokemon.name }}">Fiche complete</router-link>
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
