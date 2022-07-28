<template>
  <section class="main-page" >
    <vue-container xl>
      <main-page-content
        :media-data="mediaData"
      />
    </vue-container>
  </section>
  <section v-if="mediaData !== null" class="todays-media">
    <vue-container>
      <span class="todays-media__title">For example - this is media of the day</span>
      <picture-display
        :media-source="mediaData.url"
        :media-type="mediaData.media_type"
      />
      <picture-info
        :title="mediaData.title"
        :description="mediaData.explanation"
        :date="mediaData.date"
        :author="mediaData.copyright"
      />
    </vue-container>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import response from '@/API/index'

import { IMediaData } from '@/types/API/media'

import MainPageContent from '@/components/MainPage/MainPageContent.vue'
import PictureInfo from '@/components/Picture/PictureInfo.vue'
import PictureDisplay from '@/components/Picture/PictureDisplay.vue'
import VueContainer from '@/components/UI/VueContainer.vue'
import MainPagePreview from '@/components/MainPage/MainPagePreview.vue'

export default defineComponent({
  name: 'MainPage',
  components: { VueContainer, MainPageContent, PictureInfo, PictureDisplay },
  data: () => ({
    mediaData: null as IMediaData | null
  }),
  async created () {
    this.mediaData = await response.MediaOfDay()
    if (this.mediaData.media_type === 'video') {
      this.mediaData = await response.MediaThumb()
    }
  }
})
</script>

<style lang="scss" scoped>
  .main-page {
    position: relative;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/preview-space.jpg') no-repeat;
    background-size: cover;
  }

  .todays-media {
    background-color: map-get($grey, "200");

    &__title {
      @include font-h2()
    }
  }
</style>
