<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { motion } from 'motion-v'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import PortfolioCardSkeleton from '@/components/portfolio/PortfolioCardSkeleton.vue'

const portfolioItems = [
  {
    id: 'alpha',
    title: 'Project Alpha',
    category: 'Web App',
    description: 'A web application for managing complex data streams.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    id: 'beta',
    title: 'Project Beta',
    category: 'Mobile App',
    description: 'A mobile app designed for seamless user interaction.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    id: 'gamma',
    title: 'Project Gamma',
    category: 'E-commerce',
    description: 'An e-commerce platform with a focus on user experience.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    id: 'delta',
    title: 'Project Delta',
    category: 'Cloud',
    description: 'A cloud-based solution for data storage and retrieval.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
  },
  {
    id: 'epsilon',
    title: 'Project Epsilon',
    category: 'Web App',
    description: 'A design system for a major corporate client.',
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
  },
  {
    id: 'zeta',
    title: 'Project Zeta',
    category: 'E-commerce',
    description: 'A marketing website for a new product launch.',
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
  },
]

const categories = ['All', 'Web App', 'Mobile App', 'E-commerce', 'Cloud']
const activeCategory = ref('All')
const isLoading = ref(true)

const filteredItems = computed(() => {
  if (activeCategory.value === 'All') {
    return portfolioItems
  }
  return portfolioItems.filter((item) => item.category === activeCategory.value)
})

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
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Our Portfolio</h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        A showcase of our passion, creativity, and hard work.
      </p>
    </motion.div>

    <!-- Filter Section -->
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center gap-2 sm:gap-4">
        <Button
          v-for="category in categories"
          :key="category"
          :variant="activeCategory === category ? 'default' : 'outline'"
          @click="activeCategory = category"
        >
          {{ category }}
        </Button>
      </div>
    </div>

    <!-- Portfolio Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
      <div v-if="isLoading" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <PortfolioCardSkeleton v-for="n in 6" :key="n" />
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <motion.div
          v-for="item in filteredItems"
          :key="item.id"
          class="group relative overflow-hidden rounded-lg shadow-lg"
          :initial="{ opacity: 0, y: 50 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5 }"
        >
          <img
            :src="item.imageUrl"
            :alt="item.title"
            class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div class="absolute bottom-0 left-0 p-6 text-white">
            <span class="text-sm bg-primary/80 px-2 py-1 rounded-full">{{ item.category }}</span>
            <h3 class="text-xl font-bold mt-2">{{ item.title }}</h3>
            <p
              class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-full"
            >
              {{ item.description }}
            </p>
            <Button
              variant="secondary"
              class="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              asChild
            >
              <RouterLink :to="{ name: 'portfolio-detail', params: { id: item.id } }"
                >View Project</RouterLink
              >
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
</template>
