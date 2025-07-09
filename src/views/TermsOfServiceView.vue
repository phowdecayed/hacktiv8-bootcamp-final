<script setup lang="ts">
import { motion } from 'motion-v'
</script>

<template>
  <div class="bg-background text-foreground">
    <motion.div
      class="py-20 text-center bg-primary/5"
      :initial="{ opacity: 0, y: -20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.8 }"
    >
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Terms of Service
      </h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Effective date: {{ new Date().toLocaleDateString() }}
      </p>
    </motion.div>

    <div class="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert lg:prose-xl">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2>1. Agreement to Terms</h2>
        <p>
          By using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use our services. We may modify the terms at any time, and such modifications will be effective immediately upon posting.
        </p>

        <h2>2. User Accounts</h2>
        <p>
          To use certain features of our services, you may be required to create an account. You are responsible for safeguarding your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
        </p>

        <h2>3. Prohibited Activities</h2>
        <p>
          You agree not to engage in any of the following prohibited activities:
        </p>
        <ul>
          <li>Copying, distributing, or disclosing any part of the service in any medium.</li>
          <li>Using any automated system, including "robots," "spiders," "offline readers," etc., to access the service.</li>
          <li>Transmitting spam, chain letters, or other unsolicited email.</li>
          <li>Attempting to interfere with, compromise the system integrity or security, or decipher any transmissions to or from the servers running the service.</li>
        </ul>

        <h2>4. Termination</h2>
        <p>
          We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
        </p>
      </motion.div>
    </div>
  </div>
</template>

<style scoped>
.prose {
  /* Add any custom prose styles here if needed */
}
</style>
