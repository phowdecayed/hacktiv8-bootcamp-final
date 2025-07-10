<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import type { BlogPost } from '@/lib/blog-data'
import { ArrowRight } from 'lucide-vue-next'

defineProps<{
  post: BlogPost
}>()
</script>

<template>
  <RouterLink :to="`/blog/${post.id}`" class="group block h-full">
    <Card
      class="h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50"
    >
      <CardHeader>
        <div class="aspect-video overflow-hidden rounded-t-lg mb-4">
          <img
            :src="post.imageUrl"
            :alt="post.title"
            class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardTitle class="text-xl font-bold leading-tight">
          {{ post.title }}
        </CardTitle>
      </CardHeader>
      <CardContent class="flex-grow">
        <p class="text-muted-foreground">{{ post.excerpt }}</p>
      </CardContent>
      <CardFooter class="flex justify-between items-center text-sm text-muted-foreground">
        <div>
          <p class="font-semibold">{{ post.author.name }}</p>
          <p>{{ post.date }}</p>
        </div>
        <div
          class="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <span>Read More</span>
          <ArrowRight class="w-4 h-4" />
        </div>
      </CardFooter>
    </Card>
  </RouterLink>
</template>
