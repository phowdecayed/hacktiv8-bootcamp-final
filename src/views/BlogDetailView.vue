<script setup lang="ts">
import { useRoute, RouterLink } from 'vue-router'
import { computed, watch } from 'vue'
import { blogPosts } from '@/lib/blog-data'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  ArrowLeft,
  Calendar,
  User,
  Tag,
  Share2,
  Twitter,
  Linkedin,
  Facebook,
} from 'lucide-vue-next'
import { motion } from 'motion-v'

const route = useRoute()
const postId = computed(() => route.params.id as string)

const post = computed(() => {
  return blogPosts.find((p) => p.id === postId.value)
})

const relatedPosts = computed(() => {
  if (!post.value) return []
  return blogPosts.filter((p) => p.id !== post.value?.id).slice(0, 3) // Get 3 other posts
})

watch(
  () => route.params.id,
  () => {
    window.scrollTo(0, 0)
  },
)
</script>

<template>
  <div class="bg-background text-foreground">
    <div v-if="post" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="mb-8">
        <Button as-child variant="ghost">
          <RouterLink to="/blog" class="flex items-center gap-2 text-muted-foreground">
            <ArrowLeft class="w-4 h-4" />
            Back to Blog
          </RouterLink>
        </Button>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <!-- Main Content -->
        <motion.div
          class="lg:col-span-2"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7 }"
        >
          <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">{{ post.title }}</h1>
          <div class="flex flex-wrap items-center gap-x-6 gap-y-2 text-muted-foreground mb-8">
            <div class="flex items-center gap-2">
              <User class="w-5 h-5" />
              <span>{{ post.author.name }}</span>
            </div>
            <div class="flex items-center gap-2">
              <Calendar class="w-5 h-5" />
              <span>{{ post.date }}</span>
            </div>
          </div>
          <img
            :src="post.imageUrl"
            :alt="post.title"
            class="rounded-lg aspect-video object-cover w-full mb-8 shadow-lg"
          />
          <article class="prose prose-lg max-w-none" v-html="post.content"></article>
        </motion.div>

        <!-- Sidebar -->
        <motion.div
          class="lg:col-span-1 space-y-8 sticky top-24 self-start"
          :initial="{ opacity: 0, x: 20 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, delay: 0.2 }"
        >
          <!-- Author Card -->
          <div class="bg-muted/30 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">About the Author</h3>
            <div class="flex items-center gap-4">
              <Avatar class="w-16 h-16">
                <AvatarImage :src="post.author.avatarUrl" :alt="post.author.name" />
                <AvatarFallback>{{ post.author.name.charAt(0) }}</AvatarFallback>
              </Avatar>
              <div>
                <h4 class="font-semibold">{{ post.author.name }}</h4>
                <p class="text-sm text-muted-foreground">{{ post.author.bio }}</p>
              </div>
            </div>
          </div>

          <!-- Tags Card -->
          <div class="bg-muted/30 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <Tag class="w-5 h-5" />
              Tags
            </h3>
            <div class="flex flex-wrap gap-2">
              <Badge v-for="tag in post.tags" :key="tag" variant="secondary">{{ tag }}</Badge>
            </div>
          </div>

          <!-- Share Card -->
          <div class="bg-muted/30 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4 flex items-center gap-2">
              <Share2 class="w-5 h-5" />
              Share This Post
            </h3>
            <div class="flex gap-4">
              <Button variant="outline" size="icon">
                <Twitter class="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Facebook class="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin class="w-5 h-5" />
              </Button>
            </div>
          </div>

          <!-- Related Posts -->
          <div class="bg-muted/30 p-6 rounded-lg">
            <h3 class="text-xl font-bold mb-4">Related Posts</h3>
            <ul class="space-y-4">
              <li v-for="related in relatedPosts" :key="related.id">
                <RouterLink
                  :to="`/blog/${related.id}`"
                  class="hover:text-primary transition-colors group"
                >
                  <div class="flex gap-4">
                    <img :src="related.imageUrl" class="w-20 h-20 object-cover rounded-md" />
                    <div>
                      <p class="font-semibold leading-tight group-hover:underline">
                        {{ related.title }}
                      </p>
                      <p class="text-sm text-muted-foreground mt-1">{{ related.date }}</p>
                    </div>
                  </div>
                </RouterLink>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
    <div v-else class="text-center py-24">
      <h1 class="text-2xl text-muted-foreground">Post not found.</h1>
    </div>
  </div>
</template>

<style>
.prose {
  color: hsl(var(--foreground));
}
.prose h2 {
  color: hsl(var(--foreground));
  font-size: 1.875rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
}
.prose h3 {
  color: hsl(var(--foreground));
  font-size: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 1.5rem;
}
.prose p {
  line-height: 1.75;
  margin-bottom: 1.25rem;
}
.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.25rem;
}
.prose li {
  margin-bottom: 0.5rem;
}
.prose a {
  color: hsl(var(--primary));
  text-decoration: none;
  transition: color 0.2s;
}
.prose a:hover {
  color: hsl(var(--primary) / 0.8);
}
.prose pre {
  background-color: hsl(var(--muted));
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
}
.prose code {
  font-family: 'Courier New', Courier, monospace;
}
</style>
