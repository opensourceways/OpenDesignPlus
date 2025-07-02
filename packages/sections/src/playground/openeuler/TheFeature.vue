<script lang="ts" setup>
import { ref } from 'vue';
import { } from '@opensig/opendesign';
import Section from '@openeuler/Section.vue';
import Feature from '@/components/openeuler/Feature.vue';
import { OIconAdd } from '@opensig/opendesign';

const data = [
    {
        title: '标题文本',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
    },
    {
        title: '标题文本2',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
    },
    {
        title: '标题文本3',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
    }, {
        title: '标题文本',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
    },
    {
        title: '标题文本2',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
    },
    {
        title: '标题文本3',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
    }
]

const data2 = [
    {
        title: '标题文本',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
        icon: OIconAdd,
    },
    {
        title: '标题文本2',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
        icon: OIconAdd,
    },
    {
        title: '标题文本3',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
        icon: OIconAdd,
    }, {
        title: '标题文本',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
        icon: OIconAdd,
    },
    {
        title: '标题文本2',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
        icon: OIconAdd,
    },
    {
        title: '标题文本3',
        content: '内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容文本内容',
        icon: OIconAdd,
    }
]

</script>

<template>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data.slice(0, 2)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data.slice(0, 3)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data.slice(0, 4)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data.slice(0, 5)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data2.slice(0, 2)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data2.slice(0, 3)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data2.slice(0, 4)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data2.slice(0, 5)" />
    </Section>
    <Section title="亮点特性" subtitle=" " class="section-demo">
        <Feature :features="data2" />
    </Section>
</template>

<style lang="scss" scoped></style>