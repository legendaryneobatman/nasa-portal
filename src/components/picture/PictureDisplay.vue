<template>
  <div class="picture-display">
    <img
      class="picture-display__image"
      v-if="mediaType === 'image'"
      :src="mediaSource"
    >
    <video class="picture-display__video" v-else>
      <source  :src="mediaSource">
    </video>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PictureDisplay',
  props: {
    mediaSource: {
      type: String
    },
    mediaType: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.picture-display {
  padding: 16px;
  background-color: map-get($grey, "400");
  &__image {
    width: 100%;
    height: 100%;
  }
  &__video {}
  }
</style>
