<template>
  <div class="flex justify-center">
    <div class="flex flex-col items-center gap-4">
      <TestCard :data="questionConfig.map((idx) => flattenedGoJuUOn[idx])" />
      <AppSwitch v-model="showConfig" label="Config" />
      <AppCard v-if="showConfig" :class="$style.scrollContainer">
        <form class="flex flex-col">
          <label v-for="option in options" :key="option.value" style="padding: 4px">
            <input v-model="questionConfig" type="checkbox" :value="option.value" />
            {{ option.label }}
          </label>
        </form>
      </AppCard>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import AppCard from '../components/AppCard.vue';
import AppSwitch from '../components/AppSwitch.vue';
import TestCard from '../components/TestCard.vue';
import { flattenedGoJuUOn } from '../goJuUOn';
import questionConfig from '../utils/questionConfig';

const options = flattenedGoJuUOn.map((item, i) => ({
  label: item.join(' '),
  value: i,
}));
const showConfig = ref(false);
</script>
<style module>
.scrollContainer {
  height: 50vh;
  margin-bottom: 1rem;
  overflow: auto;
}
</style>
