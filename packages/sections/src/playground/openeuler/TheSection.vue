<script setup lang="ts">
import Section from '@openeuler/Section.vue';
</script>

<template>
  <div class="playground">
    <Section title="OPENDESIGNPLUS" footer="openEuler" footerHref="https://www.openeuler.org/zh/" subtitle="测试楼层">
      <div class="section-demo">这里填写文本内容...</div>
    </Section>
  </div>
</template>

<style scoped>
.section-demo {
  width: 100%;
  height: 200px;
  background-color: rgba(var(--o-kleinblue-2));
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
<style lang="scss"></style>
