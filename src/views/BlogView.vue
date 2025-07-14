<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { blogPosts } from '@/lib/blog-data'
import BlogPostCard from '@/components/blog/BlogPostCard.vue'
import BlogPostListItem from '@/components/blog/BlogPostListItem.vue'
import BlogSearch from '@/components/blog/BlogSearch.vue'
import BlogPostCardSkeleton from '@/components/blog/BlogPostCardSkeleton.vue'
import BlogPostListItemSkeleton from '@/components/blog/BlogPostListItemSkeleton.vue'
import { Button } from '@/components/ui/button'
import { LayoutGrid, List } from 'lucide-vue-next'
import { motion } from 'motion-v'

type ViewMode = 'grid' | 'list'

const searchTerm = ref('')
const viewMode = ref<ViewMode>('grid')
const isLoading = ref(true)

const filteredPosts = computed(() => {
  if (!searchTerm.value) {
    return blogPosts
  }
  return blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      post.author.name.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm.value.toLowerCase())),
  )
})

function setViewMode(mode: ViewMode) {
  viewMode.value = mode
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1500)
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
      <div class="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
        <div class="w-full md:max-w-lg">
          <BlogSearch v-model="searchTerm" />
        </div>
        <div class="flex items-center gap-2">
          <Button
            variant="outline"
            size="icon"
            @click="setViewMode('grid')"
            :class="{ 'bg-primary/10 text-primary': viewMode === 'grid' }"
          >
            <LayoutGrid class="w-5 h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            @click="setViewMode('list')"
            :class="{ 'bg-primary/10 text-primary': viewMode === 'list' }"
          >
            <List class="w-5 h-5" />
          </Button>
        </div>
      </div>

      <!-- Skeleton Loader -->
      <div v-if="isLoading">
        <div
          v-if="viewMode === 'grid'"
          class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <BlogPostCardSkeleton v-for="n in 6" :key="`sk-grid-${n}`" />
        </div>
        <div v-else class="flex flex-col gap-8">
          <BlogPostListItemSkeleton
            v-for="n in 4"
            :key="`sk-list-${n}`"
            :image-position="n % 2 === 0 ? 'right' : 'left'"
          />
        </div>
      </div>

      <!-- Content -->
      <motion.div
        v-else
        :key="viewMode"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.5 }"
        :class="[
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
            : 'flex flex-col gap-8',
        ]"
      >
        <motion.div
          v-for="(post, index) in filteredPosts"
          :key="post.id"
          :initial="{ opacity: 0, y: 20 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.5, delay: index * 0.05 }"
        >
          <BlogPostCard v-if="viewMode === 'grid'" :post="post" />
          <BlogPostListItem
            v-else
            :post="post"
            :image-position="index % 2 === 0 ? 'left' : 'right'"
          />
        </motion.div>
      </motion.div>

      <div
        v-if="!isLoading && filteredPosts.length === 0"
        class="text-center py-16 text-muted-foreground"
      >
        <p class="text-xl">No articles found for "{{ searchTerm }}".</p>
        <p>Try searching for something else.</p>
      </div>
    </div>
  </div>
</template>
