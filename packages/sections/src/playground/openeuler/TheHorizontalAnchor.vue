<script setup lang="ts">
import HorizontalAnchor from '@openeuler/HorizontalAnchor.vue';

const anchor = [
  { title: '楼层一', id: 'first' },
  { title: '楼层二', id: 'second' },
  { title: '楼层三', id: 'third' },
  { title: '楼层四', id: 'fourth' },
  { title: '楼层五', id: 'fifth' },
];
</script>

<template>
  <div v-for="item in anchor" :key="item.id" :id="item.id" class="demo-item">{{ item.title }}</div>
  <HorizontalAnchor :anchor-data="anchor" wrap-class="warp-class" :transparent="true" />
</template>

<style lang="scss" scoped>
.demo-item {
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;

  &:first-child {
    margin-top: 150px;
  }

  &:not(:first-child) {
    margin-top: 20px;
  }
}
</style>

<style lang="scss">
.warp-class {
  width: calc(100vw - var(--app-aside-width));
}
</style>
