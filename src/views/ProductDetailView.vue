<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, computed, watch, type Component } from 'vue'
import { motion } from 'motion-v'
import { Button } from '@/components/ui/button'
import { RouterLink } from 'vue-router'
import {
  Scaling,
  ShieldCheck,
  Zap,
  Smartphone,
  MousePointerClick,
  Bell,
  Cog,
  Palette,
  Rocket,
  CheckCircle,
  Code,
  PenTool,
  TestTube,
} from 'lucide-vue-next'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const route = useRoute()
const productId = ref(Array.isArray(route.params.id) ? route.params.id[0] : route.params.id)

interface Feature {
  title: string
  icon: Component
}

interface ProcessStep {
  title: string
  description: string
  icon: Component
}

interface Technology {
  name: string
}

interface Service {
  title: string
  tagline: string
  description: string
  imageUrl: string
  features: Feature[]
  gallery: string[]
  process: ProcessStep[]
  technologies: Technology[]
}

// Mock data for all services
const servicesData: { [key: string]: Service } = {
  'web-development': {
    title: 'Web Application Development',
    tagline: 'Building the Future of the Web',
    description:
      'We specialize in creating robust, high-performance web applications. Our team leverages the latest frameworks and technologies to build solutions that are not only scalable and secure but also provide a seamless user experience. From complex enterprise platforms to dynamic single-page applications, we deliver excellence.',
    imageUrl: 'https://picsum.photos/seed/web-detail/1200/800',
    features: [
      { title: 'Scalable Architecture', icon: Scaling },
      { title: 'Secure by Design', icon: ShieldCheck },
      { title: 'Optimized Performance', icon: Zap },
    ],
    gallery: [
      'https://picsum.photos/seed/web-gallery1/600/400',
      'https://picsum.photos/seed/web-gallery2/600/400',
      'https://picsum.photos/seed/web-gallery3/600/400',
      'https://picsum.photos/seed/web-gallery4/600/400',
    ],
    process: [
      {
        title: 'Define & Plan',
        description:
          'We start by understanding your vision and requirements to create a solid project plan.',
        icon: Cog,
      },
      {
        title: 'Design & Prototype',
        description:
          'Our team designs intuitive UI/UX and creates interactive prototypes for feedback.',
        icon: Palette,
      },
      {
        title: 'Develop & Test',
        description:
          'We write clean, efficient code and conduct rigorous testing to ensure quality.',
        icon: Code,
      },
      {
        title: 'Deploy & Launch',
        description: 'We handle the deployment process for a smooth and successful launch.',
        icon: Rocket,
      },
      {
        title: 'Support & Scale',
        description:
          'We provide ongoing support and help you scale your application as your business grows.',
        icon: CheckCircle,
      },
    ],
    technologies: [
      { name: 'Vue.js' },
      { name: 'TypeScript' },
      { name: 'Node.js' },
      { name: 'PostgreSQL' },
      { name: 'Tailwind CSS' },
      { name: 'Docker' },
    ],
  },
  'mobile-development': {
    title: 'Mobile App Development',
    tagline: 'Apps That Delight and Deliver',
    description:
      'We design and develop cross-platform mobile applications for both iOS and Android. Our focus is on creating apps with a flawless user experience, engaging design, and powerful functionality that meets the demands of modern users.',
    imageUrl: 'https://picsum.photos/seed/mobile-detail/1200/800',
    features: [
      { title: 'iOS & Android', icon: Smartphone },
      { title: 'Intuitive UI/UX', icon: MousePointerClick },
      { title: 'Push Notifications', icon: Bell },
    ],
    gallery: [
      'https://picsum.photos/seed/mobile-gallery1/600/400',
      'https://picsum.photos/seed/mobile-gallery2/600/400',
      'https://picsum.photos/seed/mobile-gallery3/600/400',
      'https://picsum.photos/seed/mobile-gallery4/600/400',
    ],
    process: [
      {
        title: 'Discovery',
        description: 'In-depth analysis of your app idea, target audience, and market landscape.',
        icon: Smartphone,
      },
      {
        title: 'UI/UX Design',
        description: 'Crafting beautiful and user-friendly interfaces that your users will love.',
        icon: PenTool,
      },
      {
        title: 'Development',
        description: 'Building a high-quality native or cross-platform app with clean code.',
        icon: Code,
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing to ensure a bug-free and smooth user experience.',
        icon: TestTube,
      },
      {
        title: 'Launch & Support',
        description:
          'Successfully launching your app on the app stores and providing ongoing support.',
        icon: Rocket,
      },
    ],
    technologies: [
      { name: 'Vue Native' },
      { name: 'Swift' },
      { name: 'Kotlin' },
      { name: 'Firebase' },
      { name: 'Figma' },
      { name: 'Jest' },
    ],
  },
  // Add other services here...
}

const product = computed(
  () =>
    servicesData[productId.value] || {
      title: 'Service Not Found',
      description: 'The requested service could not be found.',
      imageUrl: 'https://picsum.photos/seed/not-found/1200/800',
      features: [],
      gallery: [],
      process: [],
      technologies: [],
    },
)

