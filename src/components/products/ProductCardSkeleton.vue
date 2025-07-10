<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
</script>

<template>
  <div class="grid md:grid-cols-2 gap-12 items-center">
    <Skeleton class="rounded-lg w-full h-80" />
    <div>
      <Skeleton class="h-8 w-3/4 mb-4" />
      <Skeleton class="h-4 w-full mb-2" />
      <Skeleton class="h-4 w-full mb-2" />
      <Skeleton class="h-4 w-2/3 mb-6" />
      <Skeleton class="h-10 w-32" />
    </div>
  </div>
</template>
