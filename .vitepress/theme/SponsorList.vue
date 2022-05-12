<script setup>
import { useSponsors } from './useSponsors'
import UnderConstruction from './UnderConstruction.vue'
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
    <template v-for="sponsor of sponsors" key="sponsor.id">
      <UnderConstruction :disabled="sponsor.live !== false">
        <a
          :href="'#' + sponsor.id"
          :data-ct="`sponsor_view_details|sponsor_name|${sponsor.name}`"
        >
          <img :src="sponsor.image" />
        </a>
      </UnderConstruction>
    </template>
  </div>
</template>

<style>
</style>