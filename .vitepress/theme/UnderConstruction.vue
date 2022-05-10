<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

let flagSet: Set<string> | undefined

export function isQueryFlagEnabled(flagName: string) {
  if (!flagSet) {
    flagSet = new Set(
      (new URLSearchParams(window.location.search).get('flags') || '')
        .split(',')
        .filter(Boolean),
    )
  }
  return flagSet.has(flagName)
}

export default defineComponent({
  setup() {
    const show = ref(false)
    onMounted(() => {
      show.value = isQueryFlagEnabled('dev')
    })
    return { show }
  },
})
</script>


<template>
  <slot v-if="show" />
</template>