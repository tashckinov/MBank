<script setup lang="ts">
defineProps({
  number: String
})
</script>

<template>
  <div class="card relative">
    <img src="~/assets/images/card.svg" alt="Card" class="w-20"/>
    <p class="absolute bottom-1 left-1 text-[#ffffff]">{{number}}</p>
  </div>
</template>

<style scoped>

</style>