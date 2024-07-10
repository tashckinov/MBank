<script setup lang="ts">

import TopMenu from "~/components/TopMenu.vue";
</script>

<template>
  <TopMenu />
  <div class="main-app mb-16">
    <NuxtPage/>
  </div>
  <DownMenu class="fixed bottom-0 left-0 right-0 safe-bottom"/>
</template>

<style scoped>
@supports (padding: max(0px)) {
  .safe-bottom {
    padding-bottom: env(safe-area-inset-bottom);
  }
}
</style>