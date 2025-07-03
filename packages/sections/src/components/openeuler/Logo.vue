<script setup lang="ts">
import { computed, type PropType } from 'vue';
import { ORow, OCol, OLink, OFigure } from '@opensig/opendesign';

import ItemSwiper from '@openeuler/ItemSwiper.vue';
import ContentWrapper from '@openeuler/ContentWrapper.vue';

import { publisher } from '@/data/logo';

interface ItemLogoT {
  logo: {
    [key: string]: string;
  };
  href: string;
  hrefEn: string;
}
interface ItemSwiperT {
  children: ItemLogoT[];
  reverseDirection: boolean;
}

defineProps({
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
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top'>,
    default: '_blank',
  },
});

const total = publisher.length;

const list = computed(() => {
  const row = total > 15 ? 3 : 2;
  const num = total / row;
  let arr = [] as ItemSwiperT[];
  for (let i = 0; i < row; i++) {
    arr.push({
      children: [...publisher.slice(i * num, (i + 1) * num).map(item => ({ ...item, hrefEn: item.hrefEn || '' })), ...publisher.slice(i * num, (i + 1) * num).map(item => ({ ...item, hrefEn: item.hrefEn || '' }))],
      reverseDirection: false,
    });
    if (i === row - 1) {
      arr[i].children = [...publisher.slice(i * num).map(item => ({ ...item, hrefEn: item.hrefEn || '' })), ...publisher.slice(i * num).map(item => ({ ...item, hrefEn: item.hrefEn || '' }))];
    }
    if (i % 2 === 1) {
      arr[i].reverseDirection = true;
    }
  }
  return arr;
});

const col = computed(() => {
  let num = 5;
  if (total < 6) {
    num = total;
  } else if (total < 7) {
    num = 3;
  } else if (total < 9) {
    num = 4;
  }
  return num;
});
</script>

<template>
  <div class="logo-swiper">
    <template v-if="total > 10">
      <ItemSwiper v-for="(item, index) in list" :key="index" :data="item.children"
        :reverse-direction="item.reverseDirection" :lang="lang" :theme="theme" :target="target"
        class="partner-swiper" />
    </template>
    <template v-else>
      <ContentWrapper>
        <ORow gap="24px 24px" wrap="wrap" class="logo-data">
          <OCol v-for="item in publisher" :key="item.href" :flex="`0 0 ${100 / col}%`">
            <div class="item-logo">
              <OLink v-if="item.href || item.hrefEn" :href="lang === 'en' ? item.hrefEn || item.href : item.href"
                :target="target">
                <div class="logo-card">
                  <OFigure :src="item.logo[theme]" />
                </div>
              </OLink>
              <div v-else class="logo-card">
                <OFigure :src="item.logo[theme]" />
              </div>
            </div>
          </OCol>
        </ORow>
      </ContentWrapper>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.logo-swiper {
  width: 100%;
  overflow: hidden;
}

.partner-swiper {
  &+.partner-swiper {
    margin-top: 24px;

    @include respond-to('laptop') {
      margin-top: 20px;
    }

    @include respond-to('pad_h') {
      margin-top: 16px;
    }

    @include respond-to('<=pad_v') {
      margin-top: 12px;
    }
  }
}

.item-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--o-color-fill2);
  border-radius: var(--o-radius-xs);

  .o-figure {
    :deep(img) {
      width: auto;
      max-height: 90px;
    }
  }
}
</style>
