<script lang="ts" setup>
import { OCard, OLink } from '@opensig/opendesign';
import { useScreen } from '@/composables/useScreen';
import { ref, watch, type Component } from 'vue';

const { lePadV } = useScreen();

interface LinkT {
  title: string;
  target?: '_blank' | '_self';
  href?: string;
}

interface BgImgT {
  pcImg: string;
  padImg: string;
  mbImg: string;
}

export interface LinkCardItemT {
  icon: Component;
  title: string;
  desc: string;
  links: LinkT[];
  linkLayout?: 'block' | 'inline';
  bgImg?: BgImgT;
  bgPosition?: string;
}

const props = defineProps<{
  item: LinkCardItemT;
}>();

const links = ref<LinkT[]>([]);
watch(
  () => props.item,
  () => {
    links.value = props.item.links;
  },
  { immediate: true }
);
</script>

<template>
  <OCard
    :href="lePadV && links.length === 1 && links[0].href ? links[0].href : undefined"
    class="info-card"
    :style="[{ backgroundImage: `url(${props.item.bgImg?.pcImg})` }, props.item.bgPosition ? { backgroundPosition: props.item.bgPosition } : {}]"
  >
    <template #main>
      <div class="header">
        <div class="title">
          <component :is="item.icon" class="title-icon"></component>
          <span class="title-text">{{ item.title }}</span>
        </div>
        <div class="desc">{{ item.desc }}</div>
      </div>

      <div v-if="lePadV" class="footer" :class="item.linkLayout ? item.linkLayout : ''">
        <OLink v-for="(link, index) in links" :key="index" hover-underline class="link-item" :href="link.href" :target="link.target" color="primary">
          {{ link.title }}
        </OLink>
      </div>

      <div v-if="!lePadV && links.length > 1" class="footer" :class="item.linkLayout ? item.linkLayout : ''">
        <OLink v-for="(link, index) in links" :key="index" hover-underline class="link-item" :href="link.href" :target="link.target" color="primary">
          {{ link.title }}
        </OLink>
      </div>
    </template>
  </OCard>
</template>

<style lang="scss" scoped>
.info-card {
  height: 100%;
  --bg-height: 100%;
  background-size: 100% auto;
  background-repeat: no-repeat;
  position: relative;
  @include respond-to('<=pad_v') {
    background-size: auto var(--bg-height);
    height: auto;
    &.has-bg-img {
      :deep(.o-card-main) {
        padding-top: 48px;
      }
    }
  }
  --padding-bottom: 0;
  :deep(.o-card-main) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @include respond-to('<=pad_v') {
      padding-bottom: var(--padding-bottom);
    }
  }
}

.title {
  @include h1;
  color: var(--o-color-info1);
  font-weight: 600;
  vertical-align: vertical;
}

.title-icon {
  line-height: var(--o-icon_size-l);
  font-size: var(--o-icon_size-l);
  margin-right: var(--o3-gap-2);
  position: relative;
  top: calc((var(--o-icon_size-l) - var(--line-height)) / 2);
}

.desc {
  @include text1;
  color: var(--o-color-info3);
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
}

.footer {
  @include text1;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  &.block {
    flex-direction: column;
    .link-item {
      margin-right: 0;
    }
  }

  @include respond-to('>pad_v') {
    :deep(.o-link-main) {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      line-clamp: 1;
    }

    margin-top: calc(-1 * var(--o3-gap-3) + var(--o3-gap-5));

    .link-item {
      margin-left: var(var(--o3-gap-7));
      margin-top: var(--o3-gap-3);
    }
    :deep(.o-link) {
      display: inline-flex;
      flex-direction: row-reverse;
      .o-link-prefix {
        margin-right: 0;
        margin-left: var(--link-gap);
      }
    }
  }

  @include respond-to('<=pad_v') {
    border-top: 1px solid #edeff2;
    margin: 8px -12 px 0 -12px;
    padding: 0 12px;
  }
}

.link-item {
  --link-icon-size: var(--o-icon_size-m);
}
</style>
