<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { motion } from 'motion-v'
import { useRouter } from 'vue-router'
import { ArrowRight, Sparkles } from 'lucide-vue-next'

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
    class="relative overflow-hidden bg-background min-h-screen flex items-center justify-center p-4"
  >
    <div class="absolute inset-0 z-0">
      <!-- Background Image with Ken Burns Effect -->
      <div
        class="absolute inset-0 bg-cover bg-center animate-ken-burns"
        style="
          background-image: url('https://121clicks.com/wp-content/uploads/2024/04/minimalism-photography-niko-lator-02.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2');
        "
      ></div>
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"
      ></div>
    </div>

    <motion.div
      class="relative z-10 text-center max-w-4xl mx-auto bg-background/30 backdrop-blur-lg p-8 sm:p-12 rounded-2xl shadow-2xl border border-white/10"
      :initial="{ opacity: 0, y: 40, scale: 0.95 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }"
    >
      <motion.h1
        class="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.2 }"
      >
        Crafting Digital Excellence
      </motion.h1>

      <motion.p
        class="mt-6 max-w-3xl mx-auto text-lg text-muted-foreground sm:text-xl"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.4 }"
      >
        Welcome to MINIMALIST, a modern Company Profile SPA built with Vue 3, TypeScript, and
        Tailwind CSS.
      </motion.p>

      <motion.div
        class="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, delay: 0.6 }"
      >
        <Button size="lg" asChild>
          <motion.a
            href="#features"
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
            class="shadow-lg w-full sm:w-auto"
          >
            Jelajahi Fitur
            <ArrowRight class="ml-2 h-5 w-5" />
          </motion.a>
        </Button>
        <Button
          size="lg"
          variant="secondary"
          class="shadow-lg w-full sm:w-auto"
          @click="goToChatbot"
        >
          <motion.a
            :while-hover="{ scale: 1.05 }"
            :while-tap="{ scale: 0.95 }"
            class="inline-flex items-center"
          >
            <Sparkles class="mr-2 h-5 w-5 text-yellow-400" />
            <span>Chat dengan AI</span>
          </motion.a>
        </Button>
      </motion.div>
    </motion.div>
  </section>
</template>

<style>
@keyframes ken-burns {
  0% {
    transform: scale(1) translate(0, 0);
  }
  100% {
    transform: scale(1.1) translate(-2%, 2%);
  }
}
.animate-ken-burns {
  animation: ken-burns 20s ease-in-out infinite alternate;
}
</style>
