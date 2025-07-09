import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUiStore = defineStore('ui', () => {
  // Gunakan preferensi pengguna dari localStorage atau sistem operasi sebagai default
  const getDefaultTheme = (): 'light' | 'dark' => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }
    // Periksa preferensi sistem
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const theme = ref<'light' | 'dark'>(getDefaultTheme())

  // Terapkan tema saat inisialisasi
  const applyTheme = (newTheme: 'light' | 'dark') => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    // Simpan ke localStorage untuk persisten
    localStorage.setItem('theme', newTheme)
  }

  // Terapkan tema saat pertama kali
  applyTheme(theme.value)

  // Function untuk toggle tema
  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme(theme.value)
  }

  // Function untuk mengubah tema secara langsung
  function setTheme(newTheme: 'light' | 'dark') {
    theme.value = newTheme
    applyTheme(theme.value)
  }

  return { theme, toggleTheme, setTheme }
})
