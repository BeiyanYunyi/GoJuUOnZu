<template>
  <div class="homePage">
    <TableRow v-for="(row, index) in goJuUOn" :key="index" :row-items="row" />
  </div>
</template>

<script setup lang="ts">
import goJuUOn from '../goJuUOn';
import TableRow from '../components/TableRow.vue';
</script>
<style scoped>
.homePage {
  @apply flex flex-col w-full items-center;
}
</style>
