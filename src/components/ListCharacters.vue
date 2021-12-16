<script setup>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'

import CardCharacter from './CardCharacter.vue'
import Pagination from './Pagination.vue'

const store = useStore()
const characters = computed(() => {
  return store.state.charactersFilter
})
const info = computed(() => {
  return store.state.charactersInfo
})

onMounted(() => {
  store.dispatch('getCharacters')
})

const nextPage = (url) => {
  store.dispatch('getCharacters', url)
}
const prevPage = (url) => {
  store.dispatch('getCharacters', url)
}
</script>

<template>
  <div>
    <Pagination :next="info.next" :prev="info.prev" @next-page="nextPage" @prev-page="prevPage"/>
    <section class="characters">
      <div
        class="character__item"
        v-for="character in characters"
        :key="character.id"
      >
        <CardCharacter :character="character" />
      </div>
    </section>
    <Pagination :next="info.next" :prev="info.prev" @next-page="nextPage" @prev-page="prevPage"/>
  </div>
</template>

<style>
.characters {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 3rem;
  margin: 3rem 0;
}
</style>
