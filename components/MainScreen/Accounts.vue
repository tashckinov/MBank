<script setup lang="ts">
import Currency from "~/components/global/currency.vue";

defineProps({
  accounts: Object
})
</script>

<template>
  <div class="list-block flex flex-col gap-5 bg-gray-100 px-6 py-4 rounded-b-xl">
    <div class="account flex gap-4" v-for="item in accounts">
      <CardMain :number="item.account_number"/>
      <section class="flex flex-col justify-between">
        <p>
          <span class="font-semibold">{{item.balance}}</span>
          <currency/>
        </p>
        <p>{{item.name}}</p>
      </section>
    </div>
    <Button label="Open new product" />
  </div>
</template>

<style scoped>

</style>