<script setup>
import { useSponsors } from './useSponsors'
import UnderConstruction from './UnderConstruction.vue'
const sponsors = useSponsors()
</script>

<template>
  <template v-for="sponsor of sponsors" :key="sponsor.id">
    <UnderConstruction :disabled="sponsor.live !== false">
      <h3 :id="sponsor.id">{{ sponsor.name }}</h3>
      <p>
        <a
          :href="sponsor.url"
          target="_blank"
          rel="noopener"
          :data-ct="`sponsor_link_click|sponsor_name|${sponsor.name}|link_item|Banner`"
        >
          <img :src="sponsor.image" :alt="sponsor.name" />
        </a>
      </p>
      <p v-if="sponsor.links">
        <template v-for="(link, i) of sponsor.links">
          {{ i > 0 ? ' ・ ' : '' }}
          <a
            style="font-weight: 500"
            :href="link.url"
            :data-ct="`sponsor_link_click|sponsor_name|${sponsor.name}|link_item|Text link - ${link.name}`"
            target="_blank"
            rel="noopener"
            >{{ link.name }}</a
          >
        </template>
      </p>
      <p v-html="sponsor.message"></p>
      <p v-if="sponsor.contributed" v-html="'Contributed ' + sponsor.contributed"></p>
      <!-- <ul v-if="sponsor.links">
        <li v-for="link of sponsor.links">
          <a :href="link.url" target="_blank" rel="noopener">{{ link.name }}</a>
        </li>
      </ul> -->
    </UnderConstruction>
  </template>
</template>

<style>
</style>