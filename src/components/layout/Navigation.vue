<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
      <DropdownMenu>
        <DropdownMenuTrigger as-child>
          <Button variant="ghost" class="relative h-8 w-8 rounded-full">
            <Avatar class="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/150" alt="User Avatar" />
              <AvatarFallback>{{ auth.user?.charAt(0).toUpperCase() }}</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent class="w-56" align="end">
          <DropdownMenuLabel class="font-normal">
            <div class="flex flex-col space-y-1">
              <p class="text-sm font-medium leading-none">Welcome, {{ auth.user }}</p>
            </div>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <RouterLink to="/protected">Protected Page</RouterLink>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem @click="auth.logout()">
            Log out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </template>
  </nav>
</template>
