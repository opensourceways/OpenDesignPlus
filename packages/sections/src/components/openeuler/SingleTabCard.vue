<script lang="ts" setup>
import { ref, type PropType } from 'vue';
import { OButton, OCard, OTab, OTabPane } from '@opensig/opendesign';
import { useScreen } from '@/composables/useScreen';

const { lePadV } = useScreen();

interface ButtonT {
    text: string;
    href?: string;
}

interface CardT {
    title: string;
    content: string;
    cover?: string;
    buttons?: ButtonT[];
}

interface TabListT {
    title: string;
    card: CardT;
}

const props = defineProps({
    tabs: {
        type: Array as PropType<TabListT[]>,
        default: () => [],
    },
});
</script>
<template>
    <div class="wrapper">
        <template v-if="tabs.length === 1">
            <OCard :title="tabs[0].card.title" :detail="tabs[0].card.content" :cover="tabs[0].card.cover"
                :layout="lePadV ? 'v' : 'hr'" :cover-ratio="lePadV ? undefined : 16 / 9" class="single-card">
                <template #footer>
                    <div class="buttons">
                        <OButton v-for="(button, index) in tabs[0].card.buttons" :key="index" :href="button.href"
                            color="primary" round="pill" variant="outline" class="button">{{ button.text }}
                        </OButton>
                    </div>
                </template>
            </OCard>
        </template>
        <template v-else>
            <OTab :line="false" class="section-tab">
                <OTabPane v-for="(tab, index) in tabs" :key="index" :label="tab.title" :value="tab.title"
                    class="tab-pane">
                    <OCard :title="tab.card.title" :detail="tab.card.content" :cover="tab.card.cover"
                        :layout="lePadV ? 'v' : 'hr'" :cover-ratio="lePadV ? undefined : 16 / 9" class="single-card">
                        <template #footer>
                            <div class="buttons">
                                <OButton v-for="(button, index) in tab.card.buttons" :key="index" :href="button.href"
                                    color="primary" round="pill" variant="outline" class="button">{{ button.text }}
                                </OButton>
                            </div>
                        </template>
                    </OCard>
                </OTabPane>
            </OTab>
        </template>

    </div>
</template>
<style lang="scss" scoped>
.section-tab {
    :deep(.o-tab-pane) {
        padding-top: var(--o3-gap-5);
    }
}

.buttons {
    display: flex;
    gap: var(--o3-gap-4);
}

.single-card {
    @include respond-to('<=pad_v') {
        :deep(.o-figure-img) {
            height: 184px;
        }
    }
}
</style>