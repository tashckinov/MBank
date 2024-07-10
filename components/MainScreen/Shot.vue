<script setup lang="ts">
defineProps({
  item: Object
})
</script>

<template>
  <div class="shot border border-blue rounded-xl relative overflow-hidden h-24 w-24">
    <img :src="item.preview" class="rounded-xl absolute top-0 bottom-0 left-0 right-0" alt="">
    <p class="absolute left-1 bottom-1 right-1 leading-4 text-sm text-[#ffffff]">{{ item.text }}</p>
  </div>

<!--  <div class="window absolute top-0 bottom-0 left-0 right-0">-->
<!--    <img :src="item.content[0]" alt="">-->
<!--  </div>-->

</template>

<style scoped>

</style>