<script lang="ts">
import { defineComponent } from 'vue'
import VueApexCharts from "vue3-apexcharts"

export default defineComponent({
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
          categories: ["Dein CO2-Ausstoß pro Jahr", "Durchschnitt pro Jahr"],
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
  }
})
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