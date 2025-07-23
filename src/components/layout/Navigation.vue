<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import { useAuthStore } from '@/stores/auth'
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
  Home,
  Info,
  Package,
  Briefcase,
  Mail,
  LogIn,
  UserPlus,
  BookOpen,
} from 'lucide-vue-next'
import { motion, AnimatePresence } from 'motion-v'

defineOptions({
  name: 'SiteNavigation',
})

const auth = useAuthStore()
const isMobileMenuOpen = ref(false)

const routes = [
  { name: 'Home', path: '/', icon: Home },
  { name: 'About Us', path: '/about', icon: Info },
  { name: 'Services', path: '/products', icon: Package },
  { name: 'Portofolio', path: '/portfolio', icon: Briefcase },
  { name: 'Blog', path: '/blog', icon: BookOpen },
  { name: 'Contact', path: '/contact', icon: Mail },
]
</script>

<template>
  <div>
    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-1">
      <RouterLink
        v-for="route in routes"
        :key="route.path"
        :to="route.path"
        custom
        v-slot="{ navigate, href, isExactActive }"
      >
        <motion.a
          :href="href"
          @click="navigate"
          class="relative px-3 py-2 text-sm font-medium rounded-md transition-colors"
          :class="[
            isExactActive
              ? 'text-primary'
              : 'text-muted-foreground hover:text-primary hover:bg-muted/50',
          ]"
          :while-hover="{ y: -2 }"
          :transition="{ duration: 0.2, ease: 'easeInOut' }"
        >
          <span>{{ route.name }}</span>
          <AnimatePresence>
            <motion.div
              v-if="isExactActive"
              class="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-center"
              :initial="{ scaleX: 0 }"
              :animate="{ scaleX: 1, transition: { duration: 0.4, ease: 'easeInOut' } }"
              :exit="{ scaleX: 0, transition: { duration: 0.3, ease: 'easeInOut' } }"
            ></motion.div>
          </AnimatePresence>
        </motion.a>
      </RouterLink>

      <div class="w-4"></div>

      <motion.div
        :key="auth.isLoggedIn ? 'auth' : 'guest'"
        :initial="{ opacity: 0, y: -10 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, ease: 'easeInOut' }"
        class="flex items-center space-x-2"
      >
        <template v-if="!auth.isLoggedIn">
          <Button variant="ghost" size="sm" asChild>
            <RouterLink to="/login">Login</RouterLink>
          </Button>
          <Button size="sm" asChild>
            <RouterLink to="/register">Register</RouterLink>
          </Button>
        </template>
      </motion.div>
    </nav>

    <!-- Mobile Navigation -->
    <div class="md:hidden">
      <Sheet v-model:open="isMobileMenuOpen">
        <SheetTrigger as-child>
          <Button variant="ghost" size="icon">
            <Menu class="h-6 w-6" />
            <span class="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" class="w-[300px] flex flex-col p-0 bg-background">
          <SheetHeader class="p-4 text-center border-b">
            <SheetTitle class="flex items-center justify-center gap-2">
              <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
              <span class="font-bold text-2xl tracking-wider text-primary">MINIMALIST</span>
            </SheetTitle>
            <SheetDescription class="text-xs text-muted-foreground">
              Navigate our world.
            </SheetDescription>
          </SheetHeader>
          <div class="flex-grow overflow-y-auto p-4">
            <nav class="flex flex-col space-y-1">
              <motion.div
                v-for="(route, index) in routes"
                :key="`mobile-${route.path}`"
                :initial="{ opacity: 0, x: -20 }"
                :animate="{ opacity: 1, x: 0 }"
                :transition="{ duration: 0.3, delay: 0.1 * index, ease: 'easeInOut' }"
              >
                <RouterLink
                  :to="route.path"
                  class="flex items-center gap-4 rounded-lg px-4 py-3 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
                  active-class="text-primary bg-muted font-semibold"
                  @click="isMobileMenuOpen = false"
                >
                  <component :is="route.icon" class="h-5 w-5" />
                  <span class="text-base">{{ route.name }}</span>
                </RouterLink>
              </motion.div>
            </nav>
          </div>

          <SheetFooter class="mt-auto border-t p-4">
            <motion.div
              :key="auth.isLoggedIn ? 'm-auth' : 'm-guest'"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, ease: 'easeInOut' }"
              class="w-full"
            >
              <div v-if="!auth.isLoggedIn" class="space-y-2">
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
              </div>
            </motion.div>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  </div>
</template>
