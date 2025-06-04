<script setup lang="ts">
import { OFigure, OLink } from '@opensig/opendesign';
import type { PropType } from 'vue';

export interface ItemLogoT {
  logo: {
    [key: string]: string;
  };
  href: string;
  hrefEn: string;
}

defineProps({
  // 轮播数据
  data: {
    type: Array as PropType<ItemLogoT[]>,
    default: () => {
      [];
    },
  },
  // 反向轮播
  reverseDirection: {
    type: Boolean,
    default: false,
  },
  // 语言
  lang: {
    type: String as PropType<'zh' | 'en'>,
    default: 'zh',
  },
  // 风格
  theme: {
    type: String as PropType<'light' | 'dark'>,
    default: 'light',
  },
  // 指定在何处显示链接的资源
  target: {
    type: String,
    default: '_blank',
  },
});
</script>

<template>
  <div v-if="data.length > 0" class="swiper">
    <div class="swiper-list" :class="{ 'swiper-reverse': reverseDirection }">
      <div v-for="(item, i) in data" :key="i" class="swiper-item">
        <OLink v-if="item.href || item.hrefEn" :href="lang === 'en' ? item.hrefEn || item.href : item.href" :target="target">
          <div class="swiper-card">
            <OFigure :src="item.logo[theme]" />
          </div>
        </OLink>
        <div v-else class="swiper-card">
          <OFigure :src="item.logo[theme]" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.swiper {
  display: flex;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}
.swiper-list {
  display: flex;
  animation: marque 100s linear infinite;
  @include respond-to('>phone') {
    @include hover {
      animation-play-state: paused;
    }
  }
}
.swiper-reverse {
  animation: marquere 100s linear infinite;
}

.swiper-item {
  display: flex;
}

.swiper-card {
  width: 269px;
  background-color: var(--o-color-fill2);
  border-radius: var(--o-radius-xs);
  margin-right: 24px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  pointer-events: auto;
}
.o-figure {
  width: 100%;
  border-radius: var(--o-radius-xs);
  :deep(img) {
    width: 100%;
  }
}

:deep(.o-link) {
  .o-link-label {
    display: flex;
  }
}

@keyframes marque {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
}
@keyframes marquere {
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0);
  }
}

@include respond-to('phone') {
  .swiper-card {
    width: 160px;
    margin-right: 12px;
  }
}
</style>
