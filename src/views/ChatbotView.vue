<script setup lang="ts">
import { motion } from 'motion-v'
import { loadSlim } from 'tsparticles-slim'
import type { Engine } from 'tsparticles-engine'
import { options as particleOptions } from '@/lib/particles-config'
import { useRouter } from 'vue-router'

defineOptions({
  name: 'ChatbotView',
})

const router = useRouter()

async function particlesInit(engine: Engine) {
  await loadSlim(engine)
}

function closeWindow() {
  router.back()
}
</script>

<template>
  <div class="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-background flex items-center justify-center p-4">
    <!-- Particle Background -->
    <div class="absolute inset-0 z-0">
      <Particles
        id="tsparticles-chatbot"
        class="w-full h-full"
        :options="particleOptions"
        @load="particlesInit"
      />
    </div>

    <!-- Chatbot Window -->
    <motion.div
      class="relative z-10 w-full max-w-4xl h-[85vh] flex flex-col rounded-xl shadow-2xl bg-background/50 backdrop-blur-lg border border-white/10"
      :initial="{ opacity: 0, y: 40, scale: 0.95 }"
      :animate="{ opacity: 1, y: 0, scale: 1 }"
      :transition="{ type: 'spring', stiffness: 80, damping: 20, duration: 1 }"
    >
      <!-- Window Header -->
      <div class="flex-shrink-0 h-11 flex items-center justify-between px-4 border-b border-white/10">
        <div class="flex items-center gap-2">
          <button @click="closeWindow" class="h-3 w-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors"></button>
          <span class="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span class="h-3 w-3 rounded-full bg-green-500"></span>
        </div>
        <div class="text-sm text-muted-foreground font-medium">
          AI Assistant
        </div>
        <div class="w-14"></div> <!-- Spacer -->
      </div>

      <!-- Iframe Content -->
      <div class="flex-grow bg-background/80 rounded-b-xl">
        <iframe
          src="https://ai.bpkadprovjabar.page/chatbot/jTGbdWnj746b4MsQ"
          class="w-full h-full"
          frameborder="0"
          allow="microphone"
        ></iframe>
      </div>
    </motion.div>
  </div>
</template>