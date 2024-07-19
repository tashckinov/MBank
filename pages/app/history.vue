<script setup lang="ts">

import HistoryList from "~/components/HistoryScreen/HistoryList.vue";

definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <TopMenu logo/>
  <div class="history-block px-6">
    <h3 class="py-4">History</h3>
    <HistoryList/>
  </div>
</template>

<style scoped>

</style>