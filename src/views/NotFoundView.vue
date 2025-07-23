<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
import Animation404 from '@/assets/404-animation.svg?component'
import { motion } from 'motion-v'
</script>

<template>
  <div
    class="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center bg-gradient-to-br from-background to-muted/40"
  >
    <motion.div
      class="w-full max-w-2xl p-8 flex flex-col items-center"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5 }"
    >
      <motion.div
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
      >
        <Animation404 class="w-full h-auto drop-shadow-[0_0_15px_rgba(150,150,150,0.3)]" />
      </motion.div>

      <motion.h1
        class="text-5xl font-extrabold mt-8 tracking-tight"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.4 }"
      >
        Halaman Tidak Ditemukan
      </motion.h1>

      <motion.p
        class="text-muted-foreground mt-4 max-w-md"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.6 }"
      >
        Sepertinya Anda tersesat di alam semesta digital. Mari kami bantu Anda kembali ke jalan yang benar.
      </motion.p>

      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.8 }"
      >
        <Button as-child class="mt-8" size="lg">
          <RouterLink to="/">Kembali ke Beranda</RouterLink>
        </Button>
      </motion.div>
    </motion.div>
  </div>
</template>