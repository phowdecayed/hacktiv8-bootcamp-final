<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import { motion } from 'motion-v'

const showChatbot = ref(false)

const toggleChatbot = () => {
  showChatbot.value = !showChatbot.value
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />

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
  </div>
</template>

<style>
/* Global styles akan ditangani oleh Tailwind */
</style>
