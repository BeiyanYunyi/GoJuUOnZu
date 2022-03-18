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
    <a href="https://github.com/lixiang810/GoJuUOnZu">
      <app-card hoverable>
        <v-icon size="1rem"> <git-hub-icon /> </v-icon>
      </app-card>
    </a>
  </div>
</template>
<script lang="ts" setup>
import GitHubIcon from '@vicons/fa/Github';
import { Icon as VIcon } from '@vicons/utils';
import { RouterLink } from 'vue-router';
import AppCard from './AppCard.vue';
</script>
