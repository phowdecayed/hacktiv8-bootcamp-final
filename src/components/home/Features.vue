<script setup lang="ts">
import { ref } from 'vue'
import { motion } from 'motion-v'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Zap, Code, Shield, Smartphone, Cloud, Layers } from 'lucide-vue-next'

defineOptions({
  name: 'HomeFeatures',
})

const features = [
  { title: 'Modern Vue 3', description: 'Utilizing the latest features of Vue 3, including the Composition API for more modular and organized code.', icon: Code },
  { title: 'TypeScript', description: 'More reliable development with static typing and better tooling to prevent runtime errors.', icon: Shield },
  { title: 'Tailwind CSS', description: 'A utility-first CSS framework for rapid and responsive design with minimal custom CSS.', icon: Layers },
  { title: 'SPA Routing', description: 'Fast page navigation without browser refreshes using Vue Router.', icon: Zap },
  { title: 'State Management', description: 'Efficient and structured application state management with Pinia.', icon: Cloud },
  { title: 'Responsive Design', description: 'Optimal display across various screen sizes, from mobile to desktop.', icon: Smartphone },
]

const activeFeatureIndex = ref(0)
</script>

<template>
  <section id="features" class="py-24 bg-background">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-12 items-start">
        <div class="sticky top-24">
          <motion.div
            :initial="{ opacity: 0, x: -50 }"
            :while-in-view="{ opacity: 1, x: 0 }"
            :transition="{ duration: 0.7 }"
          >
            <h2 class="text-base font-semibold tracking-wide text-primary uppercase">Features</h2>
            <p class="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
              Everything You Need for a Modern Application
            </p>
            <p class="mt-4 max-w-2xl text-xl text-muted-foreground">
              Designed with the latest technology for an optimal developer and user experience.
            </p>
          </motion.div>
        </div>

        <div class="space-y-8">
          <motion.div
            v-for="(feature, index) in features"
            :key="feature.title"
            @mouseover="activeFeatureIndex = index"
            class="cursor-pointer"
            :initial="{ opacity: 0, y: 30 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 * index }"
          >
            <Card :class="['transition-all duration-300', activeFeatureIndex === index ? 'bg-primary/5 shadow-lg' : 'bg-muted/20']">
              <CardHeader>
                <div class="flex items-center gap-4">
                  <component :is="feature.icon" :class="['w-8 h-8 transition-colors', activeFeatureIndex === index ? 'text-primary' : 'text-muted-foreground']" />
                  <CardTitle>{{ feature.title }}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p :class="['transition-colors', activeFeatureIndex === index ? 'text-foreground' : 'text-muted-foreground']">
                  {{ feature.description }}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>
