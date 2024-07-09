<template>
  <nav class="main__header d-flex justify-content-between">
    <div class="main__header__registration">
      <ul v-if="!users" class="d-flex justify-content-between gap-3">
        <li>
          <DefaultButton @click="loginHandler">Log In</DefaultButton>
        </li>
        <li>
          <DefaultButton>Sign Up</DefaultButton>
        </li>
      </ul>
    </div>
    <div class="main__header__search">
      <Search></Search>
    </div>
    <div class="main__header__logo">
      <img src="../../assets/images/music-covers/5.png">
    </div>
  </nav>
</template>
<script setup>
import DefaultButton from "@/components/common/buttons/DefaultButton.vue";
import Search from "@/components/search/Search.vue";
import {addUser} from "@/js/registration.js";
import {onMounted, ref} from "vue";

const users = ref(null)
onMounted(() => {
  users.value = JSON.parse(localStorage.getItem("users"));
})
const loginHandler = () => {

}
</script>
<style scoped>
.main__header__search {
  position: relative;
  flex-basis: 35%;
}

.main__header__logo {
  width: var(--covers-width);
  height: var(--covers-height);
}

.main__header__logo img {
  border-radius: var(--img-border-radious);
}
</style>