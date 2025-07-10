<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter } from '@/components/ui/card'

</script>

<template>
  <Card class="overflow-hidden h-full flex flex-col">
    <Skeleton class="w-full h-48" />
    <CardContent class="pt-6 flex-grow">
      <Skeleton class="h-6 w-3/4 mb-2" />
      <Skeleton class="h-4 w-full" />
      <Skeleton class="h-4 w-1/2 mt-1" />
    </CardContent>
    <CardFooter>
      <Skeleton class="h-10 w-full" />
    </CardFooter>
  </Card>
</template>
