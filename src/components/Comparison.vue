<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts"
import { mutationTypes } from '../store'

const component = defineComponent({
  components: {
    VueApexCharts,
  },

  props: {
    value: Number,
    reference: Number,
  },

  data() {
    return {
      options: {
        chart: {
          id: "vuechart",
        },
        xaxis: {
          categories: ["Du", "Durchschnitt"],
        },
        yaxis: {
          title: {
            text: "CO2 Äquivalente in kg pro Jahr"
          }
        },
        colors: ["#348a13"]
      },
    }
  },

  computed: {
    series(): { name: string, data: number[] }[] {
      return [{
        name: "series-1",
        data: [this.value, this.reference] as number[]
      }]
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      const c = (vm as unknown as typeof component)
      c.$store.commit(mutationTypes.minimizeMainImage())
    })
  },
})

export default component
</script>

<template>
  <VueApexCharts
    type="bar"
    :options="options"
    :series="series"
  />
</template>

<style lang="scss" scoped>
.vue-apexcharts {
  margin-top: 1rem;
  max-width: 500px;
}
</style>