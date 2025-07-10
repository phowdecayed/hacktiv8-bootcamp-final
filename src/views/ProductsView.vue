<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton.vue'

const services = [
  {
    id: 'web-development',
    title: 'Web Application Development',
    description: 'We build modern, scalable, and secure web applications tailored to your business needs using the latest technologies.',
    imageUrl: 'https://picsum.photos/seed/web-dev/800/600',
  },
  {
    id: 'mobile-development',
    title: 'Mobile App Development',
    description: 'Cross-platform mobile apps for iOS and Android that deliver a seamless user experience and robust performance.',
    imageUrl: 'https://picsum.photos/seed/mobile-dev/800/600',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design',
    description: 'Intuitive and beautiful user interfaces that enhance user engagement and drive conversions.',
    imageUrl: 'https://picsum.photos/seed/ui-ux/800/600',
  },
  {
    id: 'cloud-solutions',
    title: 'Cloud Solutions',
    description: 'Scalable and secure cloud infrastructure to power your applications and services.',
    imageUrl: 'https://picsum.photos/seed/cloud/800/600',
  },
]

const isLoading = ref(true)

onMounted(() => {
  // Simulate a network request
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
})
</script>

<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section -->
    <motion.div
      class="py-20 text-center bg-primary/5"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Our Services
      </h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Innovative solutions to bring your ideas to life.
      </p>
    </motion.div>

    <!-- Services Section -->
    <div class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div v-if="isLoading" class="space-y-24">
        <ProductCardSkeleton v-for="n in 4" :key="n" />
      </div>
      <div v-else class="space-y-24">
        <motion.div
          v-for="(service, index) in services"
          :key="service.id"
          class="grid md:grid-cols-2 gap-12 items-center"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.1 * index }"
        >
          <div :class="index % 2 === 0 ? 'md:order-last' : ''">
            <img :src="service.imageUrl" :alt="service.title" class="rounded-lg shadow-xl w-full h-auto">
          </div>
          <div>
            <h2 class="text-3xl font-bold mb-4">{{ service.title }}</h2>
            <p class="text-muted-foreground text-lg mb-6">{{ service.description }}</p>
            <Button asChild>
              <RouterLink :to="{ name: 'product-detail', params: { id: service.id } }">
                Learn More
              </RouterLink>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-muted/20 py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl font-bold">Ready to start a project?</h2>
        <p class="mt-4 text-lg text-muted-foreground">
          Let's work together to build something amazing.
        </p>
        <Button size="lg" class="mt-8" asChild>
          <RouterLink to="/contact">Get in Touch</RouterLink>
        </Button>
      </div>
    </div>
  </div>
</template>