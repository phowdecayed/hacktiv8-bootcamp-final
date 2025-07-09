<script setup lang="ts">
import Navigation from '@/components/layout/Navigation.vue'
import { computed } from 'vue'
import { useScroll } from '@vueuse/core'

defineOptions({
  name: 'SiteHeader',
})

const { y } = useScroll(window)

const scrollProgress = computed(() => {
  // Animate over the first 80px of scrolling
  return Math.min(y.value / 80, 1)
})

const headerStyle = computed(() => ({
  boxShadow: `0 4px 6px -1px rgba(0, 0, 0, ${scrollProgress.value * 0.1}), 0 2px 4px -2px rgba(0, 0, 0, ${scrollProgress.value * 0.1})`,
  borderColor: `rgba(var(--border-color-rgb), ${scrollProgress.value})`,
}))

// Style for the title text to fade out
const titleStyle = computed(() => ({
  opacity: 1 - scrollProgress.value,
  width: `calc(8rem * ${1 - scrollProgress.value})`, // Animate width to 0
  overflow: 'hidden',
  whiteSpace: 'nowrap',
}))

// Style for the spacer to shrink, pulling the nav closer to the logo
const spacerStyle = computed(() => ({
  flexGrow: 1 - scrollProgress.value,
}))
</script>

<template>
  <header class="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-20" :style="headerStyle">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center h-16">
        <!-- Logo (always visible) -->
        <div class="flex-shrink-0">
          <img src="@/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
        </div>

        <!-- Title (fades out) -->
        <div class="ml-3" :style="titleStyle">
          <h1 class="text-xl font-bold text-foreground">MINIMALIST</h1>
        </div>

        <!-- Animated Spacer -->
        <div :style="spacerStyle" />

        <!-- Navigation -->
        <div class="flex-shrink-0">
          <Navigation />
        </div>
      </div>
    </div>
  </header>
</template>

<style>
:root {
  /* Assuming your border color is defined like this in your CSS */
  --border-color-rgb: 229, 231, 235;
}
.dark {
  --border-color-rgb: 38, 38, 38;
}
</style>
