<script setup lang="ts">
import { motion } from 'motion-v'
import Calculator from '@/components/ui/calculator/Calculator.vue'
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8">
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }"
        class="mb-12"
      >
        <h1 class="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
          CONGRATULATIONS
        </h1>
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
</template>