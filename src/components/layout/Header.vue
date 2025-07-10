<script setup lang="ts">
import Navigation from '@/components/layout/Navigation.vue'
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'
import { RouterLink } from 'vue-router'

defineOptions({
  name: 'SiteHeader',
})

const { y } = useScroll(window)

const hasScrolled = computed(() => y.value > 20)
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

        <!-- Navigation -->
        <div class="flex items-center">
          <Navigation :has-scrolled="hasScrolled" />
        </div>
      </div>
    </div>
  </header>
</template>
