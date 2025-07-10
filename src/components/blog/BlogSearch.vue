<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-vue-next'

const searchTerm = defineModel<string>()
</script>

<template>
  <div class="relative">
    <Search class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
    <Input
      v-model="searchTerm"
      type="text"
      placeholder="Search for articles..."
      class="pl-10 w-full"
    />
  </div>
</template>
