<template>
  <button class="secondary__btn" type="button">
    <slot></slot>
  </button>
</template>
<script setup>

</script>

<style scoped>
.secondary__btn {
  background: var(--transparent-bg-color);
  color: var(--active-color);
  border-radius: var(--btn-border-radious);
  font-size: var(--main-font-size);
  border: var(--main-active-border);
  padding: 5px 35px;
}

.secondary__btn:hover {
  background: var(--active-color);
  color: var(--main-color);
  transition: var(--main-transition);
}
</style>