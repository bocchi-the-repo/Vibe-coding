<template>
  <div class="live-page">
    <h2>Live Streaming</h2>

    <section class="favorites">
      <h3>Favorite streamers</h3>
      <div class="big-player">Top Stream</div>
      <div class="small-list">
        <div class="small" v-for="s in favorites" :key="s.id">{{ s.name }}</div>
      </div>
    </section>

    <section class="recommend">
      <h3>Recommended streams</h3>
      <div class="grid">
        <div class="rec" v-for="s in recs" :key="s.id">{{ s.name }}</div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Live',
  setup() {
    const favorites = ref([{ id: 1, name: 'StreamerA' }, { id: 2, name: 'StreamerB' }])
    const recs = ref([{ id: 11, name: 'StreamX' }, { id: 12, name: 'StreamY' }, { id: 13, name: 'StreamZ' }])
    return { favorites, recs }
  }
})
</script>

<style scoped>
.live-page { padding: 1rem }
.big-player { height:320px; background:#000; color:#fff; display:flex; align-items:center; justify-content:center; border-radius:8px }
.small-list { display:flex; gap:0.5rem; margin-top:0.5rem }
.small { width:120px; height:80px; background:#eee; display:flex; align-items:center; justify-content:center; border-radius:6px }
.grid { display:flex; gap:0.75rem; margin-top:0.5rem; flex-wrap:wrap }
.rec { width:180px; height:100px; background:#fff; box-shadow:0 6px 18px rgba(0,0,0,0.06); display:flex; align-items:center; justify-content:center; border-radius:8px }
</style>
