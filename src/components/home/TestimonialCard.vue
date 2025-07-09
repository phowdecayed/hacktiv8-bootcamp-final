<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Quote } from 'lucide-vue-next'

defineProps<{
  quote: string
  author: string
  title: string
  avatar: string
}>()

const getInitials = (name: string) => {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}
</script>

<template>
  <Card class="h-full bg-background/60 backdrop-blur-sm border-border/50 hover:bg-primary/5 transition-colors duration-300">
    <CardContent class="p-6 flex flex-col h-full">
      <Quote class="w-8 h-8 text-primary mb-4" />
      <blockquote class="flex-grow">
        <p class="text-lg text-foreground leading-relaxed">"{{ quote }}"</p>
      </blockquote>
      <div class="mt-6 flex items-center">
        <Avatar class="h-12 w-12">
          <AvatarImage :src="avatar" :alt="author" />
          <AvatarFallback>{{ getInitials(author) }}</AvatarFallback>
        </Avatar>
        <div class="ml-4">
          <h4 class="text-base font-bold text-foreground">{{ author }}</h4>
          <p class="text-sm text-muted-foreground">{{ title }}</p>
        </div>
      </div>
    </CardContent>
  </Card>
</template>