<script setup lang="ts">
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { motion } from 'motion-v'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = () => {
  // Simulasi pengiriman form
  setTimeout(() => {
    submitted.value = true
    // Reset formulir setelah beberapa detik
    setTimeout(() => {
      name.value = ''
      email.value = ''
      message.value = ''
      submitted.value = false
    }, 3000)
  }, 500)
}
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
    <motion.div
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
      class="text-center"
    >
      <h1 class="text-3xl font-extrabold text-foreground sm:text-4xl">Hubungi Kami</h1>
      <p class="mt-4 text-lg text-muted-foreground">
        Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk menghubungi kami.
      </p>
    </motion.div>

    <div class="mt-12 max-w-lg mx-auto">
      <motion.div
        v-if="submitted"
        :initial="{ opacity: 0, scale: 0.9 }"
        :animate="{ opacity: 1, scale: 1 }"
        :transition="{ type: 'spring', stiffness: 300, damping: 25 }"
        class="mb-6"
      >
        <Alert>
          <AlertTitle>Berhasil</AlertTitle>
          <AlertDescription>
            Pesan Anda berhasil dikirim! Kami akan segera menghubungi Anda.
          </AlertDescription>
        </Alert>
      </motion.div>

      <motion.div
        v-if="!submitted"
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
      >
        <Card>
          <CardHeader>
            <CardTitle>Kirim Pesan</CardTitle>
            <CardDescription> Isi formulir di bawah ini untuk menghubungi kami </CardDescription>
          </CardHeader>
          <CardContent>
            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="space-y-2">
                <label
                  for="name"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >Nama</label
                >
                <Input id="name" v-model="name" required placeholder="Masukkan nama Anda" />
              </div>

              <div class="space-y-2">
                <label
                  for="email"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >Email</label
                >
                <Input
                  id="email"
                  v-model="email"
                  type="email"
                  required
                  placeholder="nama@email.com"
                />
              </div>

              <div class="space-y-2">
                <label
                  for="message"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >Pesan</label
                >
                <Textarea
                  id="message"
                  v-model="message"
                  placeholder="Tulis pesan Anda disini..."
                  required
                  rows="4"
                />
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Button type="submit" @click="submitForm" class="w-full">Kirim Pesan</Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
    <motion.div
      :initial="{ opacity: 0, y: 30 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.5, delay: 0.4 }"
      class="mt-12"
    >
      <Card>
        <CardHeader>
          <CardTitle>Lokasi Kami</CardTitle>
        </CardHeader>
        <CardContent>
          <div class="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.900750969868!2d107.61383088015225!3d-6.902471475297502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e64c5e8866e5%3A0x37be7ac9d575f7ed!2sGedung%20Sate!5e0!3m2!1sen!2ssg!4v1752065753199!5m2!1sen!2ssg"
              width="100%"
              height="450"
              style="border: 0"
              loading="lazy"
            ></iframe>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  </div>
</template>
