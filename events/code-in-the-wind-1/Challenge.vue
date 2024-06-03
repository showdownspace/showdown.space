<script>
export default {
  props: {
    url: String,
    rankingUrl: String,
    submissionsUrl: String,
    referenceUrl: String,
    videoUrl: String,
  }
}
</script>

<template>
  <div class="challenge">
    <a class="challenge-reference" :href="url">
      <img :src="url + 'reference.png'" />
    </a>
    <div class="challenge-info">
      <slot />
      <p>
        <a :href="url">&rarr; See objectives</a>
        <template v-if="rankingUrl">
          <br>
          <a :href="rankingUrl">&rarr; See ranking</a>
        </template>
        <template v-if="referenceUrl">
          <br>
          <a :href="referenceUrl">&rarr; See source code</a>
        </template>
        <template v-if="submissionsUrl">
          <br>
          <a :href="submissionsUrl">&rarr; See all submissions</a>
        </template>
        <template v-if="videoUrl">
          <br>
          <a :href="videoUrl">&rarr; See video</a>
        </template>
      </p>
    </div>
  </div>
</template>

<style scoped>
.challenge {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  gap: 1rem;
}

.challenge-reference {
  width: 270px;
  flex: 1 0 270px;
}

.challenge-info {
  flex: 999999 0 270px;
}
</style>
