<script setup lang="ts">
import {
  ComboboxRoot,
  type ComboboxRootEmits,
  type ComboboxRootProps,
  useForwardPropsEmits,
} from 'reka-ui'

const props = defineProps<ComboboxRootProps>()
const emits = defineEmits<ComboboxRootEmits>()

defineOptions({
  name: 'siteCombobox',
})

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
  <ComboboxRoot data-slot="combobox" v-bind="forwarded">
    <slot />
  </ComboboxRoot>
</template>
