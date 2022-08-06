<template>
  <div class="container">
    <vue-slider
      :gallery="mediaGallery"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VueSlider from '@/components/UI/vue-slider/VueSlider.vue'

export default defineComponent({
  name: 'PictureGallery',
  components: { VueSlider },
  props: {
    mediaGallery: {
      type: Array as PropType<string[]>
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
