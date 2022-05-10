import { useData } from 'vitepress'
import { computed } from 'vue'

export function useSponsors() {
  const data = useData()
  return computed(() => {
    const sponsors = data.page.value.frontmatter.sponsors
    return Array.from(sponsors).map((s, i) => {
      return {
        name: s.name,
        id: `sponsor${i + 1}`,
        image: 'https://placehold.co/1200x480',
      }
    })
  })
}
