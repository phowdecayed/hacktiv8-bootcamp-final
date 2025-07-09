<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { motion } from 'motion-v'
</script>

<template>
  <section class="bg-primary text-primary-foreground">
    <div
      class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between"
    >
      <motion.div
        :initial="{ opacity: 0, x: -30 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5 }"
      >
        <h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">
          <span class="block">Siap untuk memulai?</span>
          <span class="block opacity-80 mt-1">Bergabunglah dengan kami hari ini.</span>
        </h2>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, x: 30 }"
        :animate="{ opacity: 1, x: 0 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
        class="mt-8 flex flex-col sm:flex-row gap-4 lg:mt-0 lg:shrink-0"
      >
        <Button size="lg" variant="secondary" asChild>
          <a href="/contact">Mulai Sekarang</a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          class="bg-primary-foreground/10 hover:bg-primary-foreground/20"
          asChild
        >
          <a href="/about">Pelajari Lebih Lanjut</a>
        </Button>
      </motion.div>
    </div>
  </section>
</template>