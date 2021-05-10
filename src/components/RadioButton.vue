<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    id: String,
    name: String,
    title: String,
    checked: Boolean,
  },
})
</script>

<template>
  <div class="form-check">
    <input class="form-check-input" type="radio" :name="name" :id="id" @change="$emit('select', id)" :checked="checked">
    <label class="form-check-label" :for="id">
      {{ title }}
    </label>
  </div>
</template>
