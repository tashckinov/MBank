<script setup lang="ts">

const nickname = ref('')
const register = ref(false)
</script>

<template>
  <Dialog v-model:visible="register" maximizable modal header="Create account"
          :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" class="absolute">
    <p>Enter your nickname. In-game nickname will be better.
    </p>

    <div class="flex flex-col gap-2 my-4">
      <label for="username">Username</label>
      <InputText id="username" v-model="nickname" aria-placeholder="Fix"/>
      <Button label="Continue" class="mt-4"/>
    </div>

    <p>By entering and clicking Continue, you agree to the
      <NuxtLink to="/terms">Terms</NuxtLink>
      .
    </p>
  </Dialog>

  <div class="login py-12 max-w-80 mx-auto">
    <h1 class="mb-8">Log in</h1>
    <p>Enter your nickname. New to M-Bank? <span class="text-blue font-medium" @click="register = !register">Create account</span>
    </p>

    <div class="flex flex-col gap-2 my-4">
      <label for="username">Username</label>
      <InputText id="username" v-model="nickname" placeholder="Fix"/>
      <Button label="Continue" class="mt-4"/>
    </div>

    <p>By entering and clicking Continue, you agree to the
      <NuxtLink to="/terms">Terms</NuxtLink>
      .
    </p>
  </div>
</template>

<style scoped>

</style>