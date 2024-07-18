<script setup lang="ts">

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  color: {
    default: 'bg-primary-500',
    type: String,
    required: false
  }
});
</script>

<template>
  <NuxtLink :to="'/app/chats/' + title" class="flex gap-3 items-center max-h-12 overflow-hidden text-black">
    <i class="pi p-3 rounded-full" :class="[logo, color]" style="font-size: 1.2rem;color: white"></i>
    <div>
      <p class="font-medium">{{title}}</p>
      <p class="w-full font-light">{{message}}</p>
    </div>
  </NuxtLink>
</template>

<style scoped>

</style>