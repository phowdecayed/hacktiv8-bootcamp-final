<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { Facebook, Twitter, Instagram, Linkedin, Moon, Sun } from 'lucide-vue-next'
import { useUiStore } from '@/stores/ui'
import { computed } from 'vue'

defineOptions({
  name: 'SiteFooter',
})

const uiStore = useUiStore()
const isDark = computed(() => uiStore.theme === 'dark')

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
            @click="uiStore.toggleTheme"
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
</style>
