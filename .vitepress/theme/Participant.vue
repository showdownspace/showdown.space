<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  props: ['participant'],
})
</script>


<template>
  <template v-if="participant === 'anonymous'">
    <span style="opacity:0.64">(anonymous)</span>
  </template>
  <template v-else>
    <template v-if="participant.handleUrl">
      <strong><a :href="participant.handleUrl" target="_blank" rel="noopener">{{ participant.handle }}</a></strong>
    </template>
    <template v-else>
      {{ participant.handle }}
    </template>
    <template v-if="participant.name && participant.name !== participant.handle">
      {{" "}}<span>({{ participant.name }})</span>
    </template>
  </template>
</template>