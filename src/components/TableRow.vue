<template>
  <div class="table-row">
    <TableItem
      v-for="item in rowItems"
      :key="item[2] + item[0] ?? getUUID()"
      :hiragana="item[0]"
      :katakana="item[1]"
      :roomaji="item[2]"
    />
  </div>
</template>
<script setup lang="ts">
import TableItem from './TableItem.vue';

defineProps<{ rowItems: [string, string, string][] }>();
const getUUID = () => crypto.randomUUID();
</script>
<style scoped>
.table-row {
  @apply flex flex-wrap;
}
</style>
