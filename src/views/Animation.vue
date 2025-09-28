<template>
  <div class="animation-page">
    <h2>Animation</h2>

    <section class="following">
      <h3>Currently following</h3>
      <div class="card-row">
        <div class="card" v-for="item in following" :key="item.id">
          <div class="thumb">Img</div>
          <div class="meta">
            <div class="title">{{ item.title }}</div>
            <div class="sub">{{ item.year }} • {{ item.genre }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="recommend">
      <h3>Recommended</h3>
      <div class="filters">
        <label>
          Year
          <select v-model="filterYear">
            <option value="all">All</option>
            <option v-for="y in years" :key="y">{{ y }}</option>
          </select>
        </label>
        <label>
          Genre
          <select v-model="filterGenre">
            <option value="all">All</option>
            <option v-for="g in genres" :key="g">{{ g }}</option>
          </select>
        </label>
      </div>

      <div class="card-grid">
        <div class="card" v-for="item in filteredRecs" :key="item.id">
          <div class="thumb">Img</div>
          <div class="meta">
            <div class="title">{{ item.title }}</div>
            <div class="sub">{{ item.year }} • {{ item.genre }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

type Item = { id: number; title: string; year: number; genre: string }

export default defineComponent({
  name: 'Animation',
  setup() {
    const following = ref<Item[]>([
      { id: 1, title: 'Skybound Saga', year: 2024, genre: 'Action' }
    ])

    const recs = ref<Item[]>([
      { id: 11, title: 'Magic Falls', year: 2023, genre: 'Fantasy' },
      { id: 12, title: 'Future City', year: 2024, genre: 'Sci-Fi' },
      { id: 13, title: 'Quiet Town', year: 2022, genre: 'Drama' }
    ])

    const years = computed(() => Array.from(new Set(recs.value.map(r => r.year))).sort((a,b)=>b-a))
    const genres = computed(() => Array.from(new Set(recs.value.map(r => r.genre))))

    const filterYear = ref<string | number>('all')
    const filterGenre = ref<string>('all')

    const filteredRecs = computed(() => {
      return recs.value.filter(r => {
        const yearOk = filterYear.value === 'all' || r.year === +filterYear.value
        const genreOk = filterGenre.value === 'all' || r.genre === filterGenre.value
        return yearOk && genreOk
      })
    })

    return { following, recs, years, genres, filterYear, filterGenre, filteredRecs }
  }
})
</script>

<style scoped>
.animation-page { padding: 1rem }
.following .card-row, .recommend .card-grid { display:flex; gap:1rem; margin-top:0.5rem }
.card { width:200px; border-radius:8px; overflow:hidden; background:#fff; box-shadow:0 4px 12px rgba(0,0,0,0.05); padding:0.5rem; display:flex }
.thumb { width:70px; height:70px; background:#eee; display:flex; align-items:center; justify-content:center; border-radius:6px }
.meta { padding-left:0.6rem }
.title { font-weight:700 }
.sub { color:#666; font-size:0.85rem }
.filters { display:flex; gap:1rem; margin-bottom:0.75rem }
select { padding:0.3rem }
</style>
