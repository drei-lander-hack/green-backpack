<script lang="ts">
import { defineComponent } from 'vue'
import challenge from "../assets/challenge.png"
import graph from "../assets/graph.png"
import company from "../assets/company.png"
import gruppe from "../assets/gruppe.png"
import rucksack from "../assets/rucksack.png"
import Button from "../Button.vue"

export default defineComponent({
  components: { Button },

  data() {
    return {
      challenge,
      graph,
      company,
      gruppe,
      rucksack,
    }
  },

  methods: {
    behaviour(): void {
      this.$router.push("/section/Mittagessen")
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
        <img :src="rucksack" />
      </Button>
      <Button @click="challenges">
        <img :src="challenge" />
      </Button>
      <Button @click="buildingsite">
        <img :src="graph" />
      </Button>
      <Button @click="buildingsite">
        <img :src="company" />
      </Button>
      <Button @click="buildingsite">
        <img :src="gruppe" />
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
    padding-top: 10px;

    > div {
      display: inline;
      margin: 0 auto;
    }

    button {
      border: none;

      img {
        max-width: 2em;
      }
    }
  }
</style>