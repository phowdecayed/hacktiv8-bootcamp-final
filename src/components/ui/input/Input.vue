<script setup lang="ts">
import { ref, useAttrs, type HTMLAttributes, computed, type InputHTMLAttributes } from 'vue'
import { useVModel } from '@vueuse/core'
import { cn } from '@/lib/utils'
import { Eye, EyeOff } from 'lucide-vue-next'

const props = defineProps<{
  defaultValue?: string | number
  modelValue?: string | number
  class?: HTMLAttributes['class']
}>()

const emits = defineEmits<{
  (e: 'update:modelValue', payload: string | number): void
}>()

const modelValue = useVModel(props, 'modelValue', emits, {
  passive: true,
  defaultValue: props.defaultValue,
})

const attrs = useAttrs()
const isPasswordVisible = ref(false)

const isPasswordField = computed(() => attrs.type === 'password')

const inputType = computed<InputHTMLAttributes['type']>(() => {
  if (isPasswordField.value) {
    return isPasswordVisible.value ? 'text' : 'password'
  }
  return attrs.type as InputHTMLAttributes['type']
})

function togglePasswordVisibility() {
  isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<template>
  <div class="relative">
    <input
      v-model="modelValue"
      :type="inputType"
      :class="
        cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-2 text-base shadow-sm transition-[color,box-shadow] outline-none file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-primary focus-visible:ring-primary/20 focus-visible:ring-2',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          isPasswordField ? 'pr-10' : '',
          props.class,
        )
      "
    />
    <button
      v-if="isPasswordField"
      type="button"
      @click="togglePasswordVisibility"
      class="absolute inset-y-0 right-0 flex items-center justify-center h-full w-10 text-muted-foreground hover:text-foreground transition-colors"
    >
      <Eye v-if="!isPasswordVisible" class="h-5 w-5" />
      <EyeOff v-else class="h-5 w-5" />
    </button>
  </div>
</template>
