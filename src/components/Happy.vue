<script lang="ts">
import { defineComponent } from 'vue'
import { mutationTypes } from "../store"
import happy from "../assets/happy.png"

const component = defineComponent({
  data() {
    return {
      happy,
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const c = (vm as unknown as typeof component)
      c.$store.commit(mutationTypes.minimizeMainImage())
    })
  },
})

export default component
</script>

<template>
  <div class="container">
    <h2>Super!</h2>

    <img :src="happy" />
    <h3>Du hast die Challenge angenommen.</h3>

    <p>Komm' doch einfach später wieder und sag' Bescheid, wie es dir gelingt!</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 480px;
}

h3 {
  font-size: 110%;
}

img {
  width: 100%;
  padding: 10%;
}
</style>