<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
</script>

<template>
  <Card>
    <CardHeader>
      <Skeleton class="w-full h-40 rounded-t-lg" />
      <div class="pt-4">
        <Skeleton class="h-6 w-3/4 mb-2" />
        <Skeleton class="h-6 w-1/2" />
      </div>
    </CardHeader>
    <CardContent>
      <div class="space-y-2">
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-full" />
        <Skeleton class="h-4 w-5/6" />
      </div>
    </CardContent>
    <CardFooter class="flex justify-between items-center">
      <div class="w-1/2">
        <Skeleton class="h-5 w-24 mb-2" />
        <Skeleton class="h-4 w-20" />
      </div>
      <Skeleton class="h-6 w-24" />
    </CardFooter>
  </Card>
</template>
