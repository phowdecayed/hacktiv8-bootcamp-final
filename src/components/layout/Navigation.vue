<script setup lang="ts">
import { ref } from 'vue'
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
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, Shield, LogOut } from 'lucide-vue-next'

defineOptions({
  name: 'SiteNavigation',
})

const auth = useAuthStore()
const isMobileMenuOpen = ref(false)

const routes = [
  { name: 'Beranda', path: '/' },
  { name: 'Tentang', path: '/about' },
  { name: 'Produk', path: '/products' },
  { name: 'Portofolio', path: '/portfolio' },
  { name: 'Kontak', path: '/contact' },
]
</script>

<template>
  <div>
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-1">
      <Button v-for="route in routes" :key="route.path" variant="ghost" asChild>
        <RouterLink
          :to="route.path"
          class="px-3 py-2 text-sm font-medium transition-colors"
          active-class="text-primary"
          exact-active-class="text-primary"
        >
          {{ route.name }}
        </RouterLink>
      </Button>
      <template v-if="!auth.isLoggedIn">
        <Button variant="ghost" asChild>
          <RouterLink to="/login" class="px-3 py-2 text-sm font-medium">Login</RouterLink>
        </Button>
        <Button asChild>
          <RouterLink to="/register" class="px-3 py-2 text-sm font-medium">Register</RouterLink>
        </Button>
      </template>
      <template v-else>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="relative h-9 w-9 rounded-full">
              <Avatar class="h-9 w-9">
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
              <RouterLink to="/protected" class="flex items-center">
                <Shield class="mr-2 h-4 w-4" />
                <span>Protected Page</span>
              </RouterLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="auth.logout()" class="flex items-center">
              <LogOut class="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </template>
    </nav>

    <!-- Mobile Navigation -->
    <div class="md:hidden">
      <Sheet v-model:open="isMobileMenuOpen">
        <SheetTrigger as-child>
          <Button variant="ghost" size="icon">
            <Menu class="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" class="w-[280px]">
          <nav class="flex flex-col space-y-4 mt-8">
            <RouterLink
              v-for="route in routes"
              :key="`mobile-${route.path}`"
              :to="route.path"
              class="text-lg font-medium"
              active-class="text-primary"
              exact-active-class="text-primary"
              @click="isMobileMenuOpen = false"
            >
              {{ route.name }}
            </RouterLink>
            <hr />
            <template v-if="!auth.isLoggedIn">
              <RouterLink to="/login" class="text-lg font-medium" @click="isMobileMenuOpen = false">Login</RouterLink>
              <RouterLink to="/register" class="text-lg font-medium" @click="isMobileMenuOpen = false">Register</RouterLink>
            </template>
            <template v-else>
              <div class="pt-4">
                <div class="flex items-center mb-4">
                  <Avatar class="h-10 w-10 mr-3">
                    <AvatarImage src="https://i.pravatar.cc/150" alt="User Avatar" />
                    <AvatarFallback>{{ auth.user?.charAt(0).toUpperCase() }}</AvatarFallback>
                  </Avatar>
                  <p class="font-medium">Welcome, {{ auth.user }}</p>
                </div>
                <RouterLink to="/protected" class="flex items-center text-lg font-medium mb-2" @click="isMobileMenuOpen = false">
                  <Shield class="mr-2 h-5 w-5" />
                  <span>Protected Page</span>
                </RouterLink>
                <a @click="auth.logout(); isMobileMenuOpen = false" class="flex items-center text-lg font-medium cursor-pointer">
                  <LogOut class="mr-2 h-5 w-5" />
                  <span>Log out</span>
                </a>
              </div>
            </template>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>