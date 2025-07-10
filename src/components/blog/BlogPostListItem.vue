<script setup lang="ts">
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import type { BlogPost } from '@/lib/blog-data'
import { ArrowRight, Calendar, User } from 'lucide-vue-next'
import { Badge } from '@/components/ui/badge'

defineProps<{
  post: BlogPost
  imagePosition?: 'left' | 'right'
}>()
</script>

<template>
  <RouterLink :to="`/blog/${post.id}`" class="group block">
    <Card
      class="transition-all duration-300 group-hover:shadow-xl group-hover:border-primary/50 overflow-hidden"
    >
      <div class="grid md:grid-cols-3">
        <div
          class="md:col-span-1"
          :class="{ 'md:order-last': imagePosition === 'right' }"
        >
          <img
            :src="post.imageUrl"
            :alt="post.title"
            class="w-full h-48 md:h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div class="md:col-span-2 flex flex-col">
          <CardHeader>
            <CardTitle class="text-xl font-bold leading-tight group-hover:text-primary transition-colors">
              {{ post.title }}
            </CardTitle>
            <div class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground pt-2">
              <div class="flex items-center gap-2">
                <User class="w-4 h-4" />
                <span>{{ post.author.name }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Calendar class="w-4 h-4" />
                <span>{{ post.date }}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent class="flex-grow">
            <p class="text-muted-foreground line-clamp-3">{{ post.excerpt }}</p>
          </CardContent>
          <CardFooter class="flex justify-between items-center">
             <div class="flex flex-wrap gap-2">
                <Badge v-for="tag in post.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
            </div>
            <div class="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-2 group-hover:translate-x-0">
              <span>Read More</span>
              <ArrowRight class="w-4 h-4" />
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  </RouterLink>
</template>
