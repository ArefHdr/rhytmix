<template>
  <div class="main">
    <Header class="mb-4"></Header>
    <div class="main__song__content">
      <h1 v-if="songInfo.displayName" class="main__song__artist">{{ songInfo.artist }}</h1>
      <h1 v-else class="main__song__artist">Rhythmix</h1>
      <p v-if="songInfo.displayName" class="main__song__text">{{ songInfo.text }}</p>
      <p v-else class="main__song__text">Rhythmix makes your time better </p>
      <div class="main__song__actions d-flex gap-3">
        <PrimaryButton v-if="songInfo.displayName" @click="playerHandler(songInfo,songListName,songIndex)">
          {{ isPlaying ? 'Pause' : 'Play' }}
        </PrimaryButton>
        <secondary-button @click="addToFavorites" v-if="songInfo.displayName">
          {{favorites.includes(songInfo) ? '❤️' : '🤍'}}
        </secondary-button>
      </div>
    </div>
    <MusicContainer>
      <template #containertitle>Popular Musics</template>
      <template #musicItems>
        <MusicItems></MusicItems>
      </template>
    </MusicContainer>
    <MusicContainer>
      <template #containertitle>Popular Artists</template>
      <template #artistItems>
        <ArtistsItems></ArtistsItems>
      </template>
    </MusicContainer>
  </div>
</template>
<script setup>
import Header from "@/components/header/Header.vue";
import PrimaryButton from "@/components/common/buttons/PrimaryButton.vue";
import SecondaryButton from "@/components/common/buttons/SecondaryButton.vue";
import MusicContainer from "@/components/music-container/MusicContainer.vue";
import MusicItems from "@/components/music-item/MusicItems.vue";
import ArtistsItems from "@/components/artists/ArtistsItems.vue";
import {songInfo, songListName, songIndex, isPlaying, favorites} from "@/js/player.js";
import {playerHandler, addToFavorites} from "@/js/player.js";



</script>

<style scoped>
.main {
  height: 100%;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main > *:not(:first-child) {
  flex-grow: 1;
}

.main__song__artist {
  font-size: var(--title-font-size);
  color: var(--main-color);
  margin-bottom: var(--base-margin);
}

.main__song__text {
  font-size: var(--main-font-size);
  color: var(--second-color);
  margin-bottom: var(--base-margin);
}
</style>