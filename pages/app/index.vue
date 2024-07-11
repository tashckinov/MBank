<script setup lang="ts">
import Accounts from "~/components/MainScreen/Accounts.vue";
import Shots from "~/components/MainScreen/Shots.vue";
import Services from "~/components/MainScreen/Services.vue";
import Transfers from "~/components/MainScreen/Transfers.vue";

definePageMeta({
  layout: 'bank'
})

</script>
<template>
  <div class="app flex flex-col gap-5 overflow-hidden mb-20">
    <Accounts/>
    <Transfers/>
    <Shots/>
    <Services/>
  </div>
</template>

<style scoped>

</style>