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
  <table v-if="table">
    <thead>
      <tr>
        <th style="width: 60%">Name</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item, index of table">
        <tr>
          <td>
            <Participant :participant="item" />
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</template>