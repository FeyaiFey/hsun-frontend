<script setup lang="ts">
import { RouterView } from 'vue-router'

</script>

<template>
  <RouterView />
</template>

<style lang="less" scoped>

.size {
  width: 100%;
  height: 100%;
}
  
html,
body {
  padding: 0 !important;
  margin: 0;
  overflow: hidden;
  .size;

  #app {
    .size;
  }
}
</style>
