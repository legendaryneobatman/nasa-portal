<template>
  <vue-loader v-if="isLoading"/>
  <article v-else >
    <section  class="main-page" >
      <vue-container xl>
        <main-page-content
          :media-data="mediaData"
        />
      </vue-container>
    </section>
    <section class="todays-media">
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
    <section class="gallery">
      <span class="gallery__title">Browse more cosmic photos</span>
      <picture-gallery :media-gallery="mediaGallery" />
    </section>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import {
  MediaOfDay,
  MediaGallery
} from '@/API/APOD'

import { IMediaData } from '@/types/API/media'

import MainPageContent from '@/components/main-page/MainPageContent.vue'
import PictureInfo from '@/components/picture/PictureInfo.vue'
import PictureDisplay from '@/components/picture/PictureDisplay.vue'
import VueContainer from '@/components/UI/VueContainer.vue'
import VueLoader from '@/components/UI/VueLoader.vue'
import PictureGallery from '@/components/picture/PictureGallery.vue'

export default defineComponent({
  name: 'MainPage',
  components: { PictureGallery, VueLoader, VueContainer, MainPageContent, PictureInfo, PictureDisplay },
  data: () => ({
    mediaData: null as IMediaData | null,
    mediaGallery: [] as IMediaData[] | null,
    isLoading: true
  }),
  created () {
    this.getMediaData()
    this.getMediaGallery()
  },
  methods: {
    async getMediaData () {
      this.mediaData = await MediaOfDay()

      setTimeout(() => {
        this.isLoading = false
      }, 500)
    },
    async getMediaGallery () {
      this.mediaGallery = await MediaGallery()
    }
  }
})
</script>

<style lang="scss" scoped>
  section {
    padding-top: 48px;
  }

  .section {
    height: 100vh;
  }

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

  .gallery {
    background-color: map-get($grey, "200");
    height: 600px;

    &__title {
      @include font-h2()
    }
  }
</style>
