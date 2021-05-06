import { createStore } from "vuex"

const state = {
  sections: [
    "Dienstreisen",
    "Arbeitsweg",
    "Mittagessen",
  ],
  maxMainImg: true,
}

type State = typeof state

const mutations = {
  minimizeMainImage(state: State) {
    state.maxMainImg = false
  },

  maximizeMainImage(state: State) {
    state.maxMainImg = true
  },
}

export const mutationTypes = {
  minimizeMainImage() {
    return { type: "minimizeMainImage" }
  },

  maximizeMainImage() {
    return { type: "maximizeMainImage" }
  }
}

export default createStore({ state, mutations })
