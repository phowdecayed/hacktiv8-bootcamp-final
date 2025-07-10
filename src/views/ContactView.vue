<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Mail, Phone, MapPin, Share2 } from 'lucide-vue-next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { motion } from 'motion-v'
import { Skeleton } from '@/components/ui/skeleton'
import { useContactStore } from '@/stores/contact'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)
const isMapLoading = ref(true)

const contactStore = useContactStore()

const submitForm = () => {
  contactStore.addMessage(name.value, email.value, message.value)
  submitted.value = true
  
  // Reset form after a few seconds
  setTimeout(() => {
    name.value = ''
    email.value = ''
    message.value = ''
    submitted.value = false
  }, 3000)
}

onMounted(() => {
  // Simulate map loading time
  setTimeout(() => {
    isMapLoading.value = false
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
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Hubungi Kami</h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Punya pertanyaan atau ingin berkolaborasi? Kami siap membantu.
      </p>
    </motion.div>

    <div class="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          :initial="{ opacity: 0, x: -30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.2 }"
        >
          <Card class="h-full">
            <CardHeader>
              <CardTitle class="text-2xl">Informasi Kontak</CardTitle>
              <CardDescription> Hubungi kami melalui detail di bawah ini. </CardDescription>
            </CardHeader>
            <CardContent class="space-y-6">
              <div class="flex items-center space-x-4">
                <MapPin class="w-6 h-6 text-primary" />
                <div>
                  <h3 class="font-semibold">Alamat</h3>
                  <p class="text-muted-foreground">Gedung Sate, Bandung, Indonesia</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <Mail class="w-6 h-6 text-primary" />
                <div>
                  <h3 class="font-semibold">Email</h3>
                  <p class="text-muted-foreground">info@example.com</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <Phone class="w-6 h-6 text-primary" />
                <div>
                  <h3 class="font-semibold">Telepon</h3>
                  <p class="text-muted-foreground">(+62) 123-456-7890</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <Share2 class="w-6 h-6 text-primary" />
                <div>
                  <h3 class="font-semibold">Media Sosial</h3>
                  <div class="flex space-x-2 mt-1">
                    <Button variant="outline" size="icon">
                      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.62 10.5h-1.9v6h-2.5v-6h-1.4v-2.2h1.4v-1.6c0-1.4.86-2.2 2.14-2.2.61 0 1.14.05 1.29.07v2.1h-1.24c-.68 0-.81.32-.81.79v1.1h2.2l-.28 2.2z"
                        />
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
                        <path
                          d="M22.46 6c-.77.34-1.6.57-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.49-1.75.85-2.72 1.04C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.72-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.76 2.8 1.91 3.56-.71 0-1.37-.22-1.95-.54v.05c0 2.08 1.48 3.82 3.44 4.21-.36.1-.74.15-1.13.15-.28 0-.55-.03-.81-.08.55 1.7 2.13 2.94 4.02 2.97-1.47 1.15-3.32 1.83-5.33 1.83-.35 0-.69-.02-1.03-.06 1.9 1.22 4.16 1.93 6.56 1.93 7.88 0 12.2-6.54 12.2-12.2 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.22z"
                        />
                      </svg>
                    </Button>
                    <Button variant="outline" size="icon">
                      <svg viewBox="0 0 24 24" class="h-5 w-5" fill="currentColor">
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.67 12.4c.28-.48.45-.9.45-1.4 0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .5.17.92.45 1.4H7.5v-5h2v1.5c.55-.9 1.45-1.5 2.5-1.5s2.5.6 2.5 1.5V12h2v2.4h-2.83zM11 12c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1-1-.45-1-1z"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          :initial="{ opacity: 0, x: 30 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.6, delay: 0.4 }"
        >
          <Card class="h-full">
            <CardHeader>
              <CardTitle class="text-2xl">Kirim Pesan</CardTitle>
              <CardDescription> Isi formulir di bawah ini untuk menghubungi kami. </CardDescription>
            </CardHeader>
            <CardContent>
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
              <form v-else @submit.prevent="submitForm" class="space-y-4">
                <div class="space-y-2">
                  <label for="name" class="font-medium">Nama</label>
                  <Input id="name" v-model="name" required placeholder="Masukkan nama Anda" />
                </div>
                <div class="space-y-2">
                  <label for="email" class="font-medium">Email</label>
                  <Input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    placeholder="nama@email.com"
                  />
                </div>
                <div class="space-y-2">
                  <label for="message" class="font-medium">Pesan</label>
                  <Textarea
                    id="message"
                    v-model="message"
                    placeholder="Tulis pesan Anda disini..."
                    required
                    rows="5"
                  />
                </div>
                <Button type="submit" class="w-full">Kirim Pesan</Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <!-- Map Section -->
      <Card v-if="isMapLoading" class="mt-16">
        <CardHeader>
          <CardTitle class="text-2xl">Lokasi Kami</CardTitle>
        </CardHeader>
        <CardContent>
          <Skeleton class="aspect-video w-full rounded-lg" />
        </CardContent>
      </Card>
      <motion.div
        v-else
        :initial="{ opacity: 0, y: 30 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.5, delay: 0.2 }"
        class="mt-16"
      >
        <Card>
          <CardHeader>
            <CardTitle class="text-2xl">Lokasi Kami</CardTitle>
          </CardHeader>
          <CardContent>
            <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
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
  </div>
</template>
