<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>

<template>
  <Card>
    <CardHeader>
      <div class="inline-flex items-center justify-center p-3 bg-primary/10 rounded-md mb-2">
        <svg
          class="h-6 w-6 text-primary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="icon" />
        </svg>
      </div>
      <CardTitle>{{ title }}</CardTitle>
    </CardHeader>
    <CardContent>
      <p class="text-muted-foreground">{{ description }}</p>
    </CardContent>
  </Card>
</template>
