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

  <img :src="baustelle" />
  <h3>Dieser Bereich ist noch nicht ganz fertig.</h3>

  <p>Komm' doch einfach später noch mal wieder!</p>
</template>

<style scoped>
h3 {
  font-size: 110%;
}

img {
  width: 100%;
  padding: 20%;
}
</style>