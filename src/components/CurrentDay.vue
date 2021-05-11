<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {

  },
})
</script>

<template>
  <div class="container">
    <h2>Wie läuft dein Tag?</h2>

    <p>
      Hast du dein Vorhaben durchgehalten?
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
}
</style>
