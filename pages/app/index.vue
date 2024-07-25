<script setup lang="ts">
import { useUserStore } from '~/stores/useUserStore';

import Accounts from "~/components/MainScreen/Accounts.vue";
import Shots from "~/components/MainScreen/Shots.vue";
import Services from "~/components/MainScreen/Services.vue";
import Transfers from "~/components/MainScreen/Transfers.vue";
import MainMenu from "~/components/MainScreen/MainMenu.vue";

definePageMeta({
  layout: 'bank'
});

const userStore = useUserStore();

async function loadData() {
  await userStore.fetchData();
}

onMounted(() => {
  loadData();
});
</script>

<template>
  <div>
    <MainMenu :nickname="userStore.data ? userStore.data.nickname : ''"/>
    <div class="app flex flex-col gap-5 overflow-hidden px-6">
      <Accounts v-if="userStore.data" :accounts="userStore.data.accounts"/>
      <Transfers/>
      <Shots/>
      <Services/>
    </div>
  </div>
</template>

<style scoped>
/* Добавьте ваши стили здесь */
.logout-button {
  /* Ваши стили для кнопки выхода */
}
</style>
