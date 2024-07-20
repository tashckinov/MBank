<script setup lang="ts">
import { useUserStore } from '~/stores/useUserStore';

const userStore = useUserStore();
const router = useRouter()


const props = defineProps({
  back: {
    type: Boolean,
    default: false,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  notifications: {
    type: Boolean,
    default: true,
    required: false
  },
  rounded: {
    type: Boolean,
    default: true,
    required: false
  },
  logo: {
    type: Boolean,
    default: false,
    required: false
  },
  logout: {
    type: Boolean,
    default: false,
    required: false
  },
})
async function handleLogout() {
  await userStore.logout();
}
</script>

<template>
  <div class="top-menu flex justify-between items-center px-6 py-4 bg-gray-100" :class="rounded?'rounded-b-xl':''">
    <img v-if="logo" src="/logo/header-logo-circle.svg" class="w-8" alt="logo"/>
    <i v-if="back" class="pi pi-arrow-left" style="font-size: 1.5rem" @click="router.back()"></i>
    <p v-if="name">{{ name }}</p>
    <NuxtLink to="/app/notifications" v-if="notifications">
      <OverlayBadge value="2">
        <i class="pi pi-bell text-xl"></i>
      </OverlayBadge>
    </NuxtLink>
    <i v-if="logout" class="pi pi-sign-out" style="font-size: 1rem" @click="handleLogout"></i>
    <span v-else-if="name"></span>
  </div>
</template>

<style scoped>

</style>