import { useData } from 'vitepress'
import { computed } from 'vue'
import { isQueryFlagEnabled } from './QueryFlags'

export function useSponsors() {
  const data = useData()
  return computed(() => {
    const sponsors = data.page.value.frontmatter.sponsors
    return Array.from(sponsors).map((s, i) => {
      return {
        name: s.name,
        live: s.live,
        url: s.url,
        id: `sponsor${i + 1}`,
        image: s.image || 'https://placehold.co/1200x480',
        links: s.links,
        message: s.message,
        contributed: s.contributed,
      }
    })
  })
}
