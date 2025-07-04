<script setup lang="ts">
import SliderCard from '@openeuler/SliderCard.vue';
import Section from '@openeuler/Section.vue';
import banner from '@/assets/category/banner/banner_pc_light.jpg';
import banner1 from '@/assets/category/banner/example2.jpg';

const cards = [
  {
    title: '轮播卡片1',
    content: '轮播卡片内容描述文本。文本文本文本文本文本文本文本文本。',
    cover: banner,
    href: '#',
  },
  {
    title: '轮播卡片2',
    content: '轮播卡片内容描述文本。文本文本文本文本文本文本文本文本。',
    cover: banner1,
    href: '#',
  },
  {
    title: '轮播卡片3',
    content: '轮播卡片内容描述文本。文本文本文本文本文本文本文本文本。',
    cover: banner,
    href: '#',
  },
  {
    title: '轮播卡片4',
    content: '轮播卡片内容描述文本。文本文本文本文本文本文本文本文本。',
    cover: banner1,
    href: '#',
  },
];
</script>

<template>
  <div class="playground">
    <Section title="轮播卡片" subtitle=" " class="section-demo">
      <SliderCard :cards="cards" />
    </Section>
  </div>
</template>

<style scoped>
.section-demo {
  margin-bottom: var(--o3-gap-6);
}
</style>
