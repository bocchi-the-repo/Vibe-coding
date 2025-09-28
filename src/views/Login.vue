<template>
  <div class="login-container">
    <div class="login-box">
  <img src="@/assets/hobi-logo.svg" alt="HOBI" class="logo" />
      <h1>Welcome to HOBI</h1>

      <input v-model="username" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />

      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter()
    const username = ref('')
    const password = ref('')
    function login() {
      router.push({ name: 'Home' })
    }
    return { username, password, login }
  }
})
</script>

<style scoped>
.login-container { display:flex; align-items:center; justify-content:center; min-height:100vh; background:#fff }
.login-box { width:360px; padding:2rem; border-radius:8px; box-shadow:0 6px 18px rgba(0,0,0,0.1); text-align:center }
.logo { width:100px; height:100px; background:#ff9ac2; display:block; margin:0 auto 1rem; border-radius:12px }
input { width:100%; padding:0.6rem; margin:0.5rem 0; border:1px solid #ddd; border-radius:6px }
button { width:100%; padding:0.6rem; background:#ff5fa8; color:#fff; border:none; border-radius:6px; cursor:pointer }
</style>
