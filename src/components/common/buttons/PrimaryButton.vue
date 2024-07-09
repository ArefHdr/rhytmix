<template>
  <button class="primary__btn" type="button">
    <slot></slot>
  </button>
</template>
<script setup>

</script>

<style scoped>
.primary__btn {
  background: var(--active-color);
  color: var(--main-color);
  border-radius: var(--btn-border-radious);
  font-size: var(--main-font-size);
  border: var(--main-active-border);
  padding: 5px 35px;
}

.primary__btn:hover {
  background: var(--main-color);
  color: var(--active-color);
  transition: var(--main-transition);
}
</style>