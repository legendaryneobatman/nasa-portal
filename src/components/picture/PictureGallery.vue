<template>
  <div class="container">
    <vue-slider :gallery="formattedMediaGallery"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VueSlider from '@/components/UI/vue-slider/VueSlider.vue'
import { IMediaData } from '@/types/API/media'

export default defineComponent({
  name: 'PictureGallery',
  components: { VueSlider },
  props: {
    mediaGallery: { type: Array as PropType<IMediaData[]> | [] }
  },
  computed: {
    formattedMediaGallery () {
      if (this.mediaGallery === null) return []
      return this.mediaGallery?.map(({ url }) => (url))
    }
  }
})
</script>

<style lang="scss" scoped>
  .container {
    height: 100%;
    position: relative;
  }
</style>
