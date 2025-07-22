import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/lib/axios'

// Define an interface for the user object
interface User {
  id: number
  name: string
  email: string
  email_verified_at: string | null
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const token = ref<string | null>(localStorage.getItem('token'))
  const isInitialized = ref(false)
  const router = useRouter()

  const isLoggedIn = computed(() => !!user.value)

  async function initAuth() {
    if (isInitialized.value) return
    if (token.value) {
      await fetchUser()
    }
    isInitialized.value = true
  }

  async function register(
    name: string,
    email: string,
    password: string,
    password_confirmation: string
  ): Promise<{ success: boolean; message: string; errors?: any }> {
    try {
      await api.post('/api/register', { name, email, password, password_confirmation })
      return { success: true, message: 'Registration successful! Please log in.' }
    } catch (error: any) {
      return { success: false, message: 'Registration failed.', errors: error.response.data.errors }
    }
  }

  async function login(email: string, password: string): Promise<boolean> {
    try {
      const response = await api.post('/api/login', { email, password })
      const responseToken = response.data.access_token
      token.value = responseToken
      localStorage.setItem('token', responseToken)
      await fetchUser()
      router.push('/profile')
      return true
    } catch (error) {
      return false
    }
  }

  async function fetchUser() {
    try {
      const response = await api.get('/api/user')
      user.value = response.data
    } catch (error) {
      user.value = null
      token.value = null
      localStorage.removeItem('token')
    }
  }

  async function logout(): Promise<void> {
    try {
      await api.post('/api/logout')
    } catch (error) {
      console.error('Logout failed', error)
    } finally {
      user.value = null
      token.value = null
      localStorage.removeItem('token')
      router.push('/')
    }
  }

  return { user, token, isLoggedIn, isInitialized, initAuth, register, login, logout, fetchUser }
})
