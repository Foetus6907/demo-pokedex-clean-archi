<template>
  <navbar/>
  <router-view/>
</template>
<script>
import Navbar from '@/vue/components/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Navbar,
  },
});
</script>

<style lang="scss">
.pokemonCardImage{
  width: 300px;
}
</style>
