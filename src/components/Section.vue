<script lang="ts">
import { defineComponent } from 'vue'
import { mutationTypes } from "../store"

const component = defineComponent({
  data() {
    return {
      section: "",
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

  <h3>Dein Status</h3>

  <ul>
    <li>...</li>
    <li>...</li>
  </ul>

  <h3>Vorschläge</h3>

  <ul>
    <li>...</li>
    <li>...</li>
  </ul>
</template>

<style scoped>
ul {
  text-align: left;

}
</style>