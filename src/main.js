import './assets/css/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './assets/css/global.css';
import {playerHandler, songInfo, audio, audioDuration, audioCurrentTime,allIcons} from "@/js/player.js";

import {createApp} from 'vue'
import App from './App.vue'

const app = createApp(App)
app.provide('$songInfo', songInfo);
app.provide('$audio', audio);
app.provide('$audioDuration', audioDuration);
app.provide('$audioDCurrentTime', audioCurrentTime);
app.provide('$playerHandler', playerHandler);
app.provide('$allSidebarPlayIcons', allIcons);
app.mount('#app')


