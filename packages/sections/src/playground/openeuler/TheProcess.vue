<script lang="ts" setup>
import {} from '@opensig/opendesign';
</script>
<template>
  <div class="demo-container">
    <div class="text-block">
      <h4>Clip-path 方案</h4>
      <div class="clip-text">123</div>
    </div>

    <div class="text-block">
      <h4>Mask 方案</h4>
      <div class="mask-text">123</div>
    </div>

    <div class="text-block">
      <h4>Background-clip 方案</h4>
      <div class="bg-clip-text">123</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.demo-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
}

.text-block {
  text-align: center;

  h4 {
    margin-bottom: 1rem;
  }
}

// 方案1: clip-path
.clip-text {
  font-size: 48px;
  font-weight: bold;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 50%);
}

// 方案2: mask
.mask-text {
  font-size: 48px;
  font-weight: bold;
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 50%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 50%);
}

// 方案3: background-clip
.bg-clip-text {
  font-size: 48px;
  font-weight: bold;
  background-image: linear-gradient(to bottom, black 50%, transparent 50%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
