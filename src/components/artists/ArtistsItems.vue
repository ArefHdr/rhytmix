<template>
  <div class="artists__items d-flex align-items-center gap-5 overflow-auto">
    <div v-for="(artist,index) in popularArtists" :key="index" class="artist__item">
      <div class="artists__items__cover">
        <img :src="artist.cover">
      </div>
      <div class="artists__items__info ">
        <h2 class="artist__items__name">{{ artist.fullName }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import {popularArtists} from "@/js/data.js";

</script>
<style scoped>
.artist__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 115px;
  cursor: pointer;
}

.artists__items__cover {
  width: 140px; /* Set your desired width */
  height: 140px; /* Set your desired height */
  overflow: hidden;
  border-radius: 50%; /* If you want circular images */
  display: flex;
  align-items: center;
  justify-content: center;
}

.artists__items__cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.artists__items__info {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

.artist__items__name {
  white-space: nowrap;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: var(--main-font-size);
  color: var(--main-color);
}
</style>
