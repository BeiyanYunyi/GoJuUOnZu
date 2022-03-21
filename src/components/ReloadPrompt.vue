<template>
  <app-card v-if="offlineReady || needRefresh" :class="$style['pwa-toast']">
    <div role="alert">
      <div :class="$style.message">
        <span v-if="offlineReady"> App ready to work offline </span>
        <span v-else> New content available, click on reload button to update. </span>
      </div>
      <button v-if="needRefresh" @click="updateServiceWorker()">
        <app-card hoverable>Reload</app-card>
      </button>
      <button @click="close"><app-card hoverable>Close</app-card></button>
    </div>
  </app-card>
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

<style module>
.pwa-toast {
  position: fixed;
  right: 0;
  bottom: 0;
  margin: 16px;
  padding: 12px;
  z-index: 1;
  text-align: left;
}
.pwa-toast .message {
  margin-bottom: 8px;
}
</style>
