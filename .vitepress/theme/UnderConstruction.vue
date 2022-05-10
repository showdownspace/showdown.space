<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { isQueryFlagEnabled } from './QueryFlags'

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