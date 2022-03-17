<template>
  <div :class="$style.container" @click="showRooMaJi = !showRooMaJi">
    <div :class="$style.innerContainer">
      <div :class="$style.na">{{ hiragana }}</div>
      <div :class="$style.na">{{ katakana }}</div>
    </div>
    <div v-if="showRooMaJi">{{ roomaji }}</div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

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
  height: 5rem;
  width: 5rem;
  border-radius: 0.5rem;
  background: #161616;
  color: aliceblue;
  box-shadow: 0.2rem 0.2rem 1rem #000000, -0.2rem -0.2rem 1rem #2c2c2c;
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
