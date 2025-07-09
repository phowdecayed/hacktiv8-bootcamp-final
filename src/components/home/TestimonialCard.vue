<script setup lang="ts">
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
  <Card>
    <CardContent class="p-6">
      <div class="flex items-center mb-4">
        <Avatar class="h-10 w-10">
          <AvatarImage :src="avatar" :alt="author" />
          <AvatarFallback>{{ getInitials(author) }}</AvatarFallback>
        </Avatar>
        <div class="ml-4">
          <h4 class="text-base font-medium">{{ author }}</h4>
          <p class="text-sm text-muted-foreground">{{ title }}</p>
        </div>
      </div>
      <blockquote>
        <p class="text-muted-foreground italic">"{{ quote }}"</p>
      </blockquote>
    </CardContent>
  </Card>
</template>
