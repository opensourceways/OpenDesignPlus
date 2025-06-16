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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
