<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { ref, computed, watch } from 'vue'
import { motion } from 'motion-v'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const route = useRoute()
const router = useRouter()
const portfolioId = ref(route.params.id)

const portfolioData = {
  alpha: { title: 'Project Alpha', category: 'Web App', description: 'A detailed look at our web application for managing complex data streams.', imageUrl: 'https://picsum.photos/seed/p-alpha/1200/800', client: 'TechCorp', date: '2023-05-15', services: 'Web Development, UI/UX Design', website: '#', technologies: ['Vue.js', 'TypeScript', 'Node.js', 'PostgreSQL'], gallery: ['https://picsum.photos/seed/alpha-g1/800/600', 'https://picsum.photos/seed/alpha-g2/800/600', 'https://picsum.photos/seed/alpha-g3/800/600'] },
  beta: { title: 'Project Beta', category: 'Mobile App', description: 'An in-depth overview of our mobile app designed for seamless user interaction.', imageUrl: 'https://picsum.photos/seed/p-beta/1200/800', client: 'Innovate Inc.', date: '2023-08-20', services: 'Mobile Development, UI/UX Design', website: '#', technologies: ['Flutter', 'Dart', 'Firebase'], gallery: ['https://picsum.photos/seed/beta-g1/800/600', 'https://picsum.photos/seed/beta-g2/800/600', 'https://picsum.photos/seed/beta-g3/800/600'] },
  // Add other projects here...
}

const item = computed(() => portfolioData[portfolioId.value] || {
  title: 'Project Not Found',
  description: 'The requested project could not be found.',
  imageUrl: 'https://picsum.photos/seed/not-found/1200/800',
  features: [],
  gallery: [],
})

const projectIds = Object.keys(portfolioData)
const currentIndex = computed(() => projectIds.indexOf(portfolioId.value))
const prevProject = computed(() => currentIndex.value > 0 ? projectIds[currentIndex.value - 1] : null)
const nextProject = computed(() => currentIndex.value < projectIds.length - 1 ? projectIds[currentIndex.value + 1] : null)

watch(() => route.params.id, (newId) => {
  portfolioId.value = newId
  window.scrollTo(0, 0)
})

</script>

<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section -->
    <div class="relative h-[50vh] flex items-center justify-center text-center text-white overflow-hidden">
      <div class="absolute inset-0 bg-black/60 z-10"></div>
      <img :src="item.imageUrl" :alt="item.title" class="absolute inset-0 w-full h-full object-cover scale-105">
      <motion.div
        class="relative z-20"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8 }"
      >
        <Badge variant="secondary" class="mb-4">{{ item.category }}</Badge>
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          {{ item.title }}
        </h1>
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
          <h2 class="text-3xl font-bold mb-4">About the Project</h2>
          <p class="text-muted-foreground text-lg leading-relaxed">
            {{ item.description }}
          </p>
          
          <h3 class="text-2xl font-bold mt-12 mb-4">Technology Stack</h3>
          <div class="flex flex-wrap gap-3">
            <Badge v-for="tech in item.technologies" :key="tech" variant="outline">{{ tech }}</Badge>
          </div>
        </motion.div>

        <!-- Right Column: Project Details -->
        <motion.div
          :initial="{ opacity: 0, x: 30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, delay: 0.2 }"
        >
          <div class="bg-muted/20 p-8 rounded-lg sticky top-24">
            <h3 class="text-2xl font-bold mb-6">Project Details</h3>
            <ul class="space-y-4">
              <li v-if="item.client"><strong class="font-semibold">Client:</strong> {{ item.client }}</li>
              <li v-if="item.date"><strong class="font-semibold">Date:</strong> {{ item.date }}</li>
              <li v-if="item.services"><strong class="font-semibold">Services:</strong> {{ item.services }}</li>
              <li v-if="item.website"><Button asChild class="mt-4 w-full"><a :href="item.website" target="_blank">Visit Website</a></Button></li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>

    <!-- Gallery Section -->
    <div v-if="item.gallery.length" class="py-24 bg-primary/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Project Gallery</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            v-for="(image, index) in item.gallery"
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

    <!-- Navigation -->
    <div class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between">
        <Button v-if="prevProject" asChild>
          <RouterLink :to="{ name: 'portfolio-detail', params: { id: prevProject } }">
            &larr; Previous Project
          </RouterLink>
        </Button>
        <div v-else></div>
        <Button v-if="nextProject" asChild>
          <RouterLink :to="{ name: 'portfolio-detail', params: { id: nextProject } }">
            Next Project &rarr;
          </RouterLink>
        </Button>
      </div>
    </div>
  </div>
</template>
