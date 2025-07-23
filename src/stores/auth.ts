import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import api from '@/lib/axios'
import axios from 'axios'

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
      // The router push is removed from here
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
      // We will handle the redirect in the component where logout is called.
      // For now, we assume a page reload or manual navigation will occur.
    }
  }

  async function resendVerificationEmail(): Promise<boolean> {
    try {
      await api.post('/api/email/verification-notification')
      return true
    } catch (error) {
      console.error('Failed to resend verification email', error)
      return false
    }
  }

  async function verifyEmail(verificationUrl: string): Promise<boolean> {
    try {
      let secureVerificationUrl = verificationUrl
      if (!verificationUrl.includes('localhost') && !verificationUrl.includes('127.0.0.1')) {
        secureVerificationUrl = verificationUrl.replace('http://', 'https://')
      }
      // Use a direct axios call, not the configured api instance
      await axios.get(secureVerificationUrl)
      // If the user is logged in, refresh their data to show the verified status
      if (isLoggedIn.value) {
        await fetchUser()
      }
      return true
    } catch (error) {
      console.error('Email verification failed', error)
      return false
    }
  }

  return {
    user,
    token,
    isLoggedIn,
    isInitialized,
    initAuth,
    register,
    login,
    logout,
    fetchUser,
    resendVerificationEmail,
    verifyEmail
  }
})