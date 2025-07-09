<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { motion } from 'motion-v'
import AnimatedBackground from '@/assets/animated-background.svg?component'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'HomeHero',
})

const router = useRouter()

function goToChatbot() {
  router.push('/chatbot')
}
</script>

<template>
  <section
    class="relative overflow-hidden bg-background min-h-screen flex items-center justify-center"
  >
    <div class="absolute inset-0 z-0">
      <AnimatedBackground class="w-full h-full object-cover" />
    </div>
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ type: 'spring', stiffness: 100, damping: 20, duration: 0.8 }"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Modern Single-Page Application
        </h1>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
      >
        <p class="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl">
          Aplikasi web modern yang dibangun dengan Vue 3, TypeScript, dan Tailwind CSS untuk
          pengalaman pengguna yang optimal, cepat, dan dinamis.
        </p>
      </motion.div>

      <motion.div
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ type: 'spring', stiffness: 120, damping: 15, duration: 0.6, delay: 0.4 }"
        class="mt-10 flex justify-center gap-4"
      >
        <Button size="lg" asChild>
          <motion.a
            href="#features"
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
            class="shadow-lg"
          >
            Jelajahi Fitur
          </motion.a>
        </Button>
        <Button
          size="lg"
          variant="outline"
          class="shadow-lg"
          @click="goToChatbot"
          :while-hover="{ scale: 1.05 }"
          :while-tap="{ scale: 0.95 }"
        >
          Chat dengan AI
        </Button>
      </motion.div>
    </div>
  </section>
</template>
