<script setup lang="ts">
defineProps({
  item: Object
})
</script>

<template>
  <div class="service float-left">
    <i :class="item.icon" class="pi bg-light-gray p-4 rounded-xl mr-3" style="font-size: 1rem"></i>
    <section class="float-right flex flex-col justify-between">
      <b>{{ item.name }}</b>
      <p>{{ item.description }}</p>
    </section>
  </div>
</template>

<style scoped>

</style>