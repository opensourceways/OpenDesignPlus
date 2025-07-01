import { createRouter, createWebHistory } from 'vue-router';

export const routes = [
  {
    path: '/section',
    name: 'Section',
    component: () => import('../playground/openeuler/TheSection.vue'),
    meta: {
      title: '楼层模板',
    },
  },
  {
    path: '/footer',
    name: 'Footer',
    component: () => import('../playground/openeuler/TheFooter.vue'),
    meta: {
      title: '页脚',
    },
  },
  {
    path: '/logo',
    name: 'Logo',
    component: () => import('../playground/openeuler/TheLogo.vue'),
    meta: {
      title: 'logo轮播',
    },
  },
  {
    path: '/banner',
    name: 'Banner',
    component: () => import('../playground/openeuler/TheBanner.vue'),
    meta: {
      title: 'banner',
    },
  },
  {
    path: '/horizontal-anchor',
    name: 'HorizontalAnchor',
    component: () => import('../playground/openeuler/TheHorizontalAnchor.vue'),
    meta: {
      title: '水平锚点',
    },
  },
  {
    path: '/SingleTabCard',
    name: 'SingleTabCard',
    component: () => import('../playground/openeuler/TheSingleTabCard.vue'),
    meta: {
      title: 'Tab单卡',
    },
  },
  {
    path: '/MultiCard',
    name: 'MultiCard',
    component: () => import('../playground/openeuler/TheMultiCard.vue'),
    meta: {
      title: '图文多卡',
    },
  },
  {
    path: '/MultiIconCard',
    name: 'MultiIconCard',
    component: () => import('../playground/openeuler/TheMultiIconCard.vue'),
    meta: {
      title: '图标多卡',
    },
  },
  {
    path: '/LogoCard',
    name: 'LogoCard',
    component: () => import('../playground/openeuler/TheLogoCard.vue'),
    meta: {
      title: 'Logo卡片',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
