<script setup lang="ts">

import NotificationBell from "~/components/global/NotificationBell.vue";

defineProps({
  nickname: String
})
</script>

<template>

  <div class="top-menu flex justify-between items-center px-6 bg-gray-100">
    <NuxtLink to="/app/profile" class="flex gap-2 items-center py-4">
      <img src="/logo/header-logo-circle.svg" class="w-8" alt="logo">
      <p>{{ nickname }}</p>
      <i class="pi pi-angle-right text-gray"></i>
    </NuxtLink>
    <NotificationBell/>
  </div>

</template>

<style scoped>

</style>