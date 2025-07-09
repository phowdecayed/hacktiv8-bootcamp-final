<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
import { motion } from 'motion-v'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const route = useRoute()
const portfolioId = ref(route.params.id)

// In a real application, you would fetch the portfolio details based on the ID.
// For this example, we'll just display the ID.
const item = ref({
  title: `Project ${portfolioId.value}`,
  description: `This is a detailed description for project ${portfolioId.value}. Here you can elaborate on the project, the technologies used, and the challenges overcome.`,
  imageUrl: `https://picsum.photos/seed/project-detail-${portfolioId.value}/1200/800`,
})

</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
    >
      <img :src="item.imageUrl" :alt="item.title" class="w-full h-96 object-cover rounded-lg shadow-lg">
      <Card class="mt-8">
        <CardHeader>
          <CardTitle class="text-3xl font-extrabold">{{ item.title }}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription class="text-lg">{{ item.description }}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</template>
