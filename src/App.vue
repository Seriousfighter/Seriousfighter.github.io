<script setup>

import ModalCustom from './components/ModalCustom.vue'
import CustomLayout from './components/layout/CustomLayout.vue'
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <CustomLayout>
    <router-view></router-view>
  </CustomLayout>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
