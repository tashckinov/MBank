<script setup lang="ts">
import Accounts from "~/components/MainScreen/Accounts.vue";
import Transactions from "~/components/MainScreen/Transactions.vue";
import Shots from "~/components/MainScreen/Shots.vue";

definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <div class="app flex flex-col gap-5">
    <Accounts/>
    <Transactions/>
    <Shots/>
  </div>
</template>

<style scoped>

</style>