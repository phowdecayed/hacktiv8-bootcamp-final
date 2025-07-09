<script setup lang="ts">
import { motion } from 'motion-v'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'

const portfolioItems = [
  {
    id: 'alpha',
    title: 'Project Alpha',
    description: 'A web application for managing complex data streams.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
  },
  {
    id: 'beta',
    title: 'Project Beta',
    description: 'A mobile app designed for seamless user interaction.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
  },
  {
    id: 'gamma',
    title: 'Project Gamma',
    description: 'An e-commerce platform with a focus on user experience.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
  },
  {
    id: 'delta',
    title: 'Project Delta',
    description: 'A cloud-based solution for data storage and retrieval.',
    imageUrl: 'https://picsum.photos/seed/project4/600/400',
  },
  {
    id: 'epsilon',
    title: 'Project Epsilon',
    description: 'A design system for a major corporate client.',
    imageUrl: 'https://picsum.photos/seed/project5/600/400',
  },
  {
    id: 'zeta',
    title: 'Project Zeta',
    description: 'A marketing website for a new product launch.',
    imageUrl: 'https://picsum.photos/seed/project6/600/400',
  },
]
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
      class="text-center"
    >
      <h1 class="text-3xl font-extrabold text-foreground sm:text-4xl">Our Portfolio</h1>
      <p class="mt-4 text-lg text-muted-foreground">
        Check out some of our recent work.
      </p>
    </motion.div>

    <div class="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <motion.div
        v-for="(item, index) in portfolioItems"
        :key="item.title"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.1 * index }"
      >
        <Card class="overflow-hidden h-full flex flex-col">
          <img :src="item.imageUrl" :alt="item.title" class="w-full h-48 object-cover">
          <CardContent class="pt-6 flex-grow">
            <h3 class="text-lg font-semibold">{{ item.title }}</h3>
            <p class="text-muted-foreground mt-2">{{ item.description }}</p>
          </CardContent>
          <CardFooter>
            <Button variant="secondary" class="w-full" asChild>
              <RouterLink :to="{ name: 'portfolio-detail', params: { id: item.id } }">View Project</RouterLink>
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  </div>
</template>