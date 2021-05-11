<script lang="ts">
import { defineComponent } from 'vue'
import challenges from "../data/challenges"
import { useStore } from 'vuex'
import Card from "./Card.vue"
import { mutationTypes } from '../store'

const component = defineComponent({
  components: { Card },

  setup() {
    const store = useStore()
    return { store }
  },

  data() {
    return {
      challenges,
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const c = (vm as unknown as typeof component)
      c.$store.commit(mutationTypes.minimizeMainImage())
    })
  },

  methods: {
    accept() {
      this.$router.push("/happy")
    }
  }
})

export default component
</script>

<template>
  <div class="container">
    <h2>Challenges</h2>

    <p>
      Stelle dich den Herausforderungen:
    </p>

    <div class="row">
      <Card v-for="(challenge, index) in challenges" :key="index" :title="challenge.title">
        <p class="card-text">{{ challenge.description }}</p>
        <div class="btn-container">
          <a href="#" class="btn btn-primary" @click.prevent="accept">Annehmen</a>
        </div>
      </Card>
    </div>
  </div>
</template>
