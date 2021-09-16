<script lang="ts">
import { defineComponent } from 'vue'
import { mutationTypes } from "../store"
import baustelle from "../assets/baustelle.jpg"

const component = defineComponent({
  data() {
    return {
      baustelle,
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
    <h2>Baustelle</h2>

    <div class="img-container"><img :src="baustelle" alt="Baustelle"/></div>
    <h3>Dieser Bereich ist noch nicht ganz fertig.</h3>

    <p>Komm' doch einfach später noch mal wieder!</p>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
}

h3 {
  font-size: 110%;
}

.img-container {
  max-width: 1000px;
  margin: 0 auto;
}

img {
  width: 100%;
  padding: 20%;
}
</style>