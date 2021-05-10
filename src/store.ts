import { ActionContext, createStore, storeKey } from "vuex"

type UserProfile = {
  foodCategory?: string
}

const userProfile = localStorage.getItem("userProfile")
const emptyUserProfile = {
  foodCategory: undefined
} as UserProfile

const state = {
  sections: [
    "Dienstreisen",
    "Arbeitsweg",
    "Mittagessen",
  ],
  maxMainImg: true,
  userProfile: userProfile ? JSON.parse(userProfile) as UserProfile : emptyUserProfile
}

type State = typeof state

const mutations = {
  minimizeMainImage(state: State) {
    state.maxMainImg = false
  },

  maximizeMainImage(state: State) {
    state.maxMainImg = true
  },

  setUserProfile(state: State, newProfile: UserProfile) {
    state.userProfile = newProfile
  }
}

export const mutationTypes = {
  minimizeMainImage() {
    return { type: "minimizeMainImage" }
  },

  maximizeMainImage() {
    return { type: "maximizeMainImage" }
  },

  setUserProfile(newProfile: UserProfile) {
    return { type: "setUserProfile", newProfile }
  }
}

export const actions = {
  foodCategorySelected(context: ActionContext<State, State>, payload: { id: string }): void {
    const profile = { ...context.state.userProfile, foodCategory: payload.id }
    localStorage.setItem("userProfile", JSON.stringify(profile))
    context.commit(mutationTypes.setUserProfile(profile))
  }
}

export const actionTypes = {
  foodCategorySelected(id: string) {
    return { type: "foodCategorySelected", id }
  }
}

export default createStore({ state, mutations, actions })
