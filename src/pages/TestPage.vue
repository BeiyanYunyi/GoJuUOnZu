<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center gap-4">
      <test-card :data="value.map((idx) => flattenedGoJuUOn[idx])" />
      <button type="button" @click="showConfig = !showConfig">
        <app-card hoverable>
          {{ showConfig ? 'Hide' : 'Config' }}
        </app-card>
      </button>
      <app-card v-if="showConfig" :class="$style.scrollContainer">
        <form class="flex flex-col">
          <label v-for="option in options" :key="option.value" style="padding: 4px">
            <input v-model="value" type="checkbox" :value="option.value" />{{ option.label }}
          </label>
        </form>
      </app-card>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, watch } from 'vue';
import AppCard from '../components/AppCard.vue';
import TestCard from '../components/TestCard.vue';
import { flattenedGoJuUOn } from '../goJuUOn';

const options = flattenedGoJuUOn.map((item, i) => ({
  label: item.join(' '),
  value: i,
}));
const showConfig = ref(false);
const value = ref<number[]>([0, 1, 2, 3, 4]);
onBeforeMount(() => {
  const valueInStorage = localStorage.getItem('questions');
  if (valueInStorage) value.value = JSON.parse(valueInStorage);
});
watch(value, () => {
  localStorage.setItem('questions', JSON.stringify(value.value));
});
</script>
<style module>
.scrollContainer {
  height: 50vh;
  margin-bottom: 1rem;
  overflow: auto;
}
</style>
