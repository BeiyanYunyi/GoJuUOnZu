<template>
  <div :class="$style.container">
    <TableRow v-for="(row, index) in goJuUOn" :key="index" :row-items="row" />
  </div>
</template>

<script setup lang="ts">
import goJuUOn from '../goJuUOn';
import TableRow from '../components/TableRow.vue';
</script>

<style module>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>
