<script setup lang="ts">
import TheSingleTabCard from '@openeuler/SingleTabCard.vue';
import Section from '@openeuler/Section.vue';
import banner from '@/assets/category/banner/banner_pc_light.jpg';

const tabs = [
    {
        title: 'Tab 1',
        card: {
            title: '标题标题标题标题',
            content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
            cover: banner,
            buttons: [
                { text: 'Button 1', href: '#' },
                { text: 'Button 2', href: '#' }
            ]
        }
    },
    {
        title: 'Tab 2',
        card: {
            title: '标题标题标题标题',
            content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
            cover: banner,
            buttons: [
                { text: 'Button 3', href: '#' },
                { text: 'Button 4', href: '#' }
            ]
        }
    }
];
</script>

<template>
    <div class="playground">
        <Section title="单排单卡" subtitle=" ">
            <TheSingleTabCard :tabs="tabs.slice(0, 1)">
            </TheSingleTabCard>
        </Section>

        <Section title="单排单卡Tab" subtitle=" ">
            <TheSingleTabCard :tabs="tabs">
            </TheSingleTabCard>
        </Section>
    </div>
</template>

<style scoped>
.section-demo {
    width: 100%;
    height: 200px;
    background-color: rgba(var(--o-kleinblue-2));
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
<style lang="scss"></style>
