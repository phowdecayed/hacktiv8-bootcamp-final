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
      <h1 class="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">Privacy Policy</h1>
      <p class="mt-6 max-w-2xl mx-auto text-xl text-muted-foreground">
        Last updated: {{ new Date().toLocaleDateString() }}
      </p>
    </motion.div>

    <div class="py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose dark:prose-invert lg:prose-xl">
      <motion.div
        :initial="{ opacity: 0, y: 20 }"
        :while-in-view="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.6 }"
      >
        <h2>1. Introduction</h2>
        <p>
          Welcome to MINIMALIST. We are committed to protecting your privacy. This Privacy Policy
          explains how we collect, use, disclose, and safeguard your information when you visit our
          website. Please read this privacy policy carefully. If you do not agree with the terms of
          this privacy policy, please do not access the site.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect information about you in a variety of ways. The information we may collect
          on the Site includes:
        </p>
        <ul>
          <li>
            <strong>Personal Data:</strong> Personally identifiable information, such as your name,
            shipping address, email address, and telephone number, and demographic information, such
            as your age, gender, hometown, and interests, that you voluntarily give to us when you
            register with the Site or when you choose to participate in various activities related
            to the Site.
          </li>
          <li>
            <strong>Derivative Data:</strong> Information our servers automatically collect when you
            access the Site, such as your IP address, your browser type, your operating system, your
            access times, and the pages you have viewed directly before and after accessing the
            Site.
          </li>
        </ul>

        <h2>3. Use of Your Information</h2>
        <p>
          Having accurate information about you permits us to provide you with a smooth, efficient,
          and customized experience. Specifically, we may use information collected about you via
          the Site to:
        </p>
        <ul>
          <li>Create and manage your account.</li>
          <li>Email you regarding your account or order.</li>
          <li>Enable user-to-user communications.</li>
          <li>
            Fulfill and manage purchases, orders, payments, and other transactions related to the
            Site.
          </li>
        </ul>

        <h2>4. Contact Us</h2>
        <p>
          If you have questions or comments about this Privacy Policy, please contact us at:
          <a href="/contact">Contact Page</a>
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
