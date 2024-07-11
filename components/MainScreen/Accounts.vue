<script setup lang="ts">

import Currency from "~/components/global/currency.vue";
</script>

<template>
  <div class="list-block flex flex-col gap-5 bg-light-gray px-6 py-4 rounded-b-xl">
    <div class="account flex gap-4" v-for="item in [1,2,3]">
      <CardMain number="1234"/>
      <section class="flex flex-col justify-between">
        <p>
          <span class="font-semibold">0</span>
          <currency/>
        </p>
        <p>Main account</p>
      </section>
    </div>
    <Button label="Open new product" />
  </div>
</template>

<style scoped>

</style>