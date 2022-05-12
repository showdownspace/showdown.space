<template></template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  import('./firebase')
    .then(({ logEvent, analytics }) => {
      console.log('Firebase Analytics loaded')
      window.addEventListener('click', (e) => {
        const ct = e.target?.closest?.('[data-ct]')
        if (ct) {
          const stuff = ct.getAttribute('data-ct').split('|')
          const eventName = stuff.shift()
          const eventParams = {}
          while (stuff.length) {
            const key = stuff.shift()
            const value = stuff.shift()
            eventParams[key] = value
          }
          console.log('Logging event', eventName, eventParams)
          logEvent(analytics, eventName, eventParams)
        }
      })
    })
    .catch((error) => {
      console.error('Firebase Analytics not loaded', error)
    })
})
</script>