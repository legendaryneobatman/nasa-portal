<template>
  <div class="picture-info">
    <span class="picture-info__title">{{title}}</span>
    <span class="picture-info__description">{{description}}</span>
    <div class="picture-info__secondary">
      <span class="date">{{date}}</span>
      <span class="copyright">{{author}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Компонент информация о изображении
 */
export default defineComponent({
  name: 'PictureInfo',
  props: {
    title: { type: String },
    description: { type: String },
    date: { type: String },
    author: { type: String }
  }
})
</script>

<style lang="scss" scoped>
  .picture-info {
    display: flex;
    flex-direction: column;
    @include font-h5;

    &__title {
      @include font-h4()
    }

    &__description {
      @include font-body;
    }

    &__secondary {
      display: flex;
      align-items: center;
      gap: 12px;

    }
  }
</style>
