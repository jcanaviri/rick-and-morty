<template>
  <div class="search">
    <input
      type="text"
      placeholder="Search by name"
      v-model="name"
      @keyup="filter"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const name = ref('')

const filter = () => {
  store.dispatch('filterByName', name.value)
}
</script>

<style>
.search {
  width: 400px;
  margin: 3rem auto 0;
}
.search input {
  height: 53px;
  width: 400px;
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 0 1.25rem;
}
</style>
