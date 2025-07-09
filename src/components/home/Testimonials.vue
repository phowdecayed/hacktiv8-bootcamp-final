<script setup lang="ts">
import TestimonialCard from '@/components/home/TestimonialCard.vue'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { motion } from 'motion-v'

defineOptions({
  name: 'HomeTestimonials',
})

const testimonials = [
  {
    quote:
      'Aplikasi ini sangat membantu tim kami dalam mengorganisir proyek dengan tampilan yang bersih dan mudah digunakan.',
    author: 'Budi Santoso',
    title: 'CTO, Tech Solutions',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    quote:
      'Dengan fitur-fitur modern dan responsif, aplikasi ini mempercepat workflow kami secara signifikan.',
    author: 'Dewi Lestari',
    title: 'Product Manager, Creative Studio',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    quote:
      'Interface yang intuitif dan kecepatan loading halaman membuat pengalaman penggunaan menjadi sangat menyenangkan.',
    author: 'Ahmad Fauzi',
    title: 'UI/UX Designer, Design Hub',
    avatar: 'https://i.pravatar.cc/150?img=8',
  },
]
</script>

<template>
  <section class="py-24 bg-muted/10">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Card class="border-none bg-transparent shadow-none">
        <motion.div
          :initial="{ opacity: 0, y: 30 }"
          :animate="{ opacity: 1, y: 0 }"
          :transition="{ duration: 0.6 }"
        >
          <CardHeader class="text-center">
            <div class="inline-flex items-center justify-center">
              <span class="text-base font-semibold tracking-wide text-primary uppercase"
                >Testimonial</span
              >
            </div>
            <CardTitle class="mt-2 text-3xl font-extrabold sm:text-4xl">
              Apa Kata Pengguna Kami
            </CardTitle>
            <CardDescription class="mt-4 max-w-2xl mx-auto text-xl">
              Pendapat dari para profesional yang telah menggunakan aplikasi kami
            </CardDescription>
          </CardHeader>
        </motion.div>
      </Card>

      <div class="mt-16">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <motion.div
            v-for="(testimonial, index) in testimonials"
            :key="testimonial.author"
            :initial="{ opacity: 0, y: 30 }"
            :animate="{ opacity: 1, y: 0 }"
            :transition="{ duration: 0.5, delay: 0.1 + 0.15 * index }"
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