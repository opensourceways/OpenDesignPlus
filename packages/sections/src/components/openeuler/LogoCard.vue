<script lang="ts" setup>
import { computed } from 'vue';
import { OCard, ORow, OCol, OFigure } from '@opensig/opendesign';
import { useScreen } from '@/composables/useScreen';

const { lePadV, isPhone } = useScreen();

interface CardT {
    title: string;
    content: string;
    cover: string;
    time: string;
}

defineProps({
    cards: {
        type: Array as () => CardT[],
        default: () => [],
    },
});

const columns = computed(() => {
    if (isPhone.value) {
        return '0 1 100%';
    } else if (lePadV.value) {
        return '0 1 50%';
    }
    return '0 1 33.3333%';
});

</script>

<template>
    <div class="card-wrapper">
        <ORow gap="var(--grid-column-gutter)">
            <OCol v-for="(card, index) in cards" :key="index" :flex="columns">
                <OCard :title="card.title" :detail="card.content" :cover-ratio="16 / 9" :layout="'v'">
                    <template #cover>
                        <div class="cover-box">
                            <OFigure :src="card.cover" alt="Card Cover" class="cover-image" />
                        </div>
                    </template>
                    <template #footer>
                        <div class="timestamp">
                            <span class="time">{{ card.time }}</span>
                        </div>
                    </template>
                </OCard>
            </OCol>
        </ORow>
    </div>
</template>

<style lang="scss" scoped>
.card-wrapper {
    --grid-column-gutter: var(--o3-gap-6);
    --card-detail-max-row: 2
}

.cover-box {
    height: 100px;

    :deep(.cover-image) {
        height: 100%;
    }

    @include respond-to('<=pad_v') {
        height: 72px;
    }

    @include respond-to('phone') {
        height: 68px;
    }
}
</style>