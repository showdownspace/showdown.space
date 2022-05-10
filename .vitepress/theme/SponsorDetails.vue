<script setup>
import { useSponsors } from './useSponsors'
const sponsors = useSponsors()
</script>

<template>
  <template v-for="sponsor of sponsors">
    <h3 :id="sponsor.id">{{ sponsor.name }}</h3>
    <p>
      <a :href="sponsor.url" target="_blank" rel="noopener">
        <img :src="sponsor.image" :alt="sponsor.name" />
      </a>
    </p>
    <p>{{ sponsor.message }}</p>
    <ul v-if="sponsor.links">
      <li v-for="link of sponsor.links">
        <a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
      </li>
    </ul>
  </template>
</template>

<style>
</style>