<script lang="ts">
import { defineComponent } from 'vue';

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
    <template v-else-if="participant.teamMembers">
      <strong>{{ participant.handle }}: </strong>
    </template>
    <template v-else>
      {{ participant.handle }}
    </template>
    <template v-if="participant.name && participant.name !== participant.handle">
      {{ " " }}<span>({{ participant.name }})</span>
    </template>
  </template>
  <template v-if="participant.teamMembers">
    (<template v-for="member, i of participant.teamMembers"><template v-if="i > 0">, </template><template
        v-if="member.url"><a :href="member.url" target="_blank" rel="noopener">{{ member.name }}</a></template><template
        v-else>{{ member.name }}</template></template>)
  </template>
</template>
