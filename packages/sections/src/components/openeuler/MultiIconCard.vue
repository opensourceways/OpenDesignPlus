<script lang="ts" setup>
import { computed } from 'vue';
import { OCard, type CardPropsT } from '@opensig/opendesign';
import { useScreen } from '@/composables/useScreen.ts';

const { isPadV, isPhone } = useScreen();

export type IconCardT = Pick<CardPropsT, 'title' | 'detail' | 'icon'>;

const props = withDefaults(defineProps<{
  /*卡片各自的配置*/
  cards: IconCardT[];
  /*布局*/
  layout?: CardPropsT['layout'];
  /*所有卡片的配置，优先级低于cards*/
  cardProps?: Omit<CardPropsT, 'layout'>;
}>(), {
  layout: 'v',
});

const gridTemplateColumns = computed(() => {
  if (isPhone.value) {
    return '1fr';
  }
  if (isPadV.value) {
    switch (props.cards.length) {
      case 1:
        return '1fr';
      default:
        return '1fr 1fr';
    }
  }
  switch (props.cards.length) {
    case 1:
      return '1fr';
    case 2:
      return '1fr 1fr';
    default:
      return '1fr 1fr 1fr';
  }
});
</script>

<template>
  <div v-if="props.cards?.length" class="multi-card-wrapper">
    <OCard
      v-for="(card, index) in cards"
      :key="index"
      class="multi-icon-card-item"
      v-bind="{
        ...props.cardProps,
        layout: props.layout,
        ...card
      }"
    />
  </div>
</template>

<style lang="scss" scoped>
.multi-card-wrapper {
  display: grid;
  gap: var(--o3-gap-5) var(--o3-gap-6);
  grid-template-columns: v-bind(gridTemplateColumns);
}
.o-card {
  --card-content-color: var(--o-color-info3);
  @include respond-to("phone") {
    --card-header-text-size: 16px;
    --card-header-text-height: 24px;
    --card-content-text-size: 14px;
    --card-content-text-height: 22px;
  }
}
</style>