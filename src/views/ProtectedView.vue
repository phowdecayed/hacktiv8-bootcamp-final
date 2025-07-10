<script setup lang="ts">
import { motion } from 'motion-v'
import Calculator from '@/components/ui/calculator/Calculator.vue'
</script>

<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section -->
    <motion.div
      class="py-20 text-center bg-primary/5"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Protected Page
      </h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Welcome! This is a protected area.
      </p>
    </motion.div>

    <div class="py-12 px-4 sm:px-6 lg:px-8">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }"
          class="mb-12"
        >
          <h2 class="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            CONGRATULATIONS
          </h2>
        </motion.div>

        <motion.div
          :initial="{ opacity: 0, scale: 0.9 }"
          :animate="{ opacity: 1, scale: 1 }"
          :transition="{ duration: 0.5, delay: 0.3 }"
        >
          <Calculator />
        </motion.div>
      </div>
    </div>
  </div>
</template>
