<script setup lang="ts">


definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <TopMenu back name="Support" :notifications="false"/>
  <div class="messages">
    <div class="message bg-gray-200 m-3 p-3 rounded-xl">
      <p>Dear valued client,</p>

      <p>We understand that you may occasionally encounter issues that require assistance. To provide you with the best
        possible support, we have set up a dedicated Discord server where our support team is ready to help you.</p>
      <br>
      <p>If you experience any problems, please join our Discord server by following button bellow. Once you are there,
        you can create a ticket to describe your issue in detail. Our support team will respond promptly to assist you
        with any concerns or questions you may have.</p>
      <br>
      <p>We are committed to ensuring that your experience with our services is as smooth and satisfactory as possible.
        Thank you for choosing us, and we look forward to assisting you.</p>
      <br>
      <p>Sincerely,<br>M-Bank</p>

      <a href="https://discord.gg/XjMv9jtbCz">
        <Button class="w-full">Discord tickets</Button>
      </a>
    </div>

  </div>
</template>

<style scoped>

</style>