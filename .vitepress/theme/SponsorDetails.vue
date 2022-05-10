<script setup>
import { useSponsors } from './useSponsors'
const sponsors = useSponsors()
</script>

<template>
  <template v-for="sponsor of sponsors">
    <h3 :id="sponsor.id">{{ sponsor.name }}</h3>
    <p>
      <img :src="sponsor.image" />
    </p>
  </template>
</template>

<style>
</style>