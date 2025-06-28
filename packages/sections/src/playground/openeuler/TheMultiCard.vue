<script setup lang="ts">
import MultiCardCard from '@openeuler/MultiCard.vue';
import Section from '@openeuler/Section.vue';
import banner from '@/assets/category/banner/banner_pc_light.jpg';

const cards = [
    {

        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: banner,
        buttons: [
            { text: 'Button 1', href: '#' },
            { text: 'Button 2', href: '#' }
        ]

    },
    {

        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: banner,
        buttons: [
            { text: 'Button 3', href: '#' },
            { text: 'Button 4', href: '#' }
        ]

    },
    {

        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: banner,
        buttons: [
            { text: 'Button 3', href: '#' },
            { text: 'Button 4', href: '#' }
        ]

    },
    {

        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: banner,
        buttons: [
            { text: 'Button 3', href: '#' },
            { text: 'Button 4', href: '#' }
        ]

    },
    {

        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: banner,
        buttons: [
            { text: 'Button 3', href: '#' },
            { text: 'Button 4', href: '#' }
        ]

    }
];
</script>

<template>
    <div class="playground">
        <Section title="图文卡片" subtitle=" " class="section-demo">
            <MultiCardCard :cards="cards.slice(0, 2)">
            </MultiCardCard>
        </Section>
        <Section title="图文卡片" subtitle=" " class="section-demo">
            <MultiCardCard :cards="cards.slice(0, 3)">
            </MultiCardCard>
        </Section>
        <Section title="图文卡片" subtitle=" " class="section-demo">
            <MultiCardCard :cards="cards.slice(0, 4)">
            </MultiCardCard>
        </Section>
        <Section title="图文卡片" subtitle=" " class="section-demo">
            <MultiCardCard :cards="cards">
            </MultiCardCard>
        </Section>
    </div>
</template>

<style scoped>
.section-demo {
    margin-bottom: var(--o3-gap-6);
}
</style>
<style lang="scss"></style>
