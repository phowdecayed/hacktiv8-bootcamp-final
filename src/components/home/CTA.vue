<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { motion } from 'motion-v'
import { Rocket, BookOpen } from 'lucide-vue-next'
</script>

<template>
  <section
    class="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90 text-primary-foreground"
  >
    <!-- Decorative Shapes -->
    <motion.div
      class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"
      :initial="{ opacity: 0, scale: 0.5 }"
      :while-in-view="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, delay: 0.4 }"
    />
    <motion.div
      class="absolute bottom-0 right-0 w-72 h-72 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2"
      :initial="{ opacity: 0, scale: 0.5 }"
      :while-in-view="{ opacity: 1, scale: 1 }"
      :transition="{ duration: 0.8, delay: 0.6 }"
    />

    <div class="relative max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:py-24 lg:px-8 text-center">
      <motion.h2
        class="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <span class="block">Tingkatkan Proyek Anda ke Level Berikutnya</span>
      </motion.h2>
      <motion.p
        class="mt-4 max-w-2xl mx-auto text-lg opacity-80"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.2 }"
      >
        Mari berkolaborasi untuk menciptakan solusi digital yang luar biasa. Hubungi kami hari ini!
      </motion.p>

      <motion.div
        class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6, delay: 0.4 }"
      >
        <Button size="lg" variant="secondary" asChild>
          <motion.a
            href="/contact"
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
            class="w-full sm:w-auto"
          >
            <Rocket class="mr-2 h-5 w-5" />
            Mulai Sekarang
          </motion.a>
        </Button>

        <Button size="lg" variant="secondary" class="text-black w-full sm:w-auto" asChild>
          <motion.a href="/about" :while-hover="{ scale: 1.05 }" :while-tap="{ scale: 0.95 }">
            <BookOpen class="mr-2 h-5 w-5" />
            Pelajari Lebih Lanjut
          </motion.a>
        </Button>
      </motion.div>
    </div>
  </section>
</template>
