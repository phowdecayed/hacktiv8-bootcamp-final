<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'motion-v'

const auth = useAuthStore()
const username = ref('')
const password = ref('')
const error = ref(false)

const handleLogin = async () => {
  const success = await auth.login(username.value, password.value)
  if (!success) {
    error.value = true
  }
}
</script>

<template>
  <div class="py-12 px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
    <motion.div
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.6 }"
    >
      <Card>
        <CardHeader class="text-center">
          <CardTitle class="text-2xl">Login</CardTitle>
          <CardDescription>Enter your credentials to access your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form @submit.prevent="handleLogin" class="space-y-4">
            <div class="space-y-2">
              <Label for="username">Username</Label>
              <Input id="username" v-model="username" required placeholder="admin" />
            </div>
            <div class="space-y-2">
              <Label for="password">Password</Label>
              <Input id="password" v-model="password" type="password" required placeholder="admin" />
            </div>
            <p v-if="error" class="text-sm text-destructive">Invalid username or password.</p>
          </form>
        </CardContent>
        <CardFooter>
          <Button @click="handleLogin" class="w-full">Login</Button>
        </CardFooter>
      </Card>
    </motion.div>
  </div>
</template>