<script lang="ts" setup>
import {} from '@opensig/opendesign';
import MainCard from '@openeuler/MainCard.vue';
import Section from '@openeuler/Section.vue';
import banner from '@/assets/category/banner/banner_pc_light.jpg';
import { OIconAdd } from '@opensig/opendesign';
import type { LinkCardItemT } from '@/components/openeuler/OInfoCard.vue';

const card: LinkCardItemT[] = [
  {
    title: '重点卡片标题',
    desc: '这是重点卡片的描述文本。',
    icon: OIconAdd,
    bgImg: {
      pcImg: banner,
      padImg: banner,
      mbImg: banner,
    },
    links: [
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
    ],
  },
  {
    title: '重点卡片标题',
    desc: '这是重点卡片的描述文本。',
    icon: OIconAdd,

    links: [
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
    ],
  },
  {
    title: '重点卡片标题',
    desc: '这是重点卡片的描述文本。',
    icon: OIconAdd,

    links: [
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
      {
        title: '了解更多',
        href: '#',
        target: '_blank',
      },
    ],
  },
];
</script>

<template>
  <div class="playground">
    <Section title="重点卡片-带按钮" subtitle=" " class="section-demo">
      <MainCard :cards="card" />
    </Section>
  </div>
</template>

<style lang="scss" scoped>
.section-demo {
  margin-bottom: var(--o3-gap-6);
}
</style>
