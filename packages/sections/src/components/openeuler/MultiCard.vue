<script lang="ts" setup>
import { computed } from 'vue';
import { OCard, OButton, OScroller } from '@opensig/opendesign';
import { useScreen } from '@/composables/useScreen';

const { lePadV } = useScreen();

interface CardT {
    title: string;
    content: string;
    cover: string;
    buttons?: { text: string; href?: string }[];
}

const props = defineProps({
    cards: {
        type: Array as () => CardT[],
        default: () => [],
    },
});

const cardCount = computed(() => props.cards.length);
const cardWidth = computed(() => {
    if (lePadV.value) {
        if (cardCount.value <= 2) {
            return `calc((100% - var(--card-gap) * 1) / 2)`;
        }
        return `calc((100% - var(--card-gap) * 2) / 3)`;
    } else {
        if (cardCount.value <= 4) {
            return `calc((100% - var(--card-gap) * ${cardCount.value - 1}) / ${cardCount.value})`;
        }
        return `calc((100% - var(--card-gap) * 3) / 4)`;
    }

});
const coverRatio = computed(() => {
    return cardCount.value === 2 ? 3 : 16 / 9;
});
</script>

<template>
    <div class="multi-card-wrapper">
        <OScroller class="pane" size="small" :show-type="lePadV ? 'never' : 'always'" disabled-y>
            <template v-for="card in cards" :key="card.title">
                <OCard :title="card.title" :detail="card.content" :cover="card.cover"
                    :cover-ratio="lePadV ? undefined : coverRatio" :layout="'v'" class="multi-card-item"
                    :style="{ width: cardWidth }">
                    <template #footer>
                        <div class="buttons">
                            <OButton v-for="(button, btnIndex) in card.buttons" :key="btnIndex" :href="button.href"
                                color="primary" round="pill" variant="outline" class="button">{{ button.text }}
                            </OButton>
                        </div>
                    </template>
                </OCard>
            </template>
        </OScroller>
    </div>
</template>

<style lang="scss" scoped>
.multi-card-wrapper {
    width: 100%;
    --card-gap: var(--o3-gap-5);
}

.pane {
    white-space: nowrap;

    :deep(.o-scrollbar) {
        --scrollbar-x-bottom: calc(-1 * var(--o3-gap-5) - 4px)
    }
}

.multi-card-item {
    display: inline-flex;
    margin-right: var(--card-gap);

    &:last-child {
        margin-right: 0;
    }

    @include respond-to('<=pad_v') {
        :deep(.o-card-cover-img) {
            height: 120px;
        }
    }
}

.buttons {
    display: flex;
    gap: 8px;
}
</style>