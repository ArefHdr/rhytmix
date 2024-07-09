<template>
  <div class="music__player">
    <div class="music__player__cover">
      <div class="music__player__cover__wave">
        <i class="bi bi-soundwave"></i>
      </div>
      <div class="sidebar__song__info d-flex align-items-center justify-content-between gap-2">
        <div class="sidebar__song__cover">
          <img v-if="songInfo.cover" :src="songInfo.cover" alt="Song Cover"/>
        </div>
        <div>
          <p v-if="songInfo.displayName" class="sidebar__song__name m-0">{{ songInfo.displayName }}</p>
          <p v-if="songInfo.artist" class="sidebar__song__artist m-0">{{ songInfo.artist }}</p>
        </div>
      </div>
    </div>
    <div class="music__player__actions">
      <div class="player__play__actions">
        <i v-if="repeatSong" @click="repeatHandler" class="text-success bi bi-repeat-1"></i>
        <i v-else @click="repeatHandler" class="bi bi-repeat-1"></i>

        <i @click="playerHandler(songListName[songIndex-1],songListName,songIndex-1)"
           class="bi bi-skip-start"></i>
        <i v-if="currentAudio.paused" @click="pauseHandler" class="bi bi-play-circle"></i>
        <i v-else @click="pauseHandler" class="bi bi-pause-circle"></i>
        <i @click="playerHandler(songListName[songIndex+1],songListName,songIndex+1)" class="bi bi-skip-end"></i>
      </div>
      <div class="player__progressbar d-flex align-items-center justify-content-between gap-1">
        <span v-if="songInfo.displayName">{{ audioDCurrentTime }}</span>
        <input @click="setProgressBar" v-model="progressValue" class="custom-range" type="range" min="0" max="100">
        <span v-if="songInfo.displayName">{{ audioDuration }}</span>
      </div>
      <div class="player__volume d-flex align-items-center">
        <i v-if="volume>0" class="bi bi-volume-up"></i>
        <i v-else class="bi bi-volume-mute"></i>
        <label>{{ volumeInPercent() }}</label>
        <input class="custom-volume-range" type="range" min="0" max="1" step="0.01" v-model="volume"
               @change="adjustVolume"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import {inject, onMounted, ref} from "vue";
import {
  songInfo,
  progressValue,
  currentAudio,
  songListName,
  songIndex,
  playerHandler,
  repeatHandler,
  repeatSong
} from "@/js/player.js";

const volume = ref(1);

const audioDuration = inject('$audioDuration');
const audioDCurrentTime = inject('$audioDCurrentTime');
const playIcon = ref(null)
const icon = ref(null)
onMounted(() => {
  icon.value = playIcon.value
})

// Set Progress Bar
function setProgressBar(e) {
  const width = e.target.clientWidth; // Access the target element's clientWidth
  const clickX = e.offsetX; // Access offsetX from the event
  const duration = currentAudio.duration; // Access duration from the ref
  currentAudio.currentTime = (clickX / width) * duration; // Update currentTime
}

const volumeInPercent = () => {
  return (volume.value * 100).toFixed(0);
}
const adjustVolume = () => {
  currentAudio.volume = volume.value;
};
const pauseHandler = () => {
  if (currentAudio.paused) {
    currentAudio.play()
  } else {
    currentAudio.pause();
  }
}
</script>

<style scoped>
.player__progressbar {
  width: 60%;
}

.music__player {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
}

.music__player__cover {
  flex-basis: 30%;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.music__player__cover__wave {
  color: var(--main-color);
  font-size: var(--title-font-size);
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

.player__play__actions {
  display: flex;
  gap: 1rem;
  align-items: center;

}

.player__play__actions i {
  font-size: var(--title-font-size);
  cursor: pointer;
}

.music__player__actions {
  display: flex;
  color: var(--main-color);
  justify-content: space-between;
  gap: 2rem;
  flex-basis: 70%;
}

.progress {
  width: 500px;
}

/* Customize the track of the range input */
input[type="range"].custom-range {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: rgb(253, 251, 251);
  border-radius: 5px;
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s;
}

/* Track appearance on hover */
input[type="range"].custom-range:hover {
  opacity: 1;
}

/* Customize the thumb of the range input */
input[type="range"].custom-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 16px;
  background: #4CAF50;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}

input[type="range"].custom-range::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}

/* Thumb appearance on hover */
input[type="range"].custom-range:hover::-webkit-slider-thumb {
  background: #45a049;
}

input[type="range"].custom-range:hover::-moz-range-thumb {
  background: #45a049;
}

/* Customize the active state of the thumb */
input[type="range"].custom-range:active::-webkit-slider-thumb {
  background: #3e8e41;
}

input[type="range"].custom-range:active::-moz-range-thumb {
  background: #3e8e41;
}

/* Additional styles for Firefox */
input[type="range"].custom-range::-moz-range-track {
  background: #ddd;
  border-radius: 5px;
  height: 8px;
}

/* Customize the track of the range input */
input[type="range"].custom-volume-range {
  -webkit-appearance: none;
  width: 100%;
  height: 8px;
  background: rgb(253, 251, 251);
  border-radius: 5px;
  outline: none;
  opacity: 0.9;
  transition: opacity 0.2s;
}

/* Track appearance on hover */
input[type="range"].custom-volume-range:hover {
  opacity: 1;
}

/* Customize the thumb of the range input */
input[type="range"].custom-volume-range::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 16px;
  background: #4CAF50;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}

input[type="range"].custom-volume-range::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #4CAF50;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.2s;
}

/* Thumb appearance on hover */
input[type="range"].custom-volume-range:hover::-webkit-slider-thumb {
  background: #45a049;
}

input[type="range"].custom-volume-range:hover::-moz-range-thumb {
  background: #45a049;
}

/* Customize the active state of the thumb */
input[type="range"].custom-volume-range:active::-webkit-slider-thumb {
  background: #3e8e41;
}

input[type="range"].custom-volume-range:active::-moz-range-thumb {
  background: #3e8e41;
}

/* Additional styles for Firefox */
input[type="range"].custom-volume-range::-moz-range-track {
  background: #ddd;
  border-radius: 5px;
  height: 8px;
}

</style>