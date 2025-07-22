<script setup lang="ts">
import Navigation from '@/components/layout/Navigation.vue'
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'
import { RouterLink } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

defineOptions({
  name: 'SiteHeader'
})

const { y } = useScroll(window)
const auth = useAuthStore()

const hasScrolled = computed(() => y.value > 20)

const userInitials = computed(() => {
  if (auth.user) {
    return auth.user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
  }
  return ''
})
</script>

<template>
  <header
    class="sticky top-0 z-50 w-full border-b transition-colors duration-300"
    :class="
      hasScrolled
        ? 'bg-background/80 backdrop-blur-sm border-border'
        : 'bg-transparent border-transparent'
    "
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo and Title -->
        <div class="flex items-center">
          <RouterLink to="/" class="flex-shrink-0 flex items-center gap-2">
            <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
            <h1 class="text-xl font-bold text-foreground hidden sm:block">MINIMALIST</h1>
          </RouterLink>
        </div>

        <!-- Navigation and Auth -->
        <div class="flex items-center gap-4">
          <Navigation :has-scrolled="hasScrolled" />

          <!-- Auth Section -->
          <div v-if="auth.isLoggedIn && auth.user">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage :src="`https://api.dicebear.com/6.x/initials/svg?seed=${auth.user.name}`" />
                  <AvatarFallback>{{ userInitials }}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <RouterLink to="/profile">Profile</RouterLink>
                </DropdownMenuItem>
                <DropdownMenuItem v-if="auth.user.email === 'admin@example.com'">
                  <RouterLink to="/admin-inbox">Admin Inbox</RouterLink>
                </DropdownMenuItem>
                <DropdownMenuItem @click="auth.logout">Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div v-else class="flex items-center gap-2">
            <Button as-child variant="ghost">
              <RouterLink to="/login">Login</RouterLink>
            </Button>
            <Button as-child>
              <RouterLink to="/register">Register</RouterLink>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>