<script setup lang="ts">

import Chat from "../../components/SupportScreen/Chat.vue";

definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <TopMenu logo/>
  <div class="support-block px-6">
    <h3 class="py-4">Support</h3>
    <div class="chats">
      <Chat class="mb-3" title="News" message="Check it out" logo="pi-sparkles" color="bg-gradient-to-r from-sky-500 to-indigo-500"/>
      <Chat class="mb-3" title="Support" message="Check it out" logo="pi-question-circle" color="bg-gradient-to-r from-purple-500 to-pink-500"/>
    </div>
  </div>
</template>

<style scoped>

</style>