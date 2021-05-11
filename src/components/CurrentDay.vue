<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { mutationTypes } from '../store'

const component = defineComponent({
  setup() {
    const store = useStore()
    return { store }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const c = (vm as unknown as typeof component)
      c.$store.commit(mutationTypes.minimizeMainImage())
    })
  },

  computed: {
    plan(): string {
      return this.store.state.plan
    }
  }
})

export default component
</script>

<template>
  <div class="container">
    <h2>Wie läuft dein Tag?</h2>

    <p>
      Du hast dir vorgenommen, durch deine Essgewohnheiten CO2 einzusparen.
    </p>

    <p>
      Hast du dein Vorhaben "{{ plan }}" durchgehalten?
    </p>

    <div class="btn-list">
      <a href="#/" class="btn btn-primary">Ja</a>
      <a href="#/" class="btn btn-primary">Nein</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-list {
  max-width: 300px;
  padding: 0 2rem;
}
</style>
