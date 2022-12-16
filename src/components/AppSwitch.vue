<template>
  <label class="label" @click="$emit('update:modelValue', !modelValue)">
    {{ leftLabel }}
    <div :class="{ innerContainer1: true, innerContainer1Active: modelValue }">
      <div :class="{ innerContainer2: true, innerContainer2Active: modelValue }" />
    </div>
    {{ label }}
  </label>
</template>
<script setup lang="ts">
defineProps<{ modelValue: boolean; label?: string; leftLabel?: string }>();
defineEmits<{ (event: 'update:modelValue', value: boolean): void }>();
</script>
<style scoped>
.label {
  @apply cursor-pointer flex-row font-sans gap-2 inline-flex items-center select-none;
}
.innerContainer1 {
  @apply tracking-wide text-neutral-100 inline-flex items-center p-1 w-16 h-8 rounded-lg;
  background: #161616;
  box-shadow: inset 0.2rem 0.2rem 1rem #090909, inset -0.2rem -0.2rem 1rem #2c2c2c;
}
.innerContainer1Active {
  box-shadow: 0.2rem 0.2rem 1rem #090909, -0.2rem -0.2rem 1rem #2c2c2c;
}
.innerContainer2 {
  display: inline-block;
  position: relative;
  cursor: pointer;
  padding: 8px;
  width: calc(2rem - 8px);
  height: calc(2rem - 8px);
  left: 0;
  border-radius: 0.5rem;
  background: #303030;
  box-shadow: 0.2rem 0.2rem 1rem #090909, -0.2rem -0.2rem 1rem #2c2c2c;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.innerContainer2Active {
  left: 2rem;
}
</style>
