<script setup lang="ts">
import {useNotificationStore} from '~/stores/useNotificationsStore';

const notificationStore = useNotificationStore();

onMounted(() => {
  notificationStore.fetchCountData();
});

</script>

<template>
  <NuxtLink to="/app/notifications">
    <OverlayBadge :value="notificationStore.unreadCount" v-if="notificationStore.unreadCount>0">
      <i class="pi pi-bell text-xl"></i>
    </OverlayBadge>
    <i v-else class="pi pi-bell text-xl"></i>
  </NuxtLink>
</template>

<style scoped>

</style>