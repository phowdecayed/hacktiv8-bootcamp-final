<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import { motion } from 'motion-v'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'

const route = useRoute()
const productId = ref(route.params.id)

// Mock data for all services
const servicesData = {
  'web-development': {
    title: 'Web Application Development',
    tagline: 'Building the Future of the Web',
    description: 'We specialize in creating robust, high-performance web applications. Our team leverages the latest frameworks and technologies to build solutions that are not only scalable and secure but also provide a seamless user experience. From complex enterprise platforms to dynamic single-page applications, we deliver excellence.',
    imageUrl: 'https://picsum.photos/seed/web-detail/1200/800',
    features: [
      { title: 'Scalable Architecture', icon: 'M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' },
      { title: 'Secure by Design', icon: 'M9 12.75L11.25 15 15 9.75' },
      { title: 'Optimized Performance', icon: 'M3.75 13.5l10.5-11.25L12 3m-8.25 9.75L12 21l8.25-8.25' },
    ],
    gallery: [
      'https://picsum.photos/seed/web-gallery1/600/400',
      'https://picsum.photos/seed/web-gallery2/600/400',
      'https://picsum.photos/seed/web-gallery3/600/400',
    ],
  },
  'mobile-development': {
    title: 'Mobile App Development',
    tagline: 'Apps That Delight and Deliver',
    description: 'We design and develop cross-platform mobile applications for both iOS and Android. Our focus is on creating apps with a flawless user experience, engaging design, and powerful functionality that meets the demands of modern users.',
    imageUrl: 'https://picsum.photos/seed/mobile-detail/1200/800',
    features: [
      { title: 'iOS & Android', icon: 'M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25' },
      { title: 'Intuitive UI/UX', icon: 'M9 12.75L11.25 15 15 9.75' },
      { title: 'Push Notifications', icon: 'M3.75 13.5l10.5-11.25L12 3m-8.25 9.75L12 21l8.25-8.25' },
    ],
    gallery: [
      'https://picsum.photos/seed/mobile-gallery1/600/400',
      'https://picsum.photos/seed/mobile-gallery2/600/400',
      'https://picsum.photos/seed/mobile-gallery3/600/400',
    ],
  },
  // Add other services here...
}

const product = computed(() => servicesData[productId.value] || {
  title: 'Service Not Found',
  description: 'The requested service could not be found.',
  imageUrl: 'https://picsum.photos/seed/not-found/1200/800',
  features: [],
  gallery: [],
})

</script>

<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section -->
    <div class="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/50 z-10"></div>
      <img :src="product.imageUrl" :alt="product.title" class="absolute inset-0 w-full h-full object-cover">
      <motion.div
        class="relative z-20"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {{ product.title }}
        </h1>
        <p v-if="product.tagline" class="mt-6 max-w-2xl mx-auto text-xl text-white/80">
          {{ product.tagline }}
        </p>
      </motion.div>
    </div>

    <!-- Main Content -->
    <div class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Left Column: Description -->
        <motion.div
          class="lg:col-span-2"
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7 }"
        >
          <h2 class="text-3xl font-bold mb-4">Service Overview</h2>
          <p class="text-muted-foreground text-lg leading-relaxed">
            {{ product.description }}
          </p>
        </motion.div>

        <!-- Right Column: Key Features -->
        <motion.div
          :initial="{ opacity: 0, x: 30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, delay: 0.2 }"
        >
          <div class="bg-muted/20 p-8 rounded-lg">
            <h3 class="text-2xl font-bold mb-6">Key Features</h3>
            <ul class="space-y-4">
              <li v-for="feature in product.features" :key="feature.title" class="flex items-center gap-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-primary">
                  <path :d="feature.icon" />
                </svg>
                <span>{{ feature.title }}</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>

    <!-- Gallery Section -->
    <div v-if="product.gallery.length" class="py-24 bg-primary/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Project Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            v-for="(image, index) in product.gallery"
            :key="index"
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5, delay: index * 0.1 }"
          >
            <img :src="image" alt="Gallery image" class="rounded-lg shadow-xl w-full h-full object-cover">
          </motion.div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold">Interested in this service?</h2>
        <p class="mt-4 text-lg text-muted-foreground">
          Let's discuss how we can help you achieve your goals.
        </p>
        <Button size="lg" class="mt-8" asChild>
          <RouterLink to="/contact">Get a Free Quote</RouterLink>
        </Button>
      </div>
    </div>
  </div>
</template>