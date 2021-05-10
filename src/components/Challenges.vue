<script lang="ts">
import { defineComponent } from 'vue'
import suggestions from "../data/suggestions"
import { useStore } from 'vuex'

const component = defineComponent({
  setup() {
    const store = useStore()
    return { store }
  },

  data() {
    return {
      suggestions,
    }
  },
})

export default component
</script>

<template>
  <div class="container">
    <h2>Challenges</h2>

    <p>
      Diese Vorschläge haben wir für dich:
    </p>

    <div v-for="suggestion in suggestions" :key="suggestion.title">
      {{ suggestion.title }}
    </div>
  </div>
</template>

<style scoped>
</style>
