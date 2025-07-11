<script setup lang="ts">
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
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
      class="transition-all duration-300 group-hover:shadow-2xl group-hover:border-primary/50 overflow-hidden group-hover:-translate-y-1"
    >
      <div class="grid md:grid-cols-5">
        <div class="md:col-span-2" :class="{ 'md:order-last': imagePosition === 'right' }">
          <img
            :src="post.imageUrl"
            :alt="post.title"
            class="w-full h-56 md:h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
        </div>
        <div class="md:col-span-3 flex flex-col">
          <CardHeader class="pb-4">
            <div class="flex flex-wrap gap-2 mb-3">
              <Badge v-for="tag in post.tags" :key="tag" variant="outline">{{ tag }}</Badge>
            </div>
            <CardTitle
              class="text-2xl font-bold leading-tight group-hover:text-primary transition-colors duration-300"
            >
              {{ post.title }}
            </CardTitle>
          </CardHeader>
          <CardContent class="flex-grow">
            <p class="text-muted-foreground line-clamp-3 leading-relaxed">
              {{ post.excerpt }}
            </p>
            <div
              class="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground pt-4 mt-auto"
            >
              <div class="flex items-center gap-2">
                <User class="w-4 h-4" />
                <span>{{ post.author.name }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Calendar class="w-4 h-4" />
                <span>{{ post.date }}</span>
              </div>
            </div>
          </CardContent>
          <CardFooter class="flex justify-end items-center pt-4">
            <div
              class="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/50 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100"
            >
              <ArrowRight class="w-5 h-5" />
            </div>
          </CardFooter>
        </div>
      </div>
    </Card>
  </RouterLink>
</template>
