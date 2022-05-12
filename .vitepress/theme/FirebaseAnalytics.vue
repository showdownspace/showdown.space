<template></template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  import('./firebase')
    .then(() => {
      console.log('Firebase Analytics loaded')
    })
    .catch((error) => {
      console.error('Firebase Analytics not loaded', error)
    })
})
</script>