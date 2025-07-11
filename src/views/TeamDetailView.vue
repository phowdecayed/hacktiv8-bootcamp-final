<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useTeamStore } from '@/stores/team'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Twitter, Linkedin, Github, ArrowLeft } from 'lucide-vue-next'
import { motion } from 'motion-v'

const route = useRoute()
const teamStore = useTeamStore()

const member = computed(() => {
  return teamStore.getMemberByName(route.params.name as string)
})
</script>

<template>
  <div v-if="member" class="bg-background text-foreground">
    <!-- Hero Section -->
    <motion.div
      class="py-20 text-center bg-primary/5"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <Avatar class="w-32 h-32 mx-auto mb-4 border-4 border-background shadow-lg">
        <AvatarImage :src="member.avatar" :alt="member.name" />
        <AvatarFallback>{{ member.name.charAt(0) }}</AvatarFallback>
      </Avatar>
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl">{{ member.name }}</h1>
      <p class="mt-2 text-xl text-primary font-semibold">{{ member.role }}</p>
    </motion.div>

    <!-- Content Section -->
    <div class="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, delay: 0.2 }"
      >
        <!-- Bio -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-4">About Me</h2>
          <p class="text-lg text-muted-foreground leading-relaxed">{{ member.bio }}</p>
        </div>

        <!-- Skills -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Skills</h2>
          <div class="flex flex-wrap gap-2">
            <Badge
              v-for="skill in member.skills"
              :key="skill"
              variant="secondary"
              class="text-base text-white px-3 py-1"
            >
              {{ skill }}
            </Badge>
          </div>
        </div>

        <!-- Social Links -->
        <div class="mb-12">
          <h2 class="text-2xl font-bold mb-4">Connect</h2>
          <div class="flex gap-4">
            <Button variant="outline" size="icon" asChild>
              <a :href="member.social.twitter" target="_blank">
                <Twitter class="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a :href="member.social.linkedin" target="_blank">
                <Linkedin class="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a :href="member.social.github" target="_blank">
                <Github class="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <!-- Back Button -->
        <div class="text-center">
          <Button variant="ghost" asChild>
            <RouterLink to="/about">
              <ArrowLeft class="mr-2 h-4 w-4" />
              Back to Team Page
            </RouterLink>
          </Button>
        </div>
      </motion.div>
    </div>
  </div>
  <div v-else class="text-center py-20">
    <h1 class="text-2xl">Team member not found.</h1>
  </div>
</template>
