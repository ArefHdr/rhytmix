<template>
  <div @click="$playerHandler(song,songs,songNumber)"
       class="sidebar__songs d-flex justify-content-between align-items-center">
    <div class="sidebar__song__number d-flex align-items-center justify-content-between gap-3">
      <div>
        {{ songNumber+ 1 }}
      </div>
      <div class="sidebar__song__info d-flex align-items-center justify-content-between gap-3">
        <div class="sidebar__song__cover">
          <img :src="song.cover">
        </div>
        <div>
          <p class="sidebar__song__name m-0">{{ song.displayName }}</p>
          <p class="sidebar__song__artist m-0">{{ song.artist }}</p>
        </div>
      </div>
    </div>
    <div class="sidebar__song__play">
      <!--      <i :id="song.id" ref="playIcon" class="play-icon bi bi-pause-fill"></i>-->
    </div>
  </div>
</template>
<script setup>
import {defineProps, inject, onMounted, ref} from "vue";

defineProps(['songs','song','songNumber']);

// const iconsList = ref(null)
// onMounted(() => {
//   iconsList.value = document.querySelectorAll('.play-icon')
// })
const $playerHandler = inject('$playerHandler');
</script>

<style scoped>

.sidebar__songs {
  color: var(--main-color);
  transition: var(--main-transition);
  cursor: pointer;
  padding: 5px;
  margin-bottom: var(--base-margin);
}

.sidebar__songs:hover {
  background: #1a2037;
}

.sidebar__songs:active {
  background: #1a2037;
}

.sidebar__song__cover {
  width: var(--covers-width);
  height: var(--covers-height);
}

.sidebar__song__name {
  color: var(--main-color);
  font-size: var(--main-font-size);
}

.sidebar__song__artist {
  font-size: var(--small-font-size);
  color: var(--second-color);
}
</style>