<template>
  <div class="search_box">
    <input v-model="searchValue" @input="searchHandler" placeholder="Search Music" type="text">
    <div v-if="searchValue" class="searched_box">
      <div v-for="(item,index) in resultItem" :key="index" @click="playerHandler(item,fullData,index)"
           class="searched_item">
        <div class="searched_item__cover">
          <img :src="item.cover">
        </div>
        <div class="searched_item__info">
          <h4 class="searched_item__name">{{ item.displayName }}</h4>
          <h4 class="searched_item__artist">{{ item.artist }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import {playList, popularMusic} from "@/js/data.js";
import {ref} from "vue";
import {playerHandler} from "@/js/player.js";

const fullData = ref([...playList, ...popularMusic])
const searchValue = ref('')
const resultItem = ref(null)
const searchHandler = () => {
  resultItem.value = fullData.value.filter(song => {
    return (
        (searchValue.value === '' || song.displayName.toLowerCase().includes(searchValue.value.toLowerCase()) || song.artist.toLowerCase().includes(searchValue.value.toLowerCase()))
    );
  });
}
</script>

<style scoped>
.searched_box {
  display: grid;
  gap: 1rem;
  border-radius: var(--btn-border-radious);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background: #1c2532;
  padding: 1rem;
  position: absolute;
  overflow: auto;
  max-height: 300px;
  width: 100%;
  margin-top: 5px;
}

.searched_item {
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--main-color);
  cursor: pointer;
}

.searched_item__cover {
  width: 60px;
}

.searched_item__info {
  display: flex;
  gap: 1rem;
}

.searched_item__info h4 {
  font-size: var(--main-font-size);
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.search_box input {
  width: 100%;
  color: var(--main-color);
  background: #1c2532;
  border-radius: var(--btn-border-radious);;
  padding: 5px 1rem;
}
</style>