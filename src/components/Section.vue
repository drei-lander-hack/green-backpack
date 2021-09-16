<script lang="ts">
import { defineComponent } from 'vue'
import { mutationTypes } from "../store"
import baustelle from "../assets/baustelle.jpg"

const component = defineComponent({
  data() {
    return {
      section: "",
      baustelle,
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const c = (vm as unknown as typeof component)
      c.section = to.params.section as string
      c.$store.commit(mutationTypes.minimizeMainImage())
    })
  },

  beforeRouteUpdate (to) {
    this.section = to.params.section as string
  },
})

export default component
</script>

<template>
  <h2>{{ section }}</h2>

  <div class="img-container"><img :src="baustelle" /></div>
  <h3>Dieser Bereich ist noch nicht ganz fertig.</h3>

  <p>Komm' doch einfach später noch mal wieder!</p>
</template>

<style scoped>
h2 {
  margin-left: .7rem;
}

h3 {
  font-size: 120%;
}

h3, p {
  text-align: center;
}

.img-container {
  max-width: 400px;
  margin: 0 auto;
}

img {
  width: 100%;
}
</style>