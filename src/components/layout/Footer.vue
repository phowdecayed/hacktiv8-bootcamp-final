<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { Facebook, Twitter, Instagram, Linkedin, Moon, Sun } from 'lucide-vue-next'
import { useUiStore } from '@/stores/ui'
import { computed, onMounted } from 'vue'

defineOptions({
  name: 'SiteFooter',
})

const uiStore = useUiStore()
const isDark = computed(() => uiStore.theme === 'dark')

// Fungsi untuk menerapkan efek transisi tema
const applyThemeTransition = () => {
  // Tambahkan kelas transisi ke element html
  document.documentElement.classList.add('theme-transition')

  // Hapus kelas setelah transisi selesai untuk menghindari transisi saat reload
  setTimeout(() => {
    document.documentElement.classList.remove('theme-transition')
  }, 800)

  // Toggle tema
  uiStore.toggleTheme()
}

onMounted(() => {
  // Inisialisasi transisi tema
  document.documentElement.classList.add('theme-transition-init')
})

const companyLinks = [
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/products' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
]

const legalLinks = [
  { name: 'Privacy Policy', path: '/privacy-policy' },
  { name: 'Terms of Service', path: '/terms-of-service' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, path: '#' },
  { name: 'Twitter', icon: Twitter, path: '#' },
  { name: 'Instagram', icon: Instagram, path: '#' },
  { name: 'LinkedIn', icon: Linkedin, path: '#' },
]
</script>

<template>
  <footer class="bg-muted/20 text-muted-foreground">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="md:col-span-1">
          <h3 class="text-lg font-semibold text-foreground mb-4">MIMINALIST</h3>
          <p class="text-sm">Building the future, one component at a time.</p>
        </div>

        <!-- Links -->
        <div>
          <h3 class="text-sm font-semibold tracking-wider uppercase text-foreground">Company</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="link in companyLinks" :key="link.name">
              <RouterLink :to="link.path" class="hover:text-primary transition-colors">{{
                link.name
              }}</RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-sm font-semibold tracking-wider uppercase text-foreground">Legal</h3>
          <ul class="mt-4 space-y-2">
            <li v-for="link in legalLinks" :key="link.name">
              <RouterLink :to="link.path" class="hover:text-primary transition-colors">{{
                link.name
              }}</RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Admin -->
        <div>
          <h3 class="text-sm font-semibold tracking-wider uppercase text-foreground">Contact Us</h3>
          <p class="mt-4 text-sm">
            Have a question, suggestion, or need help? Feel free to reach out.
          </p>
          <div class="mt-4">
            <RouterLink to="/contact">
              <Button>Contact Us</Button>
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div
        class="mt-16 pt-8 border-t border-border/50 flex flex-col sm:flex-row justify-between items-center"
      >
        <p class="text-sm">
          &copy; {{ new Date().getFullYear() }} MIMINALIST. All rights reserved.
        </p>

        <div class="flex items-center space-x-4 mt-4 sm:mt-0">
          <!-- Social Media Icons -->
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.path"
            class="hover:text-primary transition-colors"
          >
            <span class="sr-only">{{ social.name }}</span>
            <component :is="social.icon" class="h-5 w-5" />
          </a>
          <!-- Theme Toggle Button -->
          <button
            @click="applyThemeTransition"
            class="theme-toggle p-2 rounded-full hover:bg-muted/50 transition-all duration-300 relative overflow-hidden"
            :class="{ 'theme-toggle-active': isDark }"
            aria-label="Toggle Theme"
          >
            <Sun
              class="h-5 w-5 text-yellow-500 absolute transform transition-all duration-500 ease-spring"
              :class="isDark ? 'rotate-180 opacity-0 scale-0' : 'rotate-0 opacity-100 scale-100'"
            />
            <Moon
              class="h-5 w-5 text-blue-400 absolute transform transition-all duration-500 ease-spring"
              :class="isDark ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-0'"
            />
            <span class="theme-ripple" :class="{ 'ripple-active': isDark }"></span>
          </button>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.theme-toggle {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  position: relative;
}

.theme-toggle:hover {
  border-color: var(--border);
  box-shadow: 0 0 8px rgba(var(--primary), 0.2);
}

.theme-toggle-active {
  background: rgba(var(--primary), 0.1);
}

@keyframes pulse {
  0%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
}

/* Efek cahaya pada ikon matahari */
.theme-toggle:hover .h-5.text-yellow-500 {
  filter: drop-shadow(0 0 3px rgba(255, 200, 0, 0.7));
}

/* Efek bercahaya pada ikon bulan */
.theme-toggle:hover .h-5.text-blue-400 {
  filter: drop-shadow(0 0 3px rgba(100, 150, 255, 0.7));
}

.theme-toggle:active {
  transform: scale(0.95);
}

/* Custom easing spring effect for transitions */
.ease-spring {
  transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

/* Theme ripple effect */
.theme-ripple {
  position: absolute;
  width: 0%;
  height: 0%;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(100, 150, 255, 0.8) 0%, rgba(70, 120, 220, 0) 70%);
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  transition: all 0.6s cubic-bezier(0.5, 1.8, 0.5, 0.8);
  opacity: 0;
  z-index: -1;
}

.ripple-active {
  width: 250%;
  height: 250%;
  opacity: 0.15;
}
</style>

<style>
/* Global transition styles */
.theme-transition-init {
  transition: none !important;
}

.theme-transition,
.theme-transition * {
  transition:
    background-color 0.5s ease,
    color 0.5s ease,
    border-color 0.5s ease,
    box-shadow 0.5s ease !important;
}

/* Tambahkan gaya animasi untuk perubahan tema secara global */
body {
  transition-property: background-color, color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}

/* Animasi untuk kartu dan elemen dengan latar */
.card,
.bg-card,
.bg-muted,
.bg-background,
.bg-primary,
.bg-secondary {
  transition:
    background-color 0.5s ease,
    box-shadow 0.5s ease,
    transform 0.3s ease;
}

/* Animasi untuk border */
[class*='border'] {
  transition: border-color 0.5s ease;
}

/* Efek halus pada hover selama transisi tema */
button:hover,
a:hover,
.hover\:bg-muted:hover {
  transition: all 0.3s ease;
}
</style>
