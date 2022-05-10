<script setup>
import { useSponsors, shouldShowSponsor } from './useSponsors'
const sponsors = useSponsors()
</script>

<template>
  <div
    style="
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 0.5em;
    "
  >
    <a
      v-for="sponsor of sponsors"
      :href="'#' + sponsor.id"
      v-if="shouldShowSponsor(sponsor)"
    >
      <img :src="sponsor.image" />
    </a>
  </div>
</template>

<style>
</style>