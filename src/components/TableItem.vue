<template>
  <app-card class="card" hoverable @click="showRooMaJi = !showRooMaJi">
    <div class="innerCard">
      <div class="lgText">{{ hiragana }}</div>
      <div class="lgText">{{ katakana }}</div>
    </div>
    <div v-if="showRooMaJi" class="sans">{{ roomaji }}</div>
  </app-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import AppCard from './AppCard.vue';

defineProps<{ hiragana: string; katakana: string; roomaji: string }>();
const showRooMaJi = ref(false);
</script>
<style scoped>
.card {
  @apply flex flex-col font-serif h-20 m-1 w-20 items-center justify-center;
}
.innerCard {
  @apply flex w-full justify-evenly;
}
.lgText {
  @apply text-[2rem];
}
.sans {
  @apply font-sans;
}
</style>
