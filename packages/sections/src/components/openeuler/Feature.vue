<script lang="ts" setup>
import { ref } from 'vue';
import { useScreen } from '@/composables/useScreen.ts';

const { gtPadV } = useScreen();

interface FeatureT {
    title: string;
    content: string;
    icon?: any;
}

const props = defineProps<{
    features: FeatureT[];
}>();
</script>

<template>
    <div v-if="props.features.length" class="feature-list">
        <div class="feature-list__item" v-for="(feature, index) in props.features" :key="index">
            <div class="feature-item">
                <component :is="feature.icon" class="g-icon-48"></component>
                <div class="feature-title">{{ feature.title }}</div>
                <div v-if="gtPadV" class="feature-content">{{ feature.content }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.feature-list {
    background-color: var(--o-color-fill2);
    padding: var(--o3-gap-8) var(--o3-gap-10);
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    column-gap: var(--o3-gap-8);
    row-gap: var(--o3-gap-7);
    border-radius: var(--o3-radius-l);

    @include respond-to('phone') {
        gap: 0;
        display: flex;
        white-space: nowrap;
        overflow: hidden;
        overflow-x: scroll;
        width: 100%;
        padding: 16px 0;
    }
}

.feature-list__item {
    position: relative;
    width: 100%;
    text-align: center;

    &::after {
        content: '';
        position: absolute;
        top: 24px;
        right: calc(0% - var(--o3-gap-8) / 2);
        height: 96px;
        background-color: rgba(0, 0, 0, 0.1);
        width: 1px;

        @include respond-to('<=pad_v') {
            top: 16px;
            height: 36px;
        }
    }

    &:last-child,
    &:nth-of-type(3n) {
        &::after {
            display: none;
        }
    }

    &:nth-of-type(2) {
        .feature-content {
            max-width: 288px;

            @include respond-to('<=laptop') {
                max-width: 252px;
            }
        }
    }

    @include respond-to('phone') {
        &::after {
            display: none;
        }
    }
}

.feature-item {
    text-align: center;
    position: relative;
    display: inline-block;
    max-width: 320px;

    @include respond-to('phone') {
        flex: 0 0 auto;
        width: 25vw;
        padding: 0 24px;
    }

    .feature-content {
        @include text1
    }
}

.feature-title {
    @include h4;
    white-space: wrap;
    font-weight: 600;
    margin-top: var(--o3-gap-4);
    margin-bottom: var(--o3-gap-2);
    color: var(--o-color-info1);

    @include respond-to('phone') {
        white-space: pre-wrap;

        @include tip2;

        &::after {
            display: none;
        }
    }
}

.g-icon-48 {
    font-size: var(--o-icon_size-xl);
}
</style>