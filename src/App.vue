<template>
  <h1
    class="text-3xl font-bold text-neutral-100 font-serif"
    :class="$style.mainTitle"
    style="margin-top: 1rem"
  >
    五十音テスト
  </h1>
  <AppNavigation />
  <RouterView v-slot="{ Component, route }">
    <KeepAlive :max="6">
      <Component :is="Component" :key="route.meta.usePathKey ? route.path : undefined" />
    </KeepAlive>
  </RouterView>
  <ReloadPrompt />
</template>

<script setup lang="ts">
import '@fontsource/roboto/latin-400.css';
import { RouterView } from 'vue-router';
import AppNavigation from './components/AppNavigation.vue';
import ReloadPrompt from './components/ReloadPrompt.vue';
</script>

<style>
body {
  @apply text-neutral-100 font-serif;
  margin: 0;
  background-color: #161616;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
<style module>
.mainTitle {
  text-align: center;
}
</style>
