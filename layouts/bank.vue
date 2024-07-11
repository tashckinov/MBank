<script setup lang="ts">

import TopMenu from "~/components/TopMenu.vue";
</script>

<template>
  <TopMenu />
  <div class="main-app sm:mb-20">
    <NuxtPage/>
  </div>
  <DownMenu class="fixed bottom-0 left-0 right-0 safe-bottom"/>
</template>

<style scoped>

</style>