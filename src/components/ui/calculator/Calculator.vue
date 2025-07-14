<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const expression = ref('')
const currentInput = ref('0')
const hasCalculated = ref(false)

defineOptions({
  name: 'siteCalculator',
})

const displayValue = computed(() => {
  return (
    expression.value +
    (currentInput.value !== '0' || expression.value === '' ? currentInput.value : '')
  )
})

const handleNumberClick = (num: string) => {
  if (hasCalculated.value) {
    currentInput.value = num
    hasCalculated.value = false
  } else if (currentInput.value === '0') {
    currentInput.value = num
  } else {
    currentInput.value += num
  }
}

const handleDecimalClick = () => {
  if (hasCalculated.value) {
    currentInput.value = '0.'
    hasCalculated.value = false
  } else if (!currentInput.value.includes('.')) {
    currentInput.value += '.'
  }
}

const handleOperatorClick = (op: string) => {
  if (currentInput.value !== '0' || expression.value) {
    expression.value += currentInput.value + ` ${op} `
    currentInput.value = '0'
    hasCalculated.value = false
  }
}

const handleEqualsClick = () => {
  if (expression.value === '') return

  const finalExpression = expression.value + currentInput.value
  try {
    // Using a Function constructor for safer evaluation than eval()
    const calculate = new Function('return ' + finalExpression.replace(/ /g, ''))
    const result = calculate()
    currentInput.value = String(result)
    expression.value = ''
    hasCalculated.value = true
  } catch {
    currentInput.value = 'Error'
    expression.value = ''
  }
}

const handleClearClick = () => {
  currentInput.value = '0'
  expression.value = ''
  hasCalculated.value = false
}
</script>

<template>
  <Card class="w-full max-w-xs mx-auto shadow-lg">
    <CardHeader>
      <CardTitle class="text-right text-3xl font-mono break-all h-12">{{ displayValue }}</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="grid grid-cols-4 gap-2">
        <Button @click="handleClearClick" variant="destructive" class="col-span-2">C</Button>
        <Button @click="handleOperatorClick('/')" variant="outline">/</Button>
        <Button @click="handleOperatorClick('*')" variant="outline">*</Button>

        <Button @click="handleNumberClick('7')">7</Button>
        <Button @click="handleNumberClick('8')">8</Button>
        <Button @click="handleNumberClick('9')">9</Button>
        <Button @click="handleOperatorClick('-')" variant="outline">-</Button>

        <Button @click="handleNumberClick('4')">4</Button>
        <Button @click="handleNumberClick('5')">5</Button>
        <Button @click="handleNumberClick('6')">6</Button>
        <Button @click="handleOperatorClick('+')" variant="outline">+</Button>

        <div class="col-span-3 grid grid-cols-3 gap-2">
          <Button @click="handleNumberClick('1')">1</Button>
          <Button @click="handleNumberClick('2')">2</Button>
          <Button @click="handleNumberClick('3')">3</Button>
          <Button @click="handleNumberClick('0')" class="col-span-2">0</Button>
          <Button @click="handleDecimalClick">.</Button>
        </div>

        <Button @click="handleEqualsClick" class="row-span-2 h-full">=</Button>
      </div>
    </CardContent>
  </Card>
</template>
