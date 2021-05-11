<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
})
</script>

<template>
  <button type="button" class="btn btn-outline-secondary" @click="$emit('click')">
    <slot />
  </button>
</template>