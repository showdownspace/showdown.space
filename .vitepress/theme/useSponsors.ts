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
        url: s.url,
        id: `sponsor${i + 1}`,
        image: s.image || 'https://placehold.co/1200x480',
        links: s.links,
        message: s.message,
      }
    })
  })
}

export function shouldShowSponsor(s) {
  if (!isQueryFlagEnabled('dev') && s.live === false) {
    return false
  }
  return true
}
