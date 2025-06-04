<script setup lang="ts">
import TheAside from './components/common/TheAside.vue';
</script>

<template>
  <TheAside class="app-aside" />
  <div class="app-body">
    <router-view />
  </div>
</template>

<style lang="scss">
body {
  --app-aside-width: 240px;
  font-family: 'Helvetica', 'Arial', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  @media (max-width: 840px) {
    --app-aside-width: 0;
  }
}
.app-aside {
  position: fixed;
  left: 0;
  bottom: 0;
  width: var(--app-aside-width);
  z-index: 9;
  @media (max-width: 840px) {
    display: none;
  }
}
.app-body {
  margin-left: var(--app-aside-width);
  min-height: 100vh;
  background-color: var(--o-color-fill1);
  width: calc(100vw - var(--app-aside-width));
}
</style>

<style lang="scss">
#app {
  --layout-content-max-width: 100vw;
  --layout-content-padding: 64px;
  --layout-header-height: 80px;

  @include respond-to('<=laptop') {
    --layout-content-max-width: 100%;
    --layout-content-padding: 40px;
  }

  @include respond-to('<=pad') {
    --layout-content-padding: 32px;
  }

  @include respond-to('phone') {
    --layout-content-padding: 24px;
  }
}
</style>
