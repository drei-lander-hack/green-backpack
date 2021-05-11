<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String
  }
})
</script>

<template>
  <div class="col-md-4 col-sm-1">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <slot />
      </div>
    </div>
  </div>
</template>
