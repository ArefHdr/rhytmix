<template>
  <div class="music__container">
    <div class="music__container__header d-flex justify-content-between">
      <div class="music__container__title mb-3">
        <h1>
          <slot name="containertitle"></slot>
          <slot name="artisttitle"></slot>
        </h1>
      </div>
      <div class="music__container__header-actions d-flex gap-3">
        <i @click="scrollLeftHandler" class="bi bi-arrow-left"></i>
        <i @click="scrollRightHandler" class="bi bi-arrow-right"></i>
      </div>
    </div>
    <div class="music__container__items">
      <slot name="musicItems"></slot>
      <slot name="artistItems"></slot>
    </div>
  </div>
</template>

<script setup>

const scrollLeftHandler = (event) => {
  event.currentTarget.parentElement.parentElement.nextElementSibling.firstElementChild.scrollLeft -= 125
}
const scrollRightHandler = (event) => {
  event.currentTarget.parentElement.parentElement.nextElementSibling.firstElementChild.scrollLeft += 125

}
</script>

<style scoped>
.music__container__title h1 {
  font-size: var(--title-font-size);
  color: var(--main-color);
}

.music__container__header-actions {
  font-size: var(--main-font-size);
  color: var(--main-color);
}

.music__container__header-actions i:hover {
  cursor: pointer;
  color: var(--second-color);
}
</style>