<template>
  <div
    class="text-neutral-100 flex gap-4 justify-center"
    style="margin-top: 1rem; margin-bottom: 1rem"
  >
    <router-link to="/">
      <app-card hoverable>Home</app-card>
    </router-link>
    <router-link to="/test">
      <app-card hoverable>Test</app-card>
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';
import AppCard from './AppCard.vue';
</script>
