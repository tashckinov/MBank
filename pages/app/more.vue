<script setup lang="ts">

import InfoCard from "../../components/MoreScreen/InfoCard.vue";

definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <div class="history-block px-6">
    <h3 class="py-4">More</h3>
    <div class="flex flex-col gap-3">
      <InfoCard
          title="Bank offices"
          description="You can top up your bank account at the office"
          logo="pi-map-marker"
          link="/app/"
      />
      <InfoCard
          title="Terms"
          description="Read the terms of use of our bank"
          logo="pi-book"
          link="/app/"
      />
    </div>
  </div>
</template>

<style scoped>

</style>