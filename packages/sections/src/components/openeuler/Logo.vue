<script setup lang="ts">
import ItemSwiper from '@openeuler/ItemSwiper.vue';

import { publisher } from '@/data/logo';

const publisher1 = [...publisher.slice(0, 8), ...publisher.slice(0, 8)];
const publisher2 = [...publisher.slice(8, 16), ...publisher.slice(8, 16)];
const publisher3 = [...publisher.slice(16), ...publisher.slice(16)];
</script>

<template>
  <div class="logo-swiper">
    <ItemSwiper :data="publisher1" class="partner-swiper"></ItemSwiper>
    <ItemSwiper :data="publisher2" :reverse-direction="true" class="partner-swiper"></ItemSwiper>
    <ItemSwiper :data="publisher3" class="partner-swiper"></ItemSwiper>
  </div>
</template>

<style lang="scss" scoped>
.logo-swiper {
  width: 100%;
  overflow: hidden;
}

.partner-swiper {
  & + .partner-swiper {
    margin-top: 24px;

    @include respond-to('laptop') {
      margin-top: 20px;
    }

    @include respond-to('pad_h') {
      margin-top: 16px;
    }

    @include respond-to('<=pad_v') {
      margin-top: 12px;
    }
  }
}
</style>
