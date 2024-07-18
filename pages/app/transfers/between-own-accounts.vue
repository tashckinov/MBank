<script setup lang="ts">


import AccountSelect from "~/components/TransferScreen/AccountSelect.vue";

definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <TopMenu back name="Transfer between your own accounts" :notifications="false"/>

  <AccountSelect/>
  <AccountSelect/>
</template>

<style scoped>

</style>