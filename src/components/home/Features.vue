<script setup lang="ts">
import FeatureCard from '@/components/home/FeatureCard.vue'
import { Card } from '@/components/ui/card'
import { motion } from 'motion-v'

defineOptions({
  name: 'HomeFeatures',
})

const features = [
  {
    title: 'Modern Vue 3',
    description:
      'Memanfaatkan fitur terbaru dari Vue 3 seperti Composition API untuk kode yang lebih modular dan terorganisir.',
    icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
  },
  {
    title: 'TypeScript',
    description:
      'Pengembangan yang lebih handal dengan static typing dan tooling yang lebih baik untuk menghindari kesalahan runtime.',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
  {
    title: 'Tailwind CSS',
    description:
      'Framework CSS yang utility-first untuk desain yang cepat dan responsif dengan minimal CSS kustom.',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  },
  {
    title: 'SPA Routing',
    description:
      'Navigasi cepat antar halaman tanpa memerlukan refresh browser menggunakan Vue Router.',
    icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
  },
  {
    title: 'State Management',
    description: 'Pengelolaan state aplikasi yang efisien dan terstruktur dengan Pinia.',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  },
  {
    title: 'Responsive Design',
    description: 'Tampilan yang optimal di berbagai ukuran layar dari mobile hingga desktop.',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
]
</script>

<template>
  <section id="features" class="py-24 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
        class="text-center"
      >
        <h2 class="text-base font-semibold tracking-wide text-primary uppercase">Fitur-Fitur</h2>
        <p class="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          Semua yang Anda butuhkan untuk aplikasi modern
        </p>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Dirancang dengan teknologi terkini untuk pengalaman pengembangan dan pengguna yang optimal
        </p>
      </motion.div>

      <div class="mt-20">
        <Card class="border-none bg-transparent shadow-none">
          <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <motion.div
              v-for="(feature, index) in features"
              :key="feature.title"
              :initial="{ opacity: 0, y: 20 }"
              :animate="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1 * index }"
            >
              <FeatureCard
                :title="feature.title"
                :description="feature.description"
                :icon="feature.icon"
              />
            </motion.div>
          </div>
        </Card>
      </div>
    </div>
  </section>
</template>