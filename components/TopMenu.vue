<script setup lang="ts">

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
})

</script>

<template>
  <div class="top-menu flex justify-between items-center px-6 py-4 bg-gray-100" :class="props.rounded?'rounded-b-xl':''">
    <img v-if="props.logo" src="/logo/header-logo-circle.svg" class="w-8" alt="logo"/>
    <i v-if="props.back" class="pi pi-arrow-left" style="font-size: 1.5rem" @click="router.back()"></i>
    <p v-if="props.name">{{ props.name }}</p>
    <NuxtLink to="/app/notifications" v-if="props.notifications">
      <OverlayBadge value="2">
        <i class="pi pi-bell text-xl"></i>
      </OverlayBadge>
    </NuxtLink>
    <span v-if="props.name"></span>
  </div>
</template>

<style scoped>

</style>