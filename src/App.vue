<script lang="ts">
import { defineComponent } from 'vue'
import { mapState } from 'vuex'

export default defineComponent({
  computed: {
    ...mapState(["maxMainImg"])
  }
})
</script>

<template>
  <header :class="{ hero: maxMainImg }">
    <img class="logo" alt="Der Grüne Rucksack Logo" src="./assets/backpack.png" />
    <h1>Der Grüne Rucksack</h1>
  </header>

  <router-view />

  <div class="copyright">
    Bild von http://pngimg.com/image/6353 unter CC-BY 4.0
  </div>
</template>

<style lang="scss">
html {
  font: 20px Avenir, Helvetica, Arial, sans-serif;
}

body {
  height: 100%;
  overflow: auto;
}

a {
  text-decoration: none;
  color: #1f8959;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  padding: 10px;

  header {
    display: flex;

    img {
      transition: all .5s;
      margin: 1em 0 0;
      max-height: 3rem;
    }

    &.hero {
      text-align: center;
      flex-direction: column;

      img {
        display: inline-block;
        margin: 5em auto 0;
        max-height: 12rem;
      }
    }

    @media (max-width: 800px) {
      h1 {
        font-size: 28px;
        margin-top: 1.4rem;
      }
    }
  }
}

.copyright {
  position: fixed;
  right: 2px;
  bottom: 2px;
  font-size: 0.7rem;
}
</style>
