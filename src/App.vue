<template>
  <n-config-provider :theme="darkTheme">
    <h1 class="text-3xl font-bold text-neutral-100" :class="$style.mainTitle">五十音テスト</h1>
    <app-navigation />
    <router-view class="text-neutral-100" />
  </n-config-provider>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import { NConfigProvider, darkTheme } from 'naive-ui';
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
