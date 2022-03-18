<template>
  <div class="flex justify-center">
    <app-card class="flex flex-col items-center gap-4">
      <h3 class="text-lg">
        Type the romanji of this {{ katakana ? 'katakana' : 'hiragana' }} below:
      </h3>
      <app-card>
        <h3 class="text-3xl">{{ katakana ? target[1] : target[0] }}</h3>
      </app-card>
      <form class="flex flex-col items-center gap-2" @submit="handleSubmit">
        <input v-model="answer" style="background-color: rgba(0, 0, 0, 0.9)" />
        <div class="flex flex-row justify-center gap-4">
          <button type="submit">
            <app-card hoverable>Submit</app-card>
          </button>
          <button type="button" @click="handleRefresh">
            <app-card hoverable>Refresh</app-card>
          </button>
          <button type="button" @click="handleSwitch">
            <app-card hoverable>{{ katakana ? 'hiragana' : 'katakana' }}</app-card>
          </button>
        </div>
      </form>
    </app-card>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import AppCard from '../components/AppCard.vue';
import { flattenedGoJuUOn } from '../goJuUOn';

const random = () => flattenedGoJuUOn[Math.floor(Math.random() * flattenedGoJuUOn.length)];
const target = ref(random());
const answer = ref('');
const katakana = ref(false);
const handleSubmit = (e: Event) => {
  e.preventDefault();
  if (answer.value === target.value[2]) {
    alert('Correct!');
    target.value = random();
  } else {
    alert(`Wrong! Correct:${target.value[2]}`);
  }
};
const handleRefresh = (e: MouseEvent) => {
  e.preventDefault();
  target.value = random();
};
const handleSwitch = (e: MouseEvent) => {
  e.preventDefault();
  katakana.value = !katakana.value;
};
</script>
<style module></style>
