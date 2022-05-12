<script setup>
import DefaultTheme from 'vitepress/theme'
import FirebaseAnalytics from './FirebaseAnalytics.vue'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout></Layout>
  <FirebaseAnalytics />
</template>
