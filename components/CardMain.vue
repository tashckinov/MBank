<script setup lang="ts">

const props = defineProps({
  number: {
    type: String,
    required: true
  }
});

const lastFourDigits = computed(() => {
  return props.number.slice(-4);
});
</script>

<template>
  <div class="card relative">
    <img src="~/assets/images/card.svg" alt="Card" class="w-20"/>
    <p class="absolute bottom-1 left-1 text-[#ffffff]">{{ lastFourDigits }}</p>
  </div>
</template>

<style scoped>
/* Добавьте ваши стили здесь */
</style>
