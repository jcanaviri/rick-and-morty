<script setup>
import { defineProps } from 'vue'

defineProps({
  character: Object,
})
</script>

<template>
  <div class="character">
    <img :src="character.image" :alt="character.name" />
    <div class="character__info">
      <h3>{{ character.name }}</h3>
      <div class="status">
        <span
          :class="
            character.status == 'Alive'
              ? 'alive'
              : character.status == 'Dead'
              ? 'dead'
              : 'default'
          "
        ></span>
        <span>{{ character.status }} - {{ character.species }}</span>
      </div>
      <div class="origin">
        <span> Origin: {{ character.origin.name }} </span>
      </div>
      <div class="location">
        <span> Location: {{ character.location.name }} </span>
      </div>
    </div>
  </div>
</template>

<style>
.character {
  background-color: var(--bg-card);
  border-radius: 5px;
  box-shadow: 0 0 10px 1px var(--bg-body);
  overflow: hidden;
  cursor: pointer;
  transition: all 400ms ease;
  height: 100%;
}
.character:hover {
  transform: scale(1.03);
  color: var(--text-orange);
}
span {
  color: var(--text-gray);
}

h3 {
  margin-bottom: 1.5rem;
}

.character__info {
  padding: 1.5rem;
}
.character__info .status {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}
.character__info .status span {
  color: var(--text-gray);
}
.character__info .status span:first-child {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-right: 0.5rem;
}
.character__info .status .alive {
  background-color: green;
}
.character__info .status .dead {
  background-color: red;
}
.character__info .status .default {
  background-color: white;
}
</style>
