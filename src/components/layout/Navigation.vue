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
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetFooter,
} from '@/components/ui/sheet'
import {
  Menu,
  Shield,
  LogOut,
  Home,
  Info,
  Package,
  Briefcase,
  Mail,
  LogIn,
  UserPlus,
  BookOpen,
} from 'lucide-vue-next'
import { motion } from 'motion-v'

defineOptions({
  name: 'SiteNavigation',
})

const auth = useAuthStore()
const isMobileMenuOpen = ref(false)

const routes = [
  { name: 'Beranda', path: '/', icon: Home },
  { name: 'Tentang', path: '/about', icon: Info },
  { name: 'Produk', path: '/products', icon: Package },
  { name: 'Portofolio', path: '/portfolio', icon: Briefcase },
  { name: 'Blog', path: '/blog', icon: BookOpen },
  { name: 'Kontak', path: '/contact', icon: Mail },
]
</script>

<template>
  <div>
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-2">
      <RouterLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        class="relative px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        active-class="text-primary"
      >
        <span>{{ route.name }}</span>
        <span
          class="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 transition-transform duration-300 ease-in-out"
          :class="{ 'scale-x-100': $route.path === route.path }"
        ></span>
      </RouterLink>

      <div class="w-1"></div>

      <template v-if="!auth.isLoggedIn">
        <Button variant="ghost" size="sm" asChild>
          <RouterLink to="/login">Login</RouterLink>
        </Button>
        <Button size="sm" asChild>
          <RouterLink to="/register">Register</RouterLink>
        </Button>
      </template>
      <template v-else>
        <DropdownMenu>
          <DropdownMenuTrigger as-child>
            <Button variant="ghost" class="relative rounded-full h-9 w-9">
              <Avatar class="h-9 w-9">
                <AvatarImage src="https://i.pravatar.cc/150" alt="User Avatar" />
                <AvatarFallback>{{ auth.user?.charAt(0).toUpperCase() }}</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent class="w-56" align="end">
            <DropdownMenuLabel class="font-normal">
              <p class="text-sm font-medium leading-none">Welcome, {{ auth.user }}</p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <RouterLink to="/protected" class="flex items-center">
                <Shield class="mr-2 h-4 w-4" />
                <span>Protected Page</span>
              </RouterLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              @click="auth.logout()"
              class="flex items-center cursor-pointer text-destructive focus:text-destructive"
            >
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
        <SheetContent side="right" class="w-[300px] flex flex-col p-0">
          <SheetHeader class="p-4 text-center border-b bg-muted/50">
            <SheetTitle class="flex items-center justify-center gap-2">
              <img src="@/assets/logo.svg" alt="Logo" class="h-7 w-auto" />
              <span class="font-bold text-xl tracking-wider">MINIMALIST</span>
            </SheetTitle>
            <SheetDescription> Navigate our world. </SheetDescription>
          </SheetHeader>
          <div class="flex-grow mt-4 p-4">
            <nav class="flex flex-col space-y-2">
              <motion.div
                v-for="(route, index) in routes"
                :key="`mobile-${route.path}`"
                :initial="{ opacity: 0, x: -20 }"
                :animate="{ opacity: 1, x: 0 }"
                :transition="{ duration: 0.5, delay: 0.1 * index }"
              >
                <RouterLink
                  :to="route.path"
                  class="flex items-center gap-3 rounded-lg px-3 py-3 text-muted-foreground transition-all hover:text-primary hover:bg-primary/5"
                  active-class="text-primary bg-primary/5"
                  exact-active-class="text-primary bg-primary/5"
                  @click="isMobileMenuOpen = false"
                >
                  <component :is="route.icon" class="h-5 w-5" />
                  <span class="text-base font-medium">{{ route.name }}</span>
                </RouterLink>
              </motion.div>
            </nav>
          </div>

          <SheetFooter class="mt-auto bg-muted/50 p-4">
            <div class="w-full space-y-3">
              <template v-if="!auth.isLoggedIn">
                <Button asChild class="w-full">
                  <RouterLink to="/register" @click="isMobileMenuOpen = false">
                    <UserPlus class="mr-2 h-5 w-5" />
                    Register
                  </RouterLink>
                </Button>
                <Button variant="outline" asChild class="w-full">
                  <RouterLink to="/login" @click="isMobileMenuOpen = false">
                    <LogIn class="mr-2 h-5 w-5" />
                    Login
                  </RouterLink>
                </Button>
              </template>
              <template v-else>
                <div class="flex items-center p-2 rounded-lg">
                  <Avatar class="h-10 w-10 mr-3">
                    <AvatarImage src="https://i.pravatar.cc/150" alt="User Avatar" />
                    <AvatarFallback>{{ auth.user?.charAt(0).toUpperCase() }}</AvatarFallback>
                  </Avatar>
                  <div class="flex flex-col">
                    <p class="font-semibold text-sm">Welcome</p>
                    <p class="text-muted-foreground text-sm -mt-1">{{ auth.user }}</p>
                  </div>
                </div>
                <Button variant="ghost" asChild class="w-full justify-start">
                  <RouterLink
                    to="/protected"
                    @click="isMobileMenuOpen = false"
                    class="flex items-center"
                  >
                    <Shield class="mr-2 h-5 w-5" />
                    <span>Protected Page</span>
                  </RouterLink>
                </Button>
                <Button
                  variant="destructive"
                  @click="(auth.logout(), (isMobileMenuOpen = false))"
                  class="w-full"
                >
                  <LogOut class="mr-2 h-5 w-5" />
                  <span>Log out</span>
                </Button>
              </template>
            </div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>
