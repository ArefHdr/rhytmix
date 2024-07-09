<template>
  <div class="sidebar">
    <div class="sidebar__title">
      <h1>Rhythmix</h1>
    </div>
    <div class="sidebar__playlists">
      <default-button class="playlist_button active_playlist" ref="playlistBtn" @click="loadPlaylist">PlayList</default-button>
      <default-button class="playlist_button" ref="lastListeningBtn" @click="loadLastListening">Last Listening</default-button>
      <default-button class="playlist_button" ref="favoritesBtn" @click="loadFavorites">Favorites</default-button>
    </div>
    <div class="sidebar__musics">
      <sidebar-songs v-for="(song,index) in songs" :key="index" :songs="songs" :song="song"
                     :songNumber="index"></sidebar-songs>
    </div>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import DefaultButton from "@/components/common/buttons/DefaultButton.vue";
import SidebarSongs from "@/components/SideBar/SidebarSongs.vue";
import {playList} from "@/js/data.js"
import {lastListeningMusics, favorites} from "@/js/player.js";

let songs = ref(playList);

const buttons = ref(null)
onMounted(() => {
  buttons.value = document.querySelectorAll('.playlist_button')
})

const loadPlaylist = (event) => {
  songs.value = playList;
  activePlaylist(event)
}
const loadLastListening = (event) => {
  songs.value = lastListeningMusics.value
  activePlaylist(event)

}
const loadFavorites = (event) => {
  songs.value = favorites.value
  activePlaylist(event)
}
const activePlaylist = (event) => {
  buttons.value.forEach(button => {
    button.classList.remove('active_playlist')
  })
  event.currentTarget.classList.add('active_playlist')
}

</script>

<style scoped>
.active_playlist{
  border-bottom : 1px solid var(--active-color)
}
.sidebar {
  background: var(--second-bg-color);
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  gap: 5rem;
}

.sidebar__title h1 {
  font-size: var(--title-font-size);
  color: var(--main-color);
}

.sidebar__playlists {
  display: grid;
  justify-content: start;
  gap: var(--base-gap);
}

.sidebar__playlists button {
  text-align: left;
}

.sidebar__musics {
  overflow-y: auto;
  height: 45vh;
}

.sidebar__musics::-webkit-scrollbar {
  display: none;
}

</style>