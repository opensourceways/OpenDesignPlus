<script setup lang="ts">
import { OIconAdd } from '@opensig/opendesign';
import MultiIconCardCard, { type IconCardT } from '@openeuler/MultiIconCard.vue';
import Section from '@openeuler/Section.vue';

const cards: IconCardT[] = [
  {
    title: '标题标题标题标题',
    detail: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
    icon: OIconAdd,

  },
  {
    title: '标题标题标题标题',
    detail: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
    icon: OIconAdd,
  },
  {
    title: '标题标题标题标题',
    detail: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
    icon: OIconAdd,
  },
  {
    title: '标题标题标题标题',
    detail: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
    icon: OIconAdd,
  },
  {
    title: '标题标题标题标题',
    detail: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
    icon: OIconAdd,
  },
];
</script>

<template>
  <div class="playground">
    <Section title="图标卡片" subtitle=" " class="section-demo">
      <MultiIconCardCard :cards="cards.slice(0, 1)">
      </MultiIconCardCard>
    </Section>
    <Section title="图标卡片" subtitle=" " class="section-demo">
      <MultiIconCardCard :cards="cards.slice(0, 2)" layout="h">
      </MultiIconCardCard>
    </Section>
    <Section title="图标卡片" subtitle=" " class="section-demo">
      <MultiIconCardCard :cards="cards.slice(0, 3)">
      </MultiIconCardCard>
    </Section>
    <Section title="图标卡片" subtitle=" " class="section-demo">
      <MultiIconCardCard :cards="cards.slice(0, 4)">
      </MultiIconCardCard>
    </Section>
    <Section title="图标卡片" subtitle=" " class="section-demo">
      <MultiIconCardCard :cards="cards">
      </MultiIconCardCard>
    </Section>
  </div>
</template>

<style scoped>
.section-demo {
  margin-bottom: var(--o3-gap-6);
}
</style>
<style lang="scss"></style>
