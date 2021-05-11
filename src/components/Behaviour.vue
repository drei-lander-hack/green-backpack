<script lang="ts">
import { defineComponent } from 'vue'
import suggestions from "../data/suggestions"
import { useStore } from 'vuex'

const component = defineComponent({
  setup() {
    const store = useStore()
    return { store }
  },

  data() {
    return {
      suggestions,
    }
  },

  methods: {
    mySuggestions() {
      return this.suggestions.filter(suggestion => {
        return suggestion.who.includes(this.store.state.userProfile.foodCategory)
      })
    }
  }
})

export default component
</script>

<template>
  <div class="container">
    <h2>Dein Verhalten optimieren</h2>

    <p>
      Diese Vorschläge haben wir für dich:
    </p>

    <div class="row">
      <div v-for="suggestion in mySuggestions()" :key="suggestion.title" class="col-md-4 col-sm-1">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ suggestion.title }}</h5>
            <p class="card-text">{{ suggestion.description }}</p>
            <details v-if="suggestion.moreInfo">
              <summary>ⓘ</summary>
              <p>{{ suggestion.moreInfo }}</p>
            </details>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  height: 100%;

  .card-body {
    display: flex;
    flex-direction: column;

    .btn-container {
      flex-grow: 1;
      align-items: end;
      padding-top: 1rem;
    }
  }
}

details {
  font-size: 80%;
}

summary {
  list-style: none;
  font-size: 100%;
}

details > summary::-webkit-details-marker {
  display: none;
}
</style>
