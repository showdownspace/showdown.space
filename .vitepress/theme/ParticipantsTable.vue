<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useData } from 'vitepress'
import Participant from './Participant.vue'

export default defineComponent({
  props: ['tableName'],
  components: { Participant },
  setup(props) {
    const { page } = useData()
    const table = computed(() => {
      return page.value?.frontmatter?.participants
    })
    return { table }
  }
})
</script>


<template>
  <ul v-if="table">
    <template v-for="item, index of table">
      <li>
        <Participant :participant="item" />
      </li>
    </template>
  </ul>
</template>