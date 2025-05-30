<script setup lang="ts">
import Section from '@openeuler/Section.vue';
import Footer from '@openeuler/Footer.vue';
</script>

<template>
  <div class="playground">
    <Section title="OPENDESIGNPLUS" footer="百度" footerHref="https://www.baidu.com/">
      <div class="section-demo"></div>
    </Section>
    <Footer />
  </div>
</template>

<style scoped>
.section-demo {
  width: 100%;
  height: 200px;
  background-color: var(--o-color-info1);
}
</style>

<style lang="scss">
#app {
  --layout-content-max-width: 1544px;
  --layout-content-padding: 64px;
  --layout-header-height: 80px;

  @include respond-to('<=laptop') {
    --layout-content-max-width: 100%;
    --layout-content-padding: 40px;
  }

  @include respond-to('<=pad') {
    --layout-content-padding: 32px;
  }

  @include respond-to('phone') {
    --layout-content-padding: 24px;
  }
}
</style>
