<script setup lang="ts">
import { computed, watch } from 'vue'
import { useRoute, useRouter, RouterLink } from 'vue-router'
import { featuresData } from '@/lib/features-data'
import { motion } from 'motion-v'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, CheckCircle } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const feature = computed(() => {
  return featuresData.find((f) => f.slug === route.params.slug)
})

const otherFeatures = computed(() => {
  if (!feature.value) return []
  return featuresData.filter((f) => f.slug !== feature.value?.slug).slice(0, 3)
})

// Watch for route changes to scroll to top
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <div v-if="feature" class="bg-background text-foreground">
    <!-- Hero Section -->
    <div class="relative bg-primary/5 overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main
            class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
          >
            <motion.div
              class="sm:text-center lg:text-left"
              :initial="{ opacity: 0, x: -20 }"
              :animate="{ opacity: 1, x: 0 }"
              :transition="{ duration: 0.7 }"
            >
              <component :is="feature.icon" class="h-12 w-12 text-primary mb-4" />
              <h1 class="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span class="block xl:inline">{{ feature.title }}</span>
              </h1>
              <p
                class="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                {{ feature.description }}
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <Button @click="router.back()" size="lg">
                    <ArrowLeft class="mr-2 h-5 w-5" />
                    Go Back
                  </Button>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </div>

    <!-- Main Content Section -->
    <div class="py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-12">
        <!-- Long Description -->
        <motion.div
          class="md:col-span-2 prose prose-lg max-w-none"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <h2 class="text-3xl font-bold">In-Depth Overview</h2>
          <p class="lead">
            {{ feature.longDescription }}
          </p>
        </motion.div>

        <!-- Key Points -->
        <motion.div
          class="md:col-span-1 space-y-6"
          :initial="{ opacity: 0, y: 30 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
        >
          <h3 class="text-2xl font-bold">Key Benefits</h3>
          <ul class="space-y-4">
            <li v-for="point in feature.keyPoints" :key="point.title" class="flex items-start">
              <CheckCircle class="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p class="font-semibold">{{ point.title }}</p>
                <p class="text-muted-foreground">{{ point.description }}</p>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>

    <!-- Other Features Section -->
    <div class="py-24 bg-muted/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center mb-12">Explore Other Features</h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            v-for="(other, index) in otherFeatures"
            :key="other.slug"
            :initial="{ opacity: 0, y: 30 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 * index }"
          >
            <RouterLink :to="{ name: 'feature-detail', params: { slug: other.slug } }">
              <Card
                class="h-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
              >
                <CardHeader>
                  <div class="flex items-center gap-4">
                    <component :is="other.icon" class="w-8 h-8 text-primary" />
                    <CardTitle>{{ other.title }}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p class="text-muted-foreground">{{ other.description }}</p>
                </CardContent>
              </Card>
            </RouterLink>
          </motion.div>
        </div>
      </div>
    </div>
  </div>

  <!-- Not Found Fallback -->
  <div v-else class="text-center py-24">
    <h1 class="text-2xl">Feature not found</h1>
    <p class="mt-4">
      <RouterLink to="/" class="text-primary hover:underline">Go back to Home</RouterLink>
    </p>
  </div>
</template>

<style scoped>
.prose {
  color: hsl(var(--foreground));
}
.prose .lead {
  color: hsl(var(--muted-foreground));
  font-size: 1.1rem;
  line-height: 1.7;
}
</style>
