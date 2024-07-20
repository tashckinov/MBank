<script setup lang="ts">
import {useUserStore} from '~/stores/useUserStore';
import Services from "~/components/MainScreen/Services.vue";

const userStore = useUserStore();

definePageMeta({
  layout: 'bank'
})

async function loadData() {
  await userStore.fetchData();
}

onMounted(() => {
  loadData();
});

</script>

<template>
  <TopMenu back name="Profile" :notifications="false" logout/>
  <div class="profile px-6 flex flex-col items-center gap-5 mt-5">
    <i class="pi pi-user bg-primary-100 p-3 rounded-xl" style="font-size: 2rem"></i>
    <div class="flex flex-col items-center">
      <h3 class="w-fit mx-auto">{{ userStore.data ? userStore.data.nickname : '' }}</h3>
<!--      <Button label="Edit" icon="pi pi-pen-to-square" class="" text/>-->
    </div>
    <Services/>
  </div>

</template>

<style scoped>

</style>