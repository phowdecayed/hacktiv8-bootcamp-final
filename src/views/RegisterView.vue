<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'motion-v'
import { toast } from 'vue-sonner'
import { RouterLink } from 'vue-router'
import AuthFormSkeleton from '@/components/ui/skeleton/AuthFormSkeleton.vue'

const auth = useAuthStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const email = ref('')
const isRegistering = ref(false)
const isLoading = ref(true)

const handleRegister = async () => {
  isRegistering.value = true
  const result = await auth.register(username.value, password.value)
  isRegistering.value = false

  if (result.success) {
    toast.success('Registration Successful!', {
      description: 'You will be redirected to the login page shortly.',
    })
    setTimeout(() => {
      router.push('/login')
    }, 2000)
  } else {
    toast.error('Registration Failed', {
      description: result.message,
    })
  }
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})
</script>

<template>
  <AuthFormSkeleton v-if="isLoading" :is-register="true" />
  <div v-else class="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-muted/20">
    <div class="w-full max-w-4xl mx-auto p-4">
      <div class="grid md:grid-cols-2 rounded-lg overflow-hidden shadow-2xl bg-background">
        <!-- Form Section -->
        <motion.div
          class="p-8 md:p-12"
          :initial="{ opacity: 0, x: -50 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7 }"
        >
          <Card class="border-none shadow-none">
            <CardHeader class="text-left">
              <CardTitle class="text-3xl font-bold">Create an Account</CardTitle>
              <CardDescription>Join us and start your journey today.</CardDescription>
            </CardHeader>
            <CardContent>
              <form @submit.prevent="handleRegister" class="space-y-4">
                <div class="space-y-2">
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    v-model="email"
                    type="email"
                    required
                    placeholder="email@example.com"
                  />
                </div>
                <div class="space-y-2">
                  <Label for="username">Username</Label>
                  <Input
                    id="username"
                    v-model="username"
                    required
                    placeholder="Choose a username"
                  />
                </div>
                <div class="space-y-2">
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    placeholder="Create a password"
                  />
                </div>
                <Button type="submit" class="w-full !mt-6" :disabled="isRegistering">
                  <span v-if="isRegistering">Registering...</span>
                  <span v-else>Register</span>
                </Button>
              </form>
            </CardContent>
            <CardFooter class="text-center text-sm">
              <p>
                Already have an account?
                <RouterLink to="/login" class="text-primary hover:underline">Login</RouterLink>
              </p>
            </CardFooter>
          </Card>
        </motion.div>

        <!-- Image Section -->
        <motion.div
          class="hidden md:block relative"
          :initial="{ opacity: 0, x: 50 }"
          :animate="{ opacity: 1, x: 0 }"
          :transition="{ duration: 0.7, delay: 0.2 }"
        >
          <img
            src="https://picsum.photos/seed/register/800/1000"
            alt="Registration illustration"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  </div>
</template>
