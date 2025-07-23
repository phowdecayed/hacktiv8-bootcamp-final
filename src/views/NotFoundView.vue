<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from '@/components/ui/button'
// Import the SVG as a component by adding '?component'
import Animation404 from '@/assets/404-animation.svg?component'
</script>

<template>
  <div
    class="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center text-center bg-muted/20"
  >
    <div class="w-full max-w-2xl p-8">
      <Animation404 class="w-full h-auto" />
      <h1 class="text-4xl font-bold mt-8">Oops! Page not found.</h1>
      <p class="text-muted-foreground mt-4">
        The page you are looking for might have been removed, had its name changed, or is
        temporarily unavailable.
      </p>
      <Button as-child class="mt-8">
        <RouterLink to="/">Go to Homepage</RouterLink>
      </Button>
    </div>
  </div>
</template>
