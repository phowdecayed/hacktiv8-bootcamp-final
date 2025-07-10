<script setup lang="ts">
import TestimonialCard from '@/components/home/TestimonialCard.vue'
import { motion } from 'motion-v'

defineOptions({
  name: 'HomeTestimonials',
})

const testimonials = [
  {
    quote:
      "This application has been a complete game-changer for our team. Before, we were juggling multiple platforms, leading to communication breakdowns and missed deadlines. Now, with this single, unified solution, our workflow has been streamlined beyond what we thought possible. The clean interface is incredibly intuitive, and the powerful, behind-the-scenes features have automated so many of our tedious tasks. Our productivity has easily increased by 40%, and team morale is at an all-time high. It's not just a tool; it's the new backbone of our operations.",
    author: 'Budi Santoso',
    title: 'CTO, Tech Solutions',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote:
      'The modern, responsive design has accelerated our development process and improved user engagement.',
    author: 'Dewi Lestari',
    title: 'Product Manager, Creative Studio',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    quote:
      'An intuitive interface and blazing-fast page loads make for a delightful user experience.',
    author: 'Ahmad Fauzi',
    title: 'UI/UX Designer, Design Hub',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
]
</script>

<template>
  <section class="py-24 bg-muted/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        class="text-center mb-16"
        :initial="{ opacity: 0, y: 30 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2 class="text-base font-semibold tracking-wide text-primary uppercase">Testimonials</h2>
        <p class="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
          What Our Users Are Saying
        </p>
        <p class="mt-4 max-w-2xl mx-auto text-xl text-muted-foreground">
          Opinions from professionals who have used our application.
        </p>
      </motion.div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Featured Testimonial -->
        <motion.div
          class="lg:col-span-2"
          :initial="{ opacity: 0, y: 50 }"
          :while-in-view="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.7, delay: 0.2 }"
        >
          <TestimonialCard
            :quote="testimonials[0].quote"
            :author="testimonials[0].author"
            :title="testimonials[0].title"
            :avatar="testimonials[0].avatar"
          />
        </motion.div>

        <!-- Other Testimonials -->
        <div class="space-y-8">
          <motion.div
            v-for="(testimonial, index) in testimonials.slice(1)"
            :key="testimonial.author"
            :initial="{ opacity: 0, y: 50 }"
            :while-in-view="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.7, delay: 0.3 + index * 0.1 }"
          >
            <TestimonialCard
              :quote="testimonial.quote"
              :author="testimonial.author"
              :title="testimonial.title"
              :avatar="testimonial.avatar"
            />
          </motion.div>
        </div>
      </div>
    </div>
  </section>
</template>
