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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
