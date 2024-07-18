import {ref} from "vue";
import Swal from "sweetalert2";

const songInfo = ref({})
const audio = ref(null)
const audioDuration = ref(null)
const audioCurrentTime = ref(null)
const progressValue = ref(0)
let currentAudio = null
const sideBarPlayIcons = ref(null)
let songListName = null
let songIndex = null;
const lastListeningMusics = ref([])
const favorites = ref([]);
const songStatus = ref(null)
let audioPath = null
let isPlaying = ref(null);
const repeatSong = ref(false)
// let icon = null
const playerHandler = (song, list, songNumber) => {
    songListName = list
    if (songNumber === -1) {
        song = list[list.length - 1]
        songIndex = list.length - 1
    } else if (songNumber === list.length) {
        song = list[0];
        songIndex = 0
    } else {
        // song = list[songNumber]
        songIndex = songNumber
    }
    if (currentAudio && audioPath === song.path) {
        if (currentAudio.paused) {
            isPlaying.value = true
            currentAudio.play();
            song.status = "play"
            songStatus.value = song.status
        } else {
            isPlaying.value = false
            currentAudio.pause();
            song.status = "paused"
            songStatus.value = song.status
        }
    } else {
        if (currentAudio) {
            isPlaying.value = false
            currentAudio.pause();
        }
        currentAudio = new Audio(song.path);
        audioPath = decodeURIComponent(new URL(currentAudio.src).pathname);
        isPlaying.value = true
        currentAudio.play();
        // changeAllIcons(icons);
        song.status = "play"
        songStatus.value = song.status
    }
    songInfo.value = song
    if (!lastListeningMusics.value.includes(songInfo.value)) {
        lastListeningMusics.value.unshift(songInfo.value);
    }
    currentAudio.addEventListener('loadedmetadata', () => {
        audioDuration.value = formatDuration(currentAudio.duration);
    });
    currentAudio.addEventListener('timeupdate', () => {
        audioCurrentTime.value = formatTime(currentAudio.currentTime);
        progressValue.value = (currentAudio.currentTime / currentAudio.duration) * 100;
       console.log(progressValue.value)
    });
    currentAudio.addEventListener('ended', () => {
        if (currentAudio.currentTime >= currentAudio.duration) {
            if (repeatSong.value) {
                currentAudio.play();
            } else {
                if (songIndex === songListName.length - 1) {
                    songIndex = 0
                } else {
                    songIndex++
                }
                playerHandler(songListName[songIndex], songListName, songIndex);
            }
        }
    });
}
const repeatHandler = () => {
    repeatSong.value = !repeatSong.value
}
const addToFavorites = () => {
    if (!favorites.value.includes(songInfo.value)) {
        favorites.value.unshift(songInfo.value);
        Swal.fire({
            toast:true,
            position: "top",
            icon: "success",
            title: "Added To Favorites",
            showConfirmButton: false,
            timer: 1500
        });
    }
    else {
        favorites.value.splice(favorites.value.indexOf(songInfo.value), 1);
        Swal.fire({
            toast:true,
            position: "top",
            icon: "info",
            title: "Removed from Favorites",
            showConfirmButton: false,
            timer: 1500
        });
    }
}
const formatTime = (currentTimeInSeconds) => {
    const minutes = Math.floor(currentTimeInSeconds / 60);
    const seconds = Math.floor(currentTimeInSeconds % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
}
const formatDuration = (durationInSeconds) => {
    const minutes = Math.floor(durationInSeconds / 60);
    const seconds = Math.floor(durationInSeconds % 60);
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${formattedSeconds}`;
}

export {
    playerHandler,
    songInfo,
    audio,
    audioDuration,
    audioCurrentTime,
    progressValue,
    currentAudio,
    sideBarPlayIcons,
    lastListeningMusics,
    addToFavorites,
    favorites,
    songListName,
    songIndex,
    isPlaying,
    repeatHandler,
    repeatSong
}
