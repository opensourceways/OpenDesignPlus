<script lang="ts" setup>
import type { PropType } from 'vue';
import type { LinkCardItemT } from './OInfoCard.vue';
import OInfoCard from './OInfoCard.vue';

defineProps({
  cards: {
    type: Array as PropType<LinkCardItemT[]>,
    required: true,
  },
});
</script>

<template>
  <div class="card-list">
    <OInfoCard v-for="(card, index) in cards" :key="index" :item="card" class="card-item"></OInfoCard>
  </div>
</template>

<style lang="scss" scoped>
.card-list {
  display: grid;
  grid-template-columns: 3.95fr 6.05fr;
  gap: var(--o3-gap-6);

  .card-item {
    &:first-child {
      grid-row-start: 1;
      grid-row-end: 3;

      :deep(.o-card-main) {
        display: flex;
        justify-content: end;
      }
    }
  }
}
</style>
