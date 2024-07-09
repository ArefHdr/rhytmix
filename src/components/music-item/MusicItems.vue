<template>
  <div class="music__items d-flex align-items-center gap-3 overflow-auto">
    <div v-for="(song,index) in popularMusic" :key="index" class="music__item"
         @click="playerHandler(song,popularMusic,index)">
      <div class="music__items__cover">
        <img :src="song.cover">
      </div>
      <div class="music__items__info">
        <h2 class="music__items__name">{{ song.displayName }}</h2>
        <h3 class="music__items__artist">{{ song.artist }}</h3>
      </div>
    </div>
  </div>
</template>

<script setup>
import {popularMusic} from "@/js/data.js"
import {playerHandler} from "@/js/player.js";
</script>

<style scoped>
.music__items {
  transition: scroll-left 1s ease; /* Smooth transition effect */
  scroll-behavior: smooth;
}

.music__items__info {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.music__items__name {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
}

.music__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 115px;
  cursor: pointer;
}

.music__items__cover {
  width: 110px;
  height: 110px;
}

.music__items__name {
  font-size: var(--main-font-size);
  color: var(--main-color);
}

.music__items__artist {
  font-size: var(--small-font-size);
  color: var(--second-color);
}


</style>