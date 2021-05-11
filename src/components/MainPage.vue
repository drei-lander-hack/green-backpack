<script lang="ts">
import { defineComponent } from 'vue'
import { useStore, mapState } from 'vuex'
import { mutationTypes } from '../store'

const component = defineComponent({
  setup() {
    const store = useStore()

    return { store }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const c = (vm as unknown as typeof component)
      c.$store.commit(mutationTypes.maximizeMainImage())
    })
  },

  computed: {
    ...mapState(["sections"])
  }
})

export default component
</script>

<template>
  <p>
    Entscheide, an welchen Stellschrauben Du deinen Rucksack verändern willst:
  </p>

  <div class="sections">
    <router-link :to="'/section/' + section" class="btn btn-primary" v-for="section in sections" :key="section">{{ section }}</router-link>
  </div>
</template>

<style lang="scss" scoped>
p {
  text-align: center;
}

.sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1024px;
  margin: 0 auto;

  .btn {
    margin: .5rem;
  }
}
</style>
