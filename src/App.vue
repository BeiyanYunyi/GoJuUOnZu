<template>
  <div :class="$style.container">
    <table-row v-for="(row, index) in goJuUOn" :key="index" :row-items="row" />
  </div>
</template>

<script setup lang="ts">
import goJuUOn from './goJuUOn';
import TableRow from './components/TableRow.vue';
</script>

<style>
#app {
  margin: -8px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  background-color: #161616;
}
</style>

<style module>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
}
</style>
