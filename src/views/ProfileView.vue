<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { computed, ref } from 'vue'
import { toast } from 'vue-sonner'

const auth = useAuthStore()
const isSending = ref(false)

const userInitials = computed(() => {
  if (auth.user) {
    return auth.user.name
      .split(' ')
      .map((n) => n[0])
      .join('')
  }
  return ''
})

const handleResendVerification = async () => {
  isSending.value = true
  const success = await auth.resendVerificationEmail()
  isSending.value = false

  if (success) {
    toast.success('Verification Email Sent!', {
      description: 'Please check your inbox for the verification link.'
    })
  } else {
    toast.error('Failed to Send Email', {
      description: 'Please try again later.'
    })
  }
}
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-muted/20">
    <div class="w-full max-w-2xl mx-auto p-4">
      <Card class="shadow-2xl">
        <CardHeader class="text-center">
          <div class="flex justify-center mb-4">
            <Avatar class="h-24 w-24 text-3xl">
              <AvatarImage
                :src="`https://api.dicebear.com/6.x/initials/svg?seed=${auth.user?.name}`"
              />
              <AvatarFallback>{{ userInitials }}</AvatarFallback>
            </Avatar>
          </div>
          <CardTitle class="text-3xl font-bold">{{ auth.user?.name }}</CardTitle>
        </CardHeader>
        <CardContent class="space-y-4">
          <div class="flex items-center justify-between">
            <span class="text-muted-foreground">Email</span>
            <span>{{ auth.user?.email }}</span>
          </div>
          <div class="flex items-center justify-between">
            <span class="text-muted-foreground">Email Verified</span>
            <span
              :class="
                auth.user?.email_verified_at ? 'text-green-500' : 'text-red-500'
              "
            >
              {{ auth.user?.email_verified_at ? 'Yes' : 'No' }}
            </span>
          </div>
        </CardContent>
        <CardFooter v-if="!auth.user?.email_verified_at" class="flex justify-center">
          <Button @click="handleResendVerification" :disabled="isSending">
            <span v-if="isSending">Sending...</span>
            <span v-else>Resend Verification Email</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>