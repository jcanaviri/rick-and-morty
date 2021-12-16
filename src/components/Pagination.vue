<template>
  <div class="pagination">
    <div v-if="prev">
      <span :href="prev" @click="$emit('prevPage', prev)">&laquo; Prev</span>
    </div>
    <div v-if="next">
      <span :href="next" @click="$emit('nextPage', next)">Next &raquo;</span>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  next: String,
  prev: String,
})

defineEmits(['nextPage', 'prevPage'])
</script>

<style>
.pagination {
  width: 200px;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: .15rem;
  overflow: hidden;
}
.pagination div {
  border-radius: 10px;
  padding: 1rem .5rem;
  background-color: var(--bg-card);
  text-align: center;
  cursor: pointer;
}
.pagination div:hover span {
  color: var(--text-orange);
}
.pagination div span {
  text-decoration: none;
  color: var(--text-white);
}

</style>