<template>
  <div
    :class="{
      [$style.appCard]: true,
      [$style.appCardHoverable]: hoverable,
      [$style.appCardPressed]: pressed,
    }"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
defineProps<{ hoverable?: boolean; pressed?: boolean }>();
</script>
<style module>
.appCard {
  @apply text-neutral-100 tracking-wide;
  padding: 8px;
  width: fit-content;
  border-radius: 0.5rem;
  background: #161616;
  box-shadow: 0.2rem 0.2rem 1rem #090909, -0.2rem -0.2rem 1rem #2c2c2c;
}
.appCardHoverable {
  transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
}
.appCardHoverable:hover {
  box-shadow: 0.15rem 0.15rem 1rem #090909, -0.15rem -0.15rem 1rem #2c2c2c;
}
.appCardHoverable:active {
  box-shadow: 0.1rem 0.1rem 0.25rem #121212, -0.1rem -0.1rem 0.25rem #202020;
}

.appCardPressed {
  box-shadow: 0.1rem 0.1rem 0.25rem #121212, -0.1rem -0.1rem 0.25rem #202020;
}
</style>
