<template>
  <AppCard v-if="offlineReady || needRefresh" class="card">
    <div role="alert">
      <div class="innerCard">
        <span v-if="offlineReady"> App ready to work offline </span>
        <span v-else> New content available, click on reload button to update. </span>
      </div>
      <button v-if="needRefresh" @click="updateServiceWorker()">
        <AppCard hoverable>Reload</AppCard>
      </button>
      <button @click="close"><AppCard hoverable>Close</AppCard></button>
    </div>
  </AppCard>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/no-unresolved
import { useRegisterSW } from 'virtual:pwa-register/vue';
import { watch } from 'vue';
import AppCard from './AppCard.vue';

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
};

watch([offlineReady], () => {
  if (offlineReady.value) {
    setTimeout(() => {
      close();
    }, 3000);
  }
});
</script>
<style scoped>
.card {
  @apply fixed right-0 bottom-0 m-4 p-3 z-1 text-left;
}
.innerCard {
  @apply mb-8;
}
</style>
