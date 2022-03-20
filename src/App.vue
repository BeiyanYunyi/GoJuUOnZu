<template>
  <h1
    class="text-3xl font-bold text-neutral-100"
    :class="$style.mainTitle"
    style="margin-top: 1rem"
  >
    五十音テスト
  </h1>
  <app-navigation />
  <router-view class="text-neutral-100" />
</template>

<script setup lang="ts">
import '@fontsource/roboto/latin-400.css';
import { RouterView } from 'vue-router';
import AppNavigation from './components/AppNavigation.vue';
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
body {
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