watch(
  () => route.params.id,
  (newId) => {
    productId.value = Array.isArray(newId) ? newId[0] : newId
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section -->
    <div
      class="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent z-10"
      ></div>
      <img
        :src="product.imageUrl"
        :alt="product.title"
        class="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <motion.div
        class="relative z-20 p-4"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.8, ease: 'easeOut' }"
      >
        <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-7xl drop-shadow-lg">
          {{ product.title }}
        </h1>
        <p
          v-if="product.tagline"
          class="mt-6 max-w-3xl mx-auto text-xl text-white/90 drop-shadow-md"
        >
          {{ product.tagline }}
        </p>
      </motion.div>
    </div>

    <!-- Main Content -->
    <div class="py-24 sm:py-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-3 gap-12 items-start">
        <!-- Left Column: Description -->
        <motion.div
          class="lg:col-span-2"
          :initial="{ opacity: 0, x: -30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
          :view="{ once: true }"
        >
          <h2 class="text-3xl font-bold tracking-tight text-primary mb-4">Service Overview</h2>
          <p class="text-muted-foreground text-lg leading-relaxed whitespace-pre-line">
            {{ product.description }}
          </p>
        </motion.div>

        <!-- Right Column: Key Features -->
        <motion.div
          :initial="{ opacity: 0, x: 30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, delay: 0.2, ease: 'easeOut' }"
          :view="{ once: true }"
        >
          <Card class="bg-muted/30 border-l-4 border-primary">
            <CardContent class="p-8">
              <h3 class="text-2xl font-bold mb-6">Key Features</h3>
              <ul class="space-y-5">
                <li
                  v-for="feature in product.features"
                  :key="feature.title"
                  class="flex items-center gap-4"
                >
                  <component :is="feature.icon" class="w-7 h-7 text-primary flex-shrink-0" />
                  <span class="font-medium">{{ feature.title }}</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>

    <!-- Our Process Section -->
    <div class="py-24 bg-muted/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          class="text-center mb-16"
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
        >
          <h2 class="text-3xl font-bold">Our Journey</h2>
          <p class="text-muted-foreground mt-2">A brief history of our company's milestones.</p>
        </motion.div>
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <!-- Timeline items -->
          <div v-for="(step, index) in product.process" :key="step.title" class="relative mb-12">
            <motion.div
              class="flex items-center"
              :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
              :initial="{ opacity: 0, y: 50 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1 * index }"
            >
              <div class="w-5/12">
                <Card :class="index % 2 === 0 ? 'text-right' : 'text-left'">
                  <CardContent>
                    <CardHeader>
                      <CardTitle class="font-bold">{{ step.title }}</CardTitle>
                    </CardHeader>
                    <p class="text-muted-foreground">{{ step.description }}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            <!-- Timeline dot -->
            <div
              class="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technologies We Use Section -->
    <div v-if="product.technologies.length" class="py-24 sm:py-32">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          class="text-3xl font-bold text-center mb-12"
          :initial="{ opacity: 0, y: -20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
          :view="{ once: true }"
        >
          Technologies We Use
        </motion.h2>
        <div class="flex flex-wrap justify-center gap-4">
          <motion.div
            v-for="(tech, index) in product.technologies"
            :key="tech.name"
            :initial="{ opacity: 0, y: 20 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }"
            :view="{ once: true }"
          >
            <Badge variant="secondary" class="text-lg px-4 py-2 text-white">
              {{ tech.name }}
            </Badge>
          </motion.div>
        </div>
      </div>
    </div>

    <!-- Gallery Section -->
    <div v-if="product.gallery.length" class="py-24 sm:py-32 bg-primary/5">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          class="text-3xl font-bold text-center mb-12"
          :initial="{ opacity: 0, y: -20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6, ease: 'easeOut' }"
          :view="{ once: true }"
        >
          Project Gallery
        </motion.h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <motion.div
            v-for="(image, index) in product.gallery"
            :key="index"
            class="overflow-hidden rounded-lg shadow-xl group"
            :initial="{ opacity: 0, scale: 0.9 }"
            :while-in-view="{ opacity: 1, scale: 1 }"
            :transition="{ duration: 0.5, delay: index * 0.1, ease: 'easeOut' }"
            :view="{ once: true, amount: 0.5 }"
          >
            <img
              :src="image"
              alt="Gallery image"
              class="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="py-20 sm:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-muted/40 rounded-lg py-16">
        <motion.div
          :initial="{ opacity: 0, y: 20 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, ease: 'easeOut' }"
          :view="{ once: true }"
        >
          <h2 class="text-3xl font-bold">Interested in this service?</h2>
          <p class="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals. Reach out for a free,
            no-obligation consultation.
          </p>
          <Button size="lg" class="mt-8 text-lg px-8 py-6" asChild>
            <RouterLink to="/contact">Get a Free Quote</RouterLink>
          </Button>
        </motion.div>
      </div>
    </div>
  </div>
</template>
