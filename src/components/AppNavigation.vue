<template>
  <div
    class="text-neutral-100 flex gap-4 justify-center"
    style="margin-top: 1rem; margin-bottom: 1rem"
  >
    <RouterLink to="/">
      <AppCard hoverable class="font-sans">Home</AppCard>
    </RouterLink>
    <RouterLink to="/test">
      <AppCard hoverable class="font-sans">Test</AppCard>
    </RouterLink>
    <a href="https://github.com/lixiang810/GoJuUOnZu">
      <AppCard hoverable>
        <VIcon size="1rem"> <GitHubIcon /> </VIcon>
      </AppCard>
    </a>
  </div>
</template>
<script lang="ts" setup>
import GitHubIcon from '@vicons/fa/Github';
import { Icon as VIcon } from '@vicons/utils';
import { RouterLink } from 'vue-router';
import AppCard from './AppCard.vue';
</script>
