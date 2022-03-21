<template>
  <button type="button">
    <app-card :pressed="value"><slot /></app-card>
  </button>
</template>
<script setup lang="ts">
import AppCard from './AppCard.vue';

defineProps<{ value: boolean }>();
</script>
<style></style>
