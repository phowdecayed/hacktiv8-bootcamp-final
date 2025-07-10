<template>
  <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-lg shadow-xl w-full max-w-lg h-4/5 relative">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="lucide lucide-x"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
      <iframe
        src="https://ai.bpkadprovjabar.page/chatbot/jTGbdWnj746b4MsQ"
        style="width: 100%; height: 100%; border-radius: 0.5rem"
        frameborder="0"
        allow="microphone"
      ></iframe>
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits(['close'])
</script>
