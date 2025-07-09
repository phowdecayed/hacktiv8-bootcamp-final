<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'

defineOptions({
  name: 'SiteNavigation',
})

const auth = useAuthStore()

const routes = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/about' },
  { name: 'Produk', path: '/products' },
  { name: 'Portofolio', path: '/portfolio' },
  { name: 'Kontak', path: '/contact' },
]
</script>

<template>
  <nav class="flex items-center space-x-2">
    <Button v-for="route in routes" :key="route.path" variant="ghost" asChild>
      <RouterLink :to="route.path" class="px-2 py-1 text-sm font-medium">
        {{ route.name }}
      </RouterLink>
    </Button>
    <template v-if="!auth.isLoggedIn">
      <Button variant="ghost" asChild>
        <RouterLink to="/login" class="px-2 py-1 text-sm font-medium">Login</RouterLink>
      </Button>
      <Button asChild>
        <RouterLink to="/register" class="px-2 py-1 text-sm font-medium">Register</RouterLink>
      </Button>
    </template>
    <template v-else>
      <Button @click="auth.logout()" variant="outline">Logout</Button>
    </template>
  </nav>
</template>