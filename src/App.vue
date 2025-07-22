<script setup lang="ts">
import { ref, computed } from 'vue'
import { RouterView } from 'vue-router'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import Chatbot from '@/components/ui/chatbot/Chatbot.vue'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-vue-next'
import { motion } from 'motion-v'
import { Toaster } from 'vue-sonner'
import { useWindowScroll, useWindowSize } from '@vueuse/core'

const showChatbot = ref(false)
const { y: scrollY } = useWindowScroll()
const { height: windowHeight } = useWindowSize()

const showScrollTop = computed(() => scrollY.value > 200)

const isAtBottom = computed(() => {
  const documentHeight = document.documentElement.scrollHeight
  return scrollY.value + windowHeight.value >= documentHeight - 150 // 150px threshold
})

const toggleChatbot = () => {
  showChatbot.value = !showChatbot.value
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <Header />
    <Toaster rich-colors position="top-right" :style="{ zIndex: 9999 }" />
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :exit="{ opacity: 0, y: -20 }"
          :transition="{ duration: 0.3 }"
        >
          <component :is="Component" @open-chatbot="toggleChatbot" />
        </motion.div>
      </router-view>
    </main>

    <Footer />
    <Chatbot v-if="showChatbot" @close="toggleChatbot" />

    <!-- Scroll to Top Button -->
    <motion.div
      class="fixed right-8 z-50 transition-all duration-300"
      :class="isAtBottom ? 'bottom-35' : 'bottom-8'"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: showScrollTop ? 1 : 0, y: showScrollTop ? 0 : 20 }"
      :transition="{ duration: 0.3 }"
    >
      <Button @click="scrollToTop" size="icon" class="rounded-full h-12 w-12 shadow-lg">
        <ArrowUp class="h-6 w-6" />
      </Button>
    </motion.div>
  </div>
</template>

<style>
/* Global styles akan ditangani oleh Tailwind */
</style>