<script lang="ts">
import { defineComponent } from 'vue'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()

    return { store }
  },

  computed: {
    ...mapState(["sections"])
  }
})
</script>

<template>
  <h1>Der Grüne Rucksack</h1>

  <p>
    Entscheide, an welchen Stellschrauben Du deinen Rucksack verändern willst:
  </p>

  <div class="sections">
    <div v-for="section in sections" :key="section">
      {{ section }}
    </div>
  </div>

  <div class="copyright">
    Bild von http://pngimg.com/image/6353 unter CC-BY 4.0
  </div>

</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}

.sections {
  display: flex;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;

  div {
    border: 1px solid #aaaaaa;
    padding: .5em 1em;
    margin: .5em;
    cursor: pointer;

    &:hover {
      background-color: #eeeeee;
    }
  }
}

.copyright {
  position: fixed;
  right: 2px;
  bottom: 2px;
  font-size: 0.8rem;
}
</style>
