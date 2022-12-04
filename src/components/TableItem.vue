<template>
  <app-card
    :class="$style.container"
    style="height: 5rem; width: 5rem"
    hoverable
    @click="showRooMaJi = !showRooMaJi"
  >
    <div :class="$style.innerContainer">
      <div :class="$style.na">{{ hiragana }}</div>
      <div :class="$style.na">{{ katakana }}</div>
    </div>
    <div v-if="showRooMaJi" class="font-sans">{{ roomaji }}</div>
  </app-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AppCard from './AppCard.vue';

defineProps<{ hiragana: string; katakana: string; roomaji: string }>();
const showRooMaJi = ref(false);
</script>
<style module>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0.25rem;
  @apply font-serif;
}
.innerContainer {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
}
.na {
  font-size: 2rem;
}
</style>
