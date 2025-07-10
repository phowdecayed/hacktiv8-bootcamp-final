<script setup lang="ts">
import { ref, onMounted } from 'vue'
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
import { RouterLink } from 'vue-router'
import { toast } from 'vue-sonner'
import AuthFormSkeleton from '@/components/ui/skeleton/AuthFormSkeleton.vue'

const auth = useAuthStore()
const username = ref('')
const password = ref('')
const isLoading = ref(true)

const handleLogin = async () => {
  const success = await auth.login(username.value, password.value)
  if (!success) {
    toast.error('Login Failed', {
      description: 'Invalid username or password.',
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
  <AuthFormSkeleton v-if="isLoading" />
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
              <CardTitle class="text-3xl font-bold">Welcome Back</CardTitle>
              <CardDescription>Enter your credentials to access your account.</CardDescription>
            </CardHeader>
            <CardContent>
              <form @submit.prevent="handleLogin" class="space-y-4">
                <div class="space-y-2">
                  <Label for="username">Username</Label>
                  <Input id="username" v-model="username" required placeholder="username" />
                </div>
                <div class="space-y-2">
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    v-model="password"
                    type="password"
                    required
                    placeholder="password"
                  />
                </div>
                <Button type="submit" class="w-full !mt-6">Login</Button>
              </form>
            </CardContent>
            <CardFooter class="text-center text-sm">
              <p>
                Don't have an account?
                <RouterLink to="/register" class="text-primary hover:underline"
                  >Register</RouterLink
                >
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
            src="https://picsum.photos/seed/login/800/1000"
            alt="Login illustration"
            class="absolute inset-0 w-full h-full object-cover"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>
      </div>
    </div>
  </div>
</template>
