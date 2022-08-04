<template>
  <div class="preview">
    <span class="preview__title">{{title}}</span>
    <p class="preview__subtitle">{{subTitle}}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Копонент превью главной страницы
 * рисует заголовок и подзаголовок
 */
export default defineComponent({
  name: 'MainPagePreview',
  props: {
    title: { type: String },
    subTitle: { type: String }
  }
})
</script>

<style lang="scss" scoped>
  .preview {
    @include flex-center;
    flex-direction: column;
    height: 800px;
    text-align: center;
    color: white;
    text-shadow: 4px 4px 2px rgba(197,197,197,0.6);

    &__title {
      @include font-h1()
    }

    &__subtitle {
      @include font-h2()
    }
  }
</style>
