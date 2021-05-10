import { ActionContext, createStore } from "vuex"

const version = 1

type UserProfile = {
  foodCategory?: string
}

const appInfo = localStorage.getItem("app")
if (!appInfo) {
  localStorage.removeItem("userProfile")
}
localStorage.setItem("app", JSON.stringify({ version }))

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

  setUserProfile(state: State, payload: { profile: UserProfile }) {
    state.userProfile = payload.profile
  }
}

export const mutationTypes = {
  minimizeMainImage() {
    return { type: "minimizeMainImage" }
  },

  maximizeMainImage() {
    return { type: "maximizeMainImage" }
  },

  setUserProfile(profile: UserProfile) {
    return { type: "setUserProfile", profile }
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
