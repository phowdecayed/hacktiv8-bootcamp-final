<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { motion } from 'motion-v'

const username = ref('')
const password = ref('')
const email = ref('')
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
          <CardTitle class="text-2xl">Register</CardTitle>
          <CardDescription>Create a new account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form class="space-y-4">
            <div class="space-y-2">
              <Label for="email">Email</Label>
              <Input id="email" v-model="email" type="email" required placeholder="email@example.com" />
            </div>
            <div class="space-y-2">
              <Label for="username">Username</Label>
              <Input id="username" v-model="username" required placeholder="Choose a username" />
            </div>
            <div class="space-y-2">
              <Label for="password">Password</Label>
              <Input id="password" v-model="password" type="password" required placeholder="Create a password" />
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button class="w-full">Register</Button>
        </CardFooter>
      </Card>
    </motion.div>
  </div>
</template>
