<script setup lang="ts">
import { ref, computed } from 'vue'
import { blogPosts, type BlogPost } from '@/lib/blog-data'
import BlogPostCard from '@/components/blog/BlogPostCard.vue'
import BlogSearch from '@/components/blog/BlogSearch.vue'
import { motion } from 'motion-v'

const searchTerm = ref('')

const filteredPosts = computed(() => {
  if (!searchTerm.value) {
    return blogPosts
  }
  return blogPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.value.toLowerCase())
  )
})
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
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">From the Blog</h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Insights, tutorials, and updates from our team.
      </p>
    </motion.div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="mb-12 max-w-lg mx-auto">
        <BlogSearch v-model="searchTerm" />
      </div>

      <motion.div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
      >
        <motion.div
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.1 }"
        >
          <BlogPostCard :post="post" />
        </motion.div>
      </motion.div>

      <div
        v-if="filteredPosts.length === 0"
        class="text-center py-16 text-muted-foreground"
      >
        <p class="text-xl">No articles found for "{{ searchTerm }}".</p>
        <p>Try searching for something else.</p>
      </div>
    </div>
  </div>
</template>
