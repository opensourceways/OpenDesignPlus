<script setup lang="ts">
import LogoCardCard from '@openeuler/LogoCard.vue';
import Section from '@openeuler/Section.vue';
import baodeLogo from '@/assets/category/logo/light/baode.png';

const cards = [
    {

        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: baodeLogo,
        time: '2024/07/06'
    },
    {
        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: baodeLogo,
        time: '2024/07/06'
    },
    {
        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: baodeLogo,
        time: '2024/07/06'
    },
    {
        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: baodeLogo,
        time: '2024/07/06'
    },
    {
        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: baodeLogo,
        time: '2024/07/06'
    },
    {
        title: '标题标题标题标题',
        content: '文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本',
        cover: baodeLogo,
        time: '2024/07/06'
    }
];
</script>

<template>
    <div class="playground">

        <Section title="图文卡片" subtitle=" " class="section-demo">
            <LogoCardCard :cards="cards">
            </LogoCardCard>
        </Section>

    </div>
</template>

<style scoped>
.section-demo {
    margin-bottom: var(--o3-gap-6);
}
</style>
<style lang="scss"></style>
