<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { toast } from 'vue-sonner'

const route = useRoute()
const router = useRouter()
const auth = useAuthStore()

const isLoading = ref(true)
const isSuccess = ref(false)

onMounted(async () => {
  const verificationUrl = route.query.url as string

  if (verificationUrl) {
    const success = await auth.verifyEmail(verificationUrl)
    isSuccess.value = success
    if (success) {
      toast.success('Email Verified!', {
        description: 'You can now log in with your verified email.'
      })
    } else {
      toast.error('Verification Failed', {
        description: 'The verification link is invalid or has expired.'
      })
    }
  } else {
    isSuccess.value = false
    toast.error('Invalid Verification Link')
  }
  isLoading.value = false
})

const redirectToLogin = () => {
  router.push('/login')
}
</script>

<template>
  <div class="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-muted/20">
    <Card class="w-full max-w-md text-center">
      <CardHeader>
        <CardTitle class="text-2xl">
          <span v-if="isLoading">Verifying your email...</span>
          <span v-else-if="isSuccess">Verification Successful!</span>
          <span v-else>Verification Failed</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p v-if="isLoading" class="text-muted-foreground">Please wait a moment.</p>
        <p v-else-if="isSuccess" class="text-muted-foreground">
          Your email has been successfully verified.
        </p>
        <p v-else class="text-muted-foreground">
          The verification link is invalid or has expired. Please try again.
        </p>
        <Button @click="redirectToLogin" class="mt-6">Go to Login</Button>
      </CardContent>
    </Card>
  </div>
</template>
