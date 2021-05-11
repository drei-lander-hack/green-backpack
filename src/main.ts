import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import MainPage from "./components/MainPage.vue"
import Section from "./components/Section.vue"
import FoodSection from "./components/FoodSection.vue"
import Behaviour from "./components/Behaviour.vue"
import Challenges from "./components/Challenges.vue"
import store from './store'

const routes = [
  { path: "/", component: MainPage },
  { path: "/section/Mittagessen", component: FoodSection },
  { path: "/section/:section/behaviour", component: Behaviour },
  { path: "/section/:section/challenges", component: Challenges },
  { path: "/section/:section", component: Section },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
