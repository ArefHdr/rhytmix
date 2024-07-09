<template>
  <button class="default__btn" type="button">
    <slot></slot>
  </button>
</template>
<script setup>

</script>

<style scoped>
.default__btn {
  background: var(--transparent-bg-color);
  color: var(--main-color);
  font-size: var(--main-font-size);
  border: none;
  border-bottom: 1px solid transparent;
  padding: 5px;
}

.default__btn:hover {
  transition: var(--main-transition);
  border-bottom: var(--main-active-border);
}
</style>