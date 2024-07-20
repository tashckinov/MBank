<script setup lang="ts">

import Service from "~/components/MainScreen/Service.vue";

const items = ref([
  {
    name: 'Stock Exchange',
    description: 'Get additional finances for your company',
    icon: 'pi-globe',
  },
  {
    name: 'M-Donations',
    description: 'Receive donations from players',
    icon: 'pi-wallet',
  },
  {
    name: 'M-Tickets',
    description: 'Buy tickets for events',
    icon: 'pi-ticket',
  }
])
</script>

<template>
  <div class="services">
    <h3 class="mb-2">Services</h3>
    <Service class="mb-3" v-for="item in items" :item="item"/>
  </div>
</template>

<style scoped>

</style>