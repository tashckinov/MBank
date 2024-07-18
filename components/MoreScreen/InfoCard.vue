<!-- src/components/InfoCard.vue -->
<template>
  <NuxtLink :to="link">
    <div class="card shadow-card p-4 rounded-xl">
      <div class="header">
        <div class="flex justify-between items-start">
          <div>
            <h4 class="text-xl font-medium text-black">{{ title }}</h4>
          </div>
          <i class="pi bg-primary-500 p-2 rounded-full" :class="logo" style="font-size: 1.2rem;color: white"></i>
        </div>
      </div>
      <div class="header">
        <p class="pt-2">{{ description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  logo: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});
</script>

<style scoped>
</style>
