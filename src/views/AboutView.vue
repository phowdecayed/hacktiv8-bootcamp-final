<script setup lang="ts">
import { motion } from 'motion-v'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Twitter, Linkedin } from 'lucide-vue-next'
import { useTeamStore } from '@/stores/team'
import { RouterLink } from 'vue-router'

const teamStore = useTeamStore()
const teamMembers = teamStore.members

const slugify = (name: string) => {
  return name.toLowerCase().replace(/\s+/g, '-')
}

const timeline = [
  {
    year: '2020',
    title: 'Company Founded',
    description: 'Our journey began with a small team and a big idea.',
  },
  {
    year: '2021',
    title: 'First Product Launch',
    description: 'We launched our first product to a small group of beta testers.',
  },
  {
    year: '2022',
    title: 'Reached 1,000 Users',
    description: 'A major milestone for our team and our growing community.',
  },
  {
    year: '2023',
    title: 'Secured Series A Funding',
    description: 'We secured our first round of funding to accelerate our growth.',
  },
]
</script>

<template>
  <div class="bg-background text-foreground">
    <!-- Hero Section -->
    <motion.div
      class="py-20 text-center bg-primary/5"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        About Our Company
      </h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        We are a passionate team dedicated to building modern solutions for the future.
      </p>
    </motion.div>

    <!-- Mission and Vision Section -->
    <div class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          :initial="{ opacity: 0, x: -30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
          <p class="text-muted-foreground text-lg">
            To empower businesses with accessible and powerful technology, helping them achieve their full potential.
          </p>
        </motion.div>
        <motion.div
          :initial="{ opacity: 0, x: 30 }"
          :while-in-view="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <h2 class="text-3xl font-bold mb-4">Our Vision</h2>
          <p class="text-muted-foreground text-lg">
            To be a leader in technological innovation, creating products that are not only functional but also inspiring.
          </p>
        </motion.div>
      </div>
    </div>

    <!-- Timeline Section -->
    <div class="py-24 bg-muted/20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div class="text-center mb-16" :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0 }">
          <h2 class="text-3xl font-bold">Our Journey</h2>
          <p class="text-muted-foreground mt-2">A brief history of our company's milestones.</p>
        </motion.div>
        <div class="relative">
          <!-- Timeline line -->
          <div class="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
          <!-- Timeline items -->
          <div v-for="(item, index) in timeline" :key="item.year" class="relative mb-12">
            <motion.div
              class="flex items-center"
              :class="index % 2 === 0 ? 'justify-start' : 'justify-end'"
              :initial="{ opacity: 0, y: 50 }"
              :while-in-view="{ opacity: 1, y: 0 }"
              :transition="{ duration: 0.5, delay: 0.1 * index }"
            >
              <div class="w-5/12">
                <Card :class="index % 2 === 0 ? 'text-right' : 'text-left'">
                  <CardHeader>
                    <p class="text-sm text-primary font-semibold">{{ item.year }}</p>
                    <CardTitle>{{ item.title }}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-muted-foreground">{{ item.description }}</p>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
            <!-- Timeline dot -->
            <div class="absolute left-1/2 top-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div class="text-center mb-16" :initial="{ opacity: 0, y: 20 }" :while-in-view="{ opacity: 1, y: 0 }">
        <h2 class="text-3xl font-bold">Meet Our Team</h2>
        <p class="text-muted-foreground mt-2">The talented people behind our success.</p>
      </motion.div>
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <RouterLink
          v-for="(member, index) in teamMembers"
          :key="member.id"
          :to="`/team/${slugify(member.name)}`"
          class="group relative"
        >
          <motion.div
            class="h-full"
            :initial="{ opacity: 0, y: 30, scale: 0.95 }"
            :while-in-view="{ opacity: 1, y: 0, scale: 1 }"
            :transition="{ duration: 0.5, delay: 0.1 * index }"
          >
            <Card class="h-full text-center transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2 bg-muted/20 border-transparent">
              <CardContent class="pt-8">
                <div class="relative inline-block">
                  <Avatar class="w-28 h-28 mx-auto mb-4 border-4 border-background group-hover:border-primary transition-colors duration-300">
                    <AvatarImage :src="member.avatar" :alt="member.name" />
                    <AvatarFallback>{{ member.name.charAt(0) }}</AvatarFallback>
                  </Avatar>
                </div>
                <h3 class="text-xl font-bold">{{ member.name }}</h3>
                <Badge variant="secondary" class="mt-1">{{ member.role }}</Badge>
                <div class="mt-5 flex justify-center gap-4">
                  <a :href="member.social.twitter" class="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Twitter class="h-5 w-5" />
                  </a>
                  <a :href="member.social.linkedin" class="text-muted-foreground hover:text-primary transition-colors duration-300">
                    <Linkedin class="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
