<script setup lang="ts">
import { Skeleton } from '@/components/ui/skeleton'

defineProps<{
  isRegister?: boolean
}>()
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-muted/20">
    <div class="w-full max-w-4xl mx-auto p-4">
      <div class="grid md:grid-cols-2 rounded-lg overflow-hidden shadow-2xl bg-background">
        <!-- Form Skeleton -->
        <div class="p-8 md:p-12">
          <div class="border-none shadow-none">
            <div class="text-left">
              <Skeleton class="h-9 w-3/4 mb-2" />
              <Skeleton class="h-5 w-full" />
            </div>
            <div class="mt-6">
              <div class="space-y-4">
                <div v-if="isRegister" class="space-y-2">
                  <Skeleton class="h-4 w-16" />
                  <Skeleton class="h-10 w-full" />
                </div>
                <div class="space-y-2">
                  <Skeleton class="h-4 w-16" />
                  <Skeleton class="h-10 w-full" />
                </div>
                <div class="space-y-2">
                  <Skeleton class="h-4 w-16" />
                  <Skeleton class="h-10 w-full" />
                </div>
                <Skeleton class="h-12 w-full !mt-6" />
              </div>
            </div>
            <div class="mt-6 text-center text-sm">
              <Skeleton class="h-5 w-3/4 mx-auto" />
            </div>
          </div>
        </div>

        <!-- Image Skeleton -->
        <div class="hidden md:block">
          <Skeleton class="h-full w-full" />
        </div>
      </div>
    </div>
  </div>
</template>