<template>
  <div class="home">
    <div class="row">
      <div class="col-4">
        <Sidebar></Sidebar>
      </div>
      <div class="col-8">
        <Main></Main>
      </div>
    </div>
    <div class="player__container">
      <music-player v-if="songInfo.displayName"></music-player>
    </div>
  </div>
</template>
<script setup>

import Sidebar from "@/components/SideBar/Sidebar.vue";
import Main from "@/components/main/Main.vue";
import MusicPlayer from "@/components/music-player/MusicPlayer.vue";
import {songInfo} from "@/js/player.js";
</script>


<style scoped>
.home {
  position: relative;
  height: 100%;
  width: 100%;
  background: var(--main-bg-color);
}

.player__container {
  background: var(--main-bg-color);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: 80px;
  padding: 5px 0;
}
</style>