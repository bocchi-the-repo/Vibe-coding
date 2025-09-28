<template>
  <div class="home">
    <h1>Welcome to vue_app_v0.2</h1>
    <img src="/logo.png" alt="logo" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home'
})
</script>

<style scoped>
.home { padding: 2rem }
</style>
