<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({})
</script>

<template>
  <h1>Der Grüne Rucksack</h1>

  <p>
    Entscheide, an welchen Stellschrauben Du deinen Rucksack verändern willst:
  </p>

  <ul>
    <li>Dienstreisen</li>
    <li>Arbeitsweg</li>
    <li>Mittagessen</li>
  </ul>

  <copyright>
    Bild von http://pngimg.com/image/6353 unter CC-BY 4.0
  </copyright>

</template>

<style scoped>
a {
  color: #42b983;
}

ul {
  max-width: 320px;
  margin: 1rem auto;
  text-align: left;
}

copyright {
  position: fixed;
  right: 2px;
  bottom: 2px;
  font-size: 0.8rem;
}
</style>
