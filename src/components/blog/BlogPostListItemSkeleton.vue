<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'

defineProps<{
  imagePosition?: 'left' | 'right'
}>()
</script>

<template>
  <Card class="overflow-hidden">
    <div class="grid md:grid-cols-3">
      <div class="md:col-span-1" :class="{ 'md:order-last': imagePosition === 'right' }">
        <Skeleton class="w-full h-48 md:h-full" />
      </div>
      <div class="md:col-span-2 flex flex-col">
        <CardHeader>
          <Skeleton class="h-6 w-3/4 mb-2" />
          <Skeleton class="h-6 w-1/2" />
          <div class="flex gap-4 pt-2">
            <Skeleton class="h-5 w-24" />
            <Skeleton class="h-5 w-24" />
          </div>
        </CardHeader>
        <CardContent class="flex-grow space-y-2">
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-full" />
          <Skeleton class="h-4 w-5/6" />
        </CardContent>
        <CardFooter class="flex justify-between items-center">
          <div class="flex gap-2">
            <Skeleton class="h-6 w-16" />
            <Skeleton class="h-6 w-16" />
          </div>
          <Skeleton class="h-8 w-28" />
        </CardFooter>
      </div>
    </div>
  </Card>
</template>
