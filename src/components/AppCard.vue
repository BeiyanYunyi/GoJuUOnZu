<template>
  <div :class="{ appCard: true, appCardHoverable: hoverable }" class="tracking-wide">
    <slot />
  </div>
</template>
<script lang="ts" setup>
defineProps<{ hoverable?: boolean }>();
</script>
<style scoped>
.appCard {
  padding: 8px;
  width: fit-content;
  border-radius: 0.5rem;
  background: #161616;
  box-shadow: 0.2rem 0.2rem 1rem #090909, -0.2rem -0.2rem 1rem #2c2c2c;
}
.appCardHoverable:hover {
  box-shadow: 0.1rem 0.1rem 0.25rem #121212, -0.1rem -0.1rem 0.25rem #202020;
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.appCardHoverable:active {
  box-shadow: inset 0.2rem 0.2rem 0.5rem #090909, inset -0.2rem -0.2rem 0.5rem #202020;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
}
</style>
