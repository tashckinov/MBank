<script setup lang="ts">


definePageMeta({
  layout: 'bank'
})

</script>

<template>
  <TopMenu back name="News" :notifications="false"/>
  <div class="messages">
    <div class="message bg-gray-200 m-3 p-3 rounded-xl">
      <p>Dear valued client,</p>
      <br>
      <p>We are excited to announce the launch of our new banking services! As we begin this journey, there may be
        initial bugs or issues that we are actively addressing.</p>
      <br>
      <p>If you encounter any glitches or have suggestions for improvement, please don't hesitate to reach out to us on
        our Discord server. Simply follow this link to join: <a href="https://discord.gg/XjMv9jtbCz">Discord Link</a>.
        Create a ticket detailing the problem you've encountered, and our team will work swiftly to resolve it.</p>
      <br>
      <p>Your feedback is invaluable to us as we strive to provide you with the best banking experience possible. Thank
        you for your understanding and patience during this exciting launch phase.</p>
      <br>
      <p>Sincerely,<br>M-Bank</p>
    </div>

  </div>
</template>

<style scoped>

</style>