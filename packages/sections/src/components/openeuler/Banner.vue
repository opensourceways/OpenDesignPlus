<script setup lang="ts">
import { onMounted, type PropType } from 'vue';
import { OButton } from '@opensig/opendesign';

import AOS from 'aos';

import ContentWrapper from '@openeuler/ContentWrapper.vue';

defineProps({
  backgroundImage: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  subtitle: {
    type: String,
    default: '',
  },
  href: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    default: '',
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
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
});

onMounted(() => {
  AOS.init({
    duration: 800,
  });
});
</script>

<template>
  <div class="banner-content" :class="`banner-${size}`">
    <div class="banner-bg" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    <ContentWrapper class="banner-text">
      <div class="banner-text-content">
        <p v-if="title" class="banner-title" data-aos="fade-up">{{ title }}</p>
        <p v-if="subtitle" class="banner-subtitle" data-aos="fade-up">
          {{ subtitle }}
        </p>
        <OButton v-if="href" variant="outline" color="primary" size="medium" :href="href" :target="target"
          class="learn-btn">
          <span>{{ text }}</span>
        </OButton>
      </div>
    </ContentWrapper>
  </div>
</template>

<style lang="scss">
.banner-content {
  width: 100%;
  position: relative;
}

.banner-bg {
  height: 100%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.banner-text {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.banner-text-content {
  height: 100%;
}

.learn-btn {
  margin-top: 24px;
}

.banner-small {
  height: 280px;

  .banner-title {
    color: var(--o-color-info1);
    font-weight: 500;
    padding-top: 48px;
    @include display2;
  }

  .banner-subtitle {
    color: var(--o-color-info1);
    margin-top: 8px;
    width: 60%;
    @include text2;
  }

  @media (min-width: 1201px) and (max-width: 1680px) {
    height: 220px;

    .banner-title {
      padding-top: 40px;
      @include display3;
    }

    .banner-subtitle {
      @include text1;
    }
  }

  @include respond-to('pad_h') {
    height: 180px;

    .banner-title {
      padding-top: 32px;
      @include h1;
    }

    .banner-subtitle {
      @include tip1;
    }
  }

  @include respond-to('<=pad_v') {
    display: none;
  }
}

.banner-medium {
  height: 360px;

  .banner-title {
    color: var(--o-color-info1);
    font-weight: 500;
    padding-top: 88px;
    @include display2;
  }

  .banner-subtitle {
    color: var(--o-color-info1);
    margin-top: 8px;
    width: 60%;
    @include text2;
  }

  @media (min-width: 1201px) and (max-width: 1680px) {
    height: 280px;

    .banner-title {
      padding-top: 64px;
      @include display3;
    }

    .banner-subtitle {
      @include text1;
    }
  }

  @include respond-to('pad_h') {
    height: 220px;

    .banner-title {
      padding-top: 48px;
      @include h1;
    }

    .banner-subtitle {
      @include tip1;
    }
  }

  @include respond-to('<=pad_v') {
    height: 120px;

    .banner-title {
      text-align: center;
      padding-top: 48px;
      @include h3;
    }

    .banner-subtitle {
      display: none;
    }
  }
}

.banner-large {
  height: 460px;

  .banner-title {
    color: var(--o-color-info1);
    font-weight: 500;
    padding-top: 124px;
    @include display1;
  }

  .banner-subtitle {
    color: var(--o-color-info1);
    margin-top: 8px;
    width: 60%;
    @include h4;
  }

  @media (min-width: 1201px) and (max-width: 1680px) {
    height: 400px;

    .banner-title {
      padding-top: 100px;
      @include display2;
    }

    .banner-subtitle {
      @include text2;
    }
  }

  @include respond-to('pad_h') {
    height: 320px;

    .banner-title {
      padding-top: 80px;
      @include display3;
    }

    .banner-subtitle {
      @include text1;
    }
  }

  @include respond-to('<=pad_v') {
    height: 184px;

    .banner-title {
      text-align: center;
      padding-top: 48px;
      @include h3;
    }

    .banner-subtitle {
      text-align: center;
      @include tip2;
    }
  }
}
</style>
