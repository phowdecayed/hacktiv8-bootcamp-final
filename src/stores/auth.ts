import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(localStorage.getItem('user'))
  const router = useRouter()

  const isLoggedIn = computed(() => !!user.value)

  function login(username, password) {
    if (username === 'admin' && password === 'admin') {
      user.value = 'admin'
      localStorage.setItem('user', 'admin')
      router.push('/protected')
      return true
    }
    return false
  }

  function logout() {
    user.value = null
    localStorage.removeItem('user')
    router.push('/')
  }

  return { user, isLoggedIn, login, logout }
})
