<script lang="ts" setup>
import { OCarousel, OCarouselItem, OFigure, OLink } from '@opensig/opendesign';
import { useScreen } from '@/composables/useScreen';

const { lePadV } = useScreen();

interface CardT {
  title: string;
  content: string;
  cover: string;
  href: string;
}

const props = defineProps({
  cards: {
    type: Array as () => CardT[],
    default: () => [],
  },
});
</script>

<template>
  <div class="wrapper">
    <OCarousel v-if="!lePadV" class="slider-card" indicator-click :loop="true" effect="toggle">
      <OCarouselItem v-for="(card, index) in props.cards" :key="index" class="slider-card-item">
        <OFigure :src="card.cover" :alt="card.title" class="slider-card-cover">
          <div class="card-content">
            <div class="card-title">{{ card.title }}</div>
            <div class="card-description">{{ card.content }}</div>
            <OLink v-if="card.href" :href="card.href" class="card-link"> 了解更多 </OLink>
          </div>
        </OFigure>
      </OCarouselItem>
    </OCarousel>
    <OCarousel v-else class="slider-card" indicator-click :loop="true" effect="toggle">
      <OCarouselItem v-for="(card, index) in props.cards" :key="index" class="slider-card-item">
        <OFigure :src="card.cover" :alt="card.title" class="slider-card-cover">
          <div class="card-content">
            <div class="card-title">{{ card.title }}</div>
            <div class="card-description">{{ card.content }}</div>
            <OLink v-if="card.href" :href="card.href" class="card-link"> 了解更多 </OLink>
          </div>
        </OFigure>
      </OCarouselItem>
    </OCarousel>
  </div>
</template>

<style lang="scss" scoped>
.slider-card {
  --slide-width: calc(70vw - 36px);
  --slide-gap: 16px;
  --carousel-indicator-offset: -32px;
  height: 360px;
  width: 100%;
  overflow: visible;
  :deep(.the-slider-container) {
    height: 100%;
    overflow: hidden;
  }
  :deep(.o-carousel-indicator-bar) {
    width: 100%;
    &::after {
      border-radius: 6px;
    }
    &::before {
      border-radius: 6px;
    }
  }
  @include respond-to('pc_s') {
    height: 300px;
  }
  @include respond-to('<=laptop') {
    height: 280px;
  }
  @include respond-to('<=pad_v') {
    --slide-width: calc(100vw - 64px);
    width: calc(var(--slide-gap) + var(--slide-width));
    height: 184px;
  }
}

.slider-card-item {
  height: 100%;
}

.slider-card-cover {
  width: 100%;
  height: 100%;
}

.card-content {
  padding: 0 96px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.card-title {
  @include h1;
  font-weight: 600;
  color: var(--o-color-info1);
}

.card-description {
  margin-top: var(--o3-gap-3);
  margin-bottom: var(--o3-gap-7);
}
</style>
