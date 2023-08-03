# Event list

<table>
  <thead>
    <tr><th>Name</th></tr>
  </thead>
  <tbody>
    <tr v-for="event in events">
      <td>
        <a :href="event.link">{{ event.text }}</a>
      </td>
    </tr>
  </tbody>
</table>

<script>
import { useData } from 'vitepress'
import { computed } from 'vue'

export default {
  setup() {
    const { site } = useData()
    const events = computed(() => {
      return site.value.themeConfig.sidebar.find(s => s.link === '/events/').items
    })
    return {
      events
    }
  }
}
</script>
