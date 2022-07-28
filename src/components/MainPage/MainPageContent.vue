<template>
  <div class="content">
    <main-page-preview
      :title="'Welcome to NASA portal'"
      :subTitle="'The site that shows you cool stuff about nasa'"
    />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

import MainPagePreview from '@/components/MainPage/MainPagePreview'

/**
 * Компонент контент главной страницы
 * приветствие и информация о картинке
 */
export default defineComponent({
  name: 'MainPageContent',
  components: { MainPagePreview }
})
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;

  &-info {
    @include font-h1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
}
</style>
