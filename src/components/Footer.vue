<script lang="ts">
import { defineComponent } from 'vue'
import challenge from "../assets/challenge.png"
import graph from "../assets/graph.png"
import Button from "../Button.vue"

export default defineComponent({
  components: { Button },

  data() {
    return {
      challenge,
      graph,
    }
  },

  methods: {
    behaviour(): void {
      this.$router.push("/section/Mittagessen/behaviour")
    },

    challenges(): void {
      this.$router.push("/section/Mittagessen/challenges")
    },

    buildingsite(): void {
      this.$router.push("/buildingsite")
    },
  },
})
</script>

<template>
  <footer>
    <div class="btn-group" role="group" aria-label="Footer buttons">
      <Button @click="behaviour">
        <img :src="challenge" />
      </Button>
      <Button @click="challenges">
        <img :src="challenge" />
      </Button>
      <Button @click="buildingsite">
        <img :src="graph" />
      </Button>
      <Button @click="buildingsite">
        <img :src="challenge" />
      </Button>
      <Button @click="buildingsite">
        <img :src="challenge" />
      </Button>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background: white;
    margin-left: -10px;

    > div {
      display: inline;
      margin: 0 auto;
    }

    button {
      border: none;

      img {
        max-width: 28px;
      }
    }
  }
</style>