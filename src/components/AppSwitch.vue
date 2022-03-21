<template>
  <label
    :class="$style.label"
    class="inline-flex flex-row items-center gap-2"
    @click="$emit('update:modelValue', !modelValue)"
  >
    {{ leftLabel }}
    <div :class="{ [$style.innerContainer1]: true, [$style.innerContainer1Active]: modelValue }">
      <div
        :class="{ [$style.innerContainer2]: true, [$style.innerContainer2Active]: modelValue }"
      />
    </div>
    {{ label }}
  </label>
</template>
<script setup lang="ts">
defineProps<{ modelValue: boolean; label?: string; leftLabel?: string }>();
defineEmits<{ (event: 'update:modelValue', value: boolean): void }>();
</script>
<style module>
.label {
  user-select: none;
  cursor: pointer;
}
.innerContainer1 {
  @apply text-neutral-100 tracking-wide;
  display: inline-flex;
  justify-content: left;
  align-items: center;
  padding: 4px;
  width: 4rem;
  height: 2rem;
  border-radius: 0.5rem;
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
