<template>
  <vue-loader v-if="isLoading"/>
  <article v-else >
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

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

import { fetchMediaGallery, fetchMediaOfDay } from '@/API/APOD'

import { IMediaData } from '@/types/API/media'
import PictureInfo from '@/components/picture/PictureInfo.vue'
import PictureDisplay from '@/components/picture/PictureDisplay.vue'
import VueContainer from '@/components/UI/VueContainer.vue'
import VueLoader from '@/components/UI/VueLoader.vue'
import PictureGallery from '@/components/picture/PictureGallery.vue'

const mediaData = ref<IMediaData>()
const mediaGallery = ref<IMediaData[]>()
const isLoading = ref(true)

onBeforeMount(() => {
  getMediaData()
  getMediaGallery()
})

const getMediaData = async () => {
  mediaData.value = await fetchMediaOfDay()

  setTimeout(() => {
    isLoading.value = false
  }, 500)
}

const getMediaGallery = async () => {
  mediaGallery.value = await fetchMediaGallery()
}
</script>

<style lang="scss" scoped>
  section {
    padding-top: 48px;
  }

  .section {
    height: 100vh;
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
