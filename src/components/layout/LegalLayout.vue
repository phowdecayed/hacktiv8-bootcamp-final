<script setup lang="ts">
import { motion } from 'motion-v'

defineProps<{
  title: string
  lastUpdated: string
}>()
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
        {{ title }}
      </h1>
      <p class="mt-4 text-lg text-muted-foreground">Last Updated: {{ lastUpdated }}</p>
    </motion.div>

    <!-- Content Section -->
    <div class="py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        class="max-w-4xl mx-auto"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, delay: 0.2 }"
      >
        <div
          class="prose prose-lg dark:prose-invert max-w-none p-8 bg-muted/20 rounded-lg shadow-sm"
        >
          <slot />
        </div>
      </motion.div>
    </div>
  </div>
</template>

<style>
.prose h2 {
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
  font-weight: 700;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.prose h3 {
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-top: 1.5rem;
}
.prose p {
  line-height: 1.75;
  margin-bottom: 1rem;
}
.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}
.prose a {
  color: hsl(var(--primary));
  text-decoration: none;
}
.prose a:hover {
  text-decoration: underline;
}
</style>
