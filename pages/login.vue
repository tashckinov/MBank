<script setup lang="ts">

// const {setUser} = useUser();
const router = useRouter();
const runtimeConfig = useRuntimeConfig()
const token = useCookie('token')

const nickname = ref('');
const password = ref('');
const register = ref(false)

function login() {
  const data = {
    nickname: nickname.value,
    password: password.value
  }

  fetch(`${runtimeConfig.public.apiBase}/auth`, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.json();
  }).then((data) => {
    if (data['token']) {
      token.value = data['token']
      // console.log(data)
      router.push({path: "/app"})
      // window.location.href = '/app';
    }
    // if (data.error) {
    //   error.value.status = true
    //   error.value.text = data.error
    // }
  }).catch((err) => {
    console.error("Fetch error: ", err);
  })
};
</script>

<template>
  <Dialog v-model:visible="register" maximizable modal header="Create account"
          :breakpoints="{ '1199px': '75vw', '575px': '90vw' }" class="absolute">
    <p>Enter your nickname. In-game nickname will be better.
    </p>

    <form class="flex flex-col gap-2 my-4">
      <label for="username">Username</label>
      <InputText id="username" v-model="nickname" aria-placeholder="Fix"/>
      <label for="username">Password</label>
      <Password v-model="password" inputStyle="width: 100%;" toggleMask>
        <template #header>
          <div class="font-semibold text-xm mb-4">Pick a password</div>
        </template>
        <template #footer>
          <Divider/>
          <ul class="pl-2 ml-2 my-0 leading-normal">
            <li>At least one lowercase</li>
            <li>At least one uppercase</li>
            <li>At least one numeric</li>
            <li>Minimum 8 characters</li>
          </ul>
        </template>
      </Password>
      <Button label="Continue" class="mt-4"/>
    </form>

    <p>By entering and clicking Continue, you agree to the
      <NuxtLink to="/terms">Terms</NuxtLink>
      .
    </p>
  </Dialog>

  <div class="login py-12 max-w-80 mx-auto">
    <h1 class="mb-8">Log in</h1>
    <p>Enter your nickname. New to M-Bank? <span class="text-primary-500 font-medium" @click="register = !register">Create account</span>
    </p>

    <div class="flex flex-col gap-2 my-4">
      <label for="username">Username</label>
      <InputText id="username" v-model="nickname" placeholder="Fix"/>
      <label for="password">Password</label>
      <Password v-model="password" :feedback="false" toggleMask inputStyle="width: 100%;"/>
      <Button label="Continue" class="mt-4" @click="login"/>
    </div>

    <p>By entering and clicking Continue, you agree to the
      <NuxtLink to="/terms">Terms</NuxtLink>
    </p>
  </div>
</template>

<style scoped>

</style>