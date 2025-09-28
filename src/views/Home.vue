<template>
  <div class="home-layout">
    <aside class="sidebar">
      <div class="user">
        <div class="avatar">A</div>
        <div class="name">Alice</div>
      </div>

      <nav class="nav">
        <button :class="{active: current === 'Animation'}" @click="go('Animation')">Animation</button>
        <button :class="{active: current === 'Live'}" @click="go('Live')">Live Streaming</button>
        <button :class="{active: current === 'Movies'}" @click="go('Movies')">Movies</button>
      </nav>

      <button class="logout" @click="logout">Logout</button>
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()
    const current = ref('Animation')

    function go(name: string) {
      current.value = name
      router.push({ name })
    }

    function logout() {
      router.push({ name: 'Login' })
    }

    // navigate to default child on mount
    router.replace({ name: 'Animation' })

    return { current, go, logout }
  }
})
</script>

<style scoped>
.home-layout { display:flex; min-height:100vh; font-family: Arial, sans-serif }
.sidebar { width:220px; background:#fff; padding:1rem; box-shadow:2px 0 6px rgba(0,0,0,0.05); display:flex; flex-direction:column; justify-content:space-between }
.user { display:flex; align-items:center; gap:0.75rem }
.avatar { width:48px; height:48px; border-radius:50%; background:#ff9ac2; display:flex; align-items:center; justify-content:center; color:#fff; font-weight:700 }
.name { font-weight:700; color:#000 }
.nav { margin-top:1.5rem; display:flex; flex-direction:column; gap:0.5rem }
.nav button { background:transparent; border:none; text-align:left; padding:0.6rem; font-weight:700; color:#000; cursor:pointer }
.nav button.active { background:#f3f3f3 }
.logout { background:transparent; border:none; color:#000; font-weight:700; padding:0.6rem; cursor:pointer }
.content { flex:1; padding:1.5rem; background:#f9fafb }
</style>
