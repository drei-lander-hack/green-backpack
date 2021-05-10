<script lang="ts">
import { defineComponent } from 'vue'
import { actionTypes, mutationTypes } from "../store"
import foodCategories from "../data/food-categories"
import RadioButton from "./RadioButton.vue"
import { useStore } from 'vuex'

const component = defineComponent({
  components: {
    RadioButton,
  },

  setup() {
    const store = useStore()
    return { store }
  },

  data() {
    return {
      foodCategories,
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const c = (vm as unknown as typeof component)
      c.$store.commit(mutationTypes.minimizeMainImage())
    })
  },

  methods: {
    selected(id: string): void {
      this.store.dispatch(actionTypes.foodCategorySelected(id))
    },

    isChecked(id: string): boolean {
      return id === this.store.state.userProfile.foodCategory
    }
  }
})

export default component
</script>

<template>
  <h2>Mittagessen</h2>

  <p>
    Wie ordnest du dein Verhalten aktuell ein?
  </p>

  <div v-for="category in foodCategories" :key="category.title">
    <RadioButton :id="category.title" name="foodCategory" :title="category.title"
      @select="selected"
      :checked="isChecked(category.title)"
    />
  </div>
</template>

<style scoped>
ul {
  text-align: left;

}
</style>
