<script lang="ts">
import { defineComponent } from 'vue'
import GreenBackpack from './components/GreenBackpack.vue'

export default defineComponent({
  name: 'App',
  components: {
    GreenBackpack
  }
})
</script>

<template>
  <img class="logo" alt="Der Grüne Rucksack Logo" src="./assets/backpack.png" />
  <GreenBackpack />
</template>

<style lang="scss">
html {
  font: 20px Avenir, Helvetica, Arial, sans-serif;
}

body {
  height: 100%;
  overflow: auto;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .logo {
    max-height: 12rem;
  }
}
</style>
