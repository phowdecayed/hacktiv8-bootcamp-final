import './assets/main.css'
import 'vue-sonner/style.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Toaster } from 'vue-sonner'

import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Initialize auth store
const authStore = useAuthStore()

// Initialize auth and then mount the app
authStore.initAuth().then(() => {
  app.use(router)

  // Add the Toaster component to the app instance
  app.component('ToasterNotification', Toaster)

  app.mount('#app')
})