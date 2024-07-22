<script setup lang="ts">
definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <TopMenu back name="Bank products" :notifications="false"/>
  <div class="showcase mx-6 sm:hidden">
    <h4 class="my-3">What are you interested in?</h4>
    <div class="flex flex-col gap-2 bg-gray-200 p-3 rounded-xl">
      <NuxtLink to="/app/products/account" class="product flex gap-2 items-center">
        <i class="pi pi-credit-card bg-primary-500 text-white p-2 rounded" style="font-size: 1.2rem"></i>
        <p>Open an account</p>
      </NuxtLink>
      <NuxtLink to="/app/products/account" class="product flex gap-2 items-center">
        <i class="pi pi-briefcase bg-primary-200 text-white p-2 rounded" style="font-size: 1.2rem"></i>
        <p>Open a business account</p>
      </NuxtLink>
    </div>
  </div>
  <div class="showcase pt-4 flex justify-center gap-5 mx-6 flex-wrap hidden sm:flex">
    <NuxtLink to="/online/open/account"
              class="relative overflow-hidden w-96 h-60 bg-gray-200 rounded-xl p-5 cursor-pointer transition-opacity duration-200 hover:opacity-80">
      <h3 class="text-lg font-semibold">Open an account</h3>
      <img src="~/assets/images/showcase/account.png" alt="" class="absolute right-0 bottom-0">
    </NuxtLink>
    <NuxtLink to="/online/open/business-account"
              class="relative overflow-hidden w-96 h-60 bg-gray-200 rounded-xl p-5 cursor-pointer transition-opacity duration-200 hover:opacity-80">
      <h3 class="text-lg font-semibold">Open a business account</h3>
      <img src="~/assets/images/showcase/business-account.png" alt="" class="absolute right-0 bottom-0">
    </NuxtLink>
  </div>
</template>

<style scoped>

</style>