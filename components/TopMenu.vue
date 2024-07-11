<script setup lang="ts">

</script>

<template>

  <div class="top-menu flex justify-between items-center px-6 bg-light-gray">
    <NuxtLink to="/app/profile" class="flex gap-2 items-center py-4">
      <img src="/logo/header-logo-circle.svg" class="w-8" alt="logo">
      <p>Nickname</p>
      <i class="pi pi-angle-right text-gray"></i>
    </NuxtLink>
    <NuxtLink to="/app/notifications">
      <OverlayBadge value="2">
        <i class="pi pi-bell text-xl"></i>
      </OverlayBadge>
    </NuxtLink>

  </div>

</template>

<style scoped>

</style>