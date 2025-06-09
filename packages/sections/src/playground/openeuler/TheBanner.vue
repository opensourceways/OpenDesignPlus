<script setup lang="ts">
import Banner from '@openeuler/Banner.vue';

import banner from '@/assets/category/banner/banner_pc_light.jpg';

const bannerData = {
  bannerImg: banner,
  title: 'openEuler',
  subtitle: '提供服务器场景的安装升级、管理运维、性能调优、应用开放等操作指南',
  text: '了解更多',
  href: '/logo',
};
</script>

<template>
  <div class="banner">
    <Banner
      :background-image="bannerData.bannerImg"
      :title="bannerData.title"
      :subtitle="bannerData.subtitle"
      :text="bannerData.text"
      :href="bannerData.href"
    />
  </div>
</template>

<style lang="scss"></style>
