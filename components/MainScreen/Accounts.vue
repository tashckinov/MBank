<script setup lang="ts">
import Currency from "~/components/global/currency.vue";

const router = useRouter();
defineProps({
  accounts: Object
})
</script>

<template>
  <div class="list-block flex flex-col gap-5 bg-gray-100 px-6 py-4 rounded-b-xl -mx-6">
    <NuxtLink :to="'/app/accounts/' + item.account_id" class="account flex gap-4 text-black" v-for="item in accounts">
      <CardMain :number="item.account_number"/>
      <section class="flex flex-col justify-between">
        <p>
          <span class="font-semibold">{{ item.balance }}</span>
          <currency/>
        </p>
        <p>{{ item.name }}</p>
      </section>
    </NuxtLink>
    <Button @click="router.push('/app/products')" label="Open new product"/>
  </div>
</template>

<style scoped>

</style>