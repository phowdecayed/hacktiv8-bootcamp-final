import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

// Define an interface for the user object
interface User {
  username: string
  password: string // This will be the hashed password
}

// Helper function to hash passwords using the SubtleCrypto API
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await window.crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
  return hashHex
}

export const useAuthStore = defineStore('auth', () => {
  const user = ref<string | null>(localStorage.getItem('user'))
  const router = useRouter()

  const isLoggedIn = computed(() => !!user.value)

  async function register(
    username: string,
    password: string,
  ): Promise<{ success: boolean; message: string }> {
    if (!username || !password) {
      return { success: false, message: 'Username and password are required.' }
    }
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
    const existingUser = users.find((u: User) => u.username === username)

    if (existingUser) {
      return { success: false, message: 'Username already exists.' }
    }

    const hashedPassword = await hashPassword(password)
    users.push({ username, password: hashedPassword })
    localStorage.setItem('users', JSON.stringify(users))
    return { success: true, message: 'Registration successful! Please log in.' }
  }

  async function login(username: string, password: string): Promise<boolean> {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]')
    const hashedPassword = await hashPassword(password)

    // Add default admin user if not present
    const adminUserExists = users.some((u: User) => u.username === 'admin')
    if (!adminUserExists) {
      const adminHashedPassword = await hashPassword('admin')
      users.push({ username: 'admin', password: adminHashedPassword })
      localStorage.setItem('users', JSON.stringify(users))
    }

    const foundUser = users.find(
      (u: User) => u.username === username && u.password === hashedPassword,
    )

    if (foundUser) {
      user.value = foundUser.username
      localStorage.setItem('user', foundUser.username)
      router.push('/protected')
      return true
    }
    return false
  }

  function logout(): void {
    user.value = null
    localStorage.removeItem('user')
    router.push('/')
  }

  return { user, isLoggedIn, register, login, logout }
})
