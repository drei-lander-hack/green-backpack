import { createApp } from 'vue'
import { createStore } from "vuex"
import App from './App.vue'

const state = {
  sections: [
    "Dienstreisen",
    "Arbeitsweg",
    "Mittagessen",
  ]
}

const store = createStore({ state })
const app = createApp(App)

app.use(store)

app.mount('#app')
