<script setup lang="ts">
defineProps({
  item: Object
})
</script>

<template>
  <div class="service flex gap-2">
    <i :class="item.icon" class="pi bg-gray-300 p-4 rounded-xl mr-3 h-fit" style="font-size: 1rem"></i>
    <section class="flex flex-col justify-between">
      <b>{{ item.name }}</b>
      <p>{{ item.description }}</p>
    </section>
  </div>
</template>

<style scoped>

</style>