<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center gap-4">
      <test-card :data="value.map((idx) => flattenedGoJuUOn[idx])" />
      <n-switch v-model:value="showConfig">
        <template #checked>Close</template>
        <template #unchecked>Config</template>
      </n-switch>
      <n-collapse-transition :show="showConfig">
        <n-transfer v-model:value="value" :options="options" />
      </n-collapse-transition>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { NTransfer, TransferOption, NSwitch, NCollapseTransition } from 'naive-ui';
import { onBeforeMount, ref, watch } from 'vue';
import TestCard from '../components/TestCard.vue';
import { flattenedGoJuUOn } from '../goJuUOn';

const options: TransferOption[] = flattenedGoJuUOn.map((item, i) => ({
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
<style scoped></style>
