<script lang="ts">
import { defineComponent } from 'vue'
import { actionTypes, mutationTypes } from "../store"
import foodCategories from "../data/food-categories"
import RadioButton from "./RadioButton.vue"
import { useStore } from 'vuex'
import Comparison from "./Comparison.vue"
import referenceValues, { workDaysPerYear } from "../data/referenceValues"

const component = defineComponent({
  components: {
    RadioButton,
    Comparison,
  },

  setup() {
    const store = useStore()
    return { store, referenceValues }
  },

  data() {
    return {
      foodCategories,
    }
  },

  computed: {
    co2value(): number {
      const category = this.store.state.userProfile.foodCategory as keyof typeof foodCategories
      if (!category) {
        return 0
      }
      return Math.round(foodCategories[category].co2 * workDaysPerYear)
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
    },

    challenges(): void {
      this.$router.push("/section/Mittagessen/challenges")
    }
  }
})

export default component
</script>

<template>
  <div class="container">
    <h2>Mittagessen</h2>

    <p>
      Wie ordnest du dein Verhalten aktuell ein?
    </p>

    <div v-for="(category, id) in foodCategories" :key="id">
      <RadioButton :id="id" name="foodCategory" :title="category.title"
        @select="selected"
        :checked="isChecked(id)"
      />
    </div>

    <Comparison v-if="co2value" :value="co2value" :reference="referenceValues.foodAverage" />

    <div class="btn-group">
      <button type="button" class="btn btn-primary" @click="challenges">Zu den Challenges</button>
    </div>
  </div>
</template>

<style scoped>
  .btn-group {
    margin-top: 1rem;
  }
</style>