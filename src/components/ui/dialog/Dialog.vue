<script setup lang="ts">
import {
  DialogRoot,
  type DialogRootEmits,
  type DialogRootProps,
  useForwardPropsEmits,
} from 'reka-ui'

defineOptions({
  name: 'siteDialog',
})

const props = defineProps<DialogRootProps>()
const emits = defineEmits<DialogRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <DialogRoot data-slot="dialog" v-bind="forwarded">
    <slot />
  </DialogRoot>
</template>
