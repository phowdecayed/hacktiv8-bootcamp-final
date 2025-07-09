<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { motion } from 'motion-v'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const route = useRoute()
const productId = ref(route.params.id)

// In a real application, you would fetch the product details based on the ID.
// For this example, we'll just display the ID.
const product = ref({
  title: `Service ${productId.value}`,
  description: `This is a detailed description for service ${productId.value}. Here you can elaborate on the service, its benefits, and pricing.`,
  imageUrl: `https://picsum.photos/seed/service${productId.value}/1200/800`,
})

</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
    >
      <img :src="product.imageUrl" :alt="product.title" class="w-full h-96 object-cover rounded-lg shadow-lg">
      <Card class="mt-8">
        <CardHeader>
          <CardTitle class="text-3xl font-extrabold">{{ product.title }}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription class="text-lg">{{ product.description }}</CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</template>
