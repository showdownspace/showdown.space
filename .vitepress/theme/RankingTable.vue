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
      return page.value?.frontmatter?.ranking?.[props.tableName]
    })
    return { table }
  }
})
</script>


<template>
  <table v-if="table">
    <thead>
      <tr>
        <th>#</th>
        <th style="width: 80%">Name</th>
        <th>Score</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="item, index of table">
        <tr>
          <td style="text-align: right">{{ index + 1 }}.</td>
          <td>
            <Participant :participant="item.participant" />
          </td>
          <td style="text-align: right">{{ item.score }}</td>
        </tr>
        <!-- <tr>
          <td colspan="2" style="font-size: 0.8em">
            Nesciunt mollitia, ab deserunt recusandae deleniti sapiente eveniet earum officiis consequatur error eos voluptatem eligendi officia totam laboriosam, itaque quam quis.
          </td>
        </tr> -->
      </template>
    </tbody>
  </table>
</template>