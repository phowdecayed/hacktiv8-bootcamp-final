<script setup lang="ts">
import TestimonialCard from '@/components/home/TestimonialCard.vue'
import { motion } from 'motion-v'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

defineOptions({
  name: 'HomeTestimonials',
})

const testimonials = [
  {
    quote: 'This application has been a complete game-changer for our team.',
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
  {
    quote:
      "The collaboration features are top-notch, allowing our remote team to work together seamlessly. It's like we're all in the same room.",
    author: 'Siti Aminah',
    title: 'Lead Developer, Innovate Inc.',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    quote:
      'Customer support is incredibly responsive and helpful. Any issue we had was resolved within hours, not days.',
    author: 'Rizky Pratama',
    title: 'Project Manager, BuildRight',
    avatar: 'https://i.pravatar.cc/150?img=11',
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

      <motion.div
        :initial="{ opacity: 0, y: 50 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.7, delay: 0.2 }"
      >
        <Carousel
          class="relative w-full max-w-5xl mx-auto"
          :opts="{
            align: 'start',
            loop: true,
          }"
          :plugins="[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]"
        >
          <CarouselContent>
            <CarouselItem
              v-for="(testimonial, index) in testimonials"
              :key="index"
              class="md:basis-1/2 lg:basis-1/3"
            >
              <div class="p-2 h-full">
                <TestimonialCard
                  :quote="testimonial.quote"
                  :author="testimonial.author"
                  :title="testimonial.title"
                  :avatar="testimonial.avatar"
                  class="h-full"
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="absolute left-[-50px] top-1/2 -translate-y-1/2" />
          <CarouselNext class="absolute right-[-50px] top-1/2 -translate-y-1/2" />
        </Carousel>
      </motion.div>
    </div>
  </section>
</template>
