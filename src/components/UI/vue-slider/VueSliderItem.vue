<template>
    <div
      class="slide"
    >
      <img class="slide__image" :src="image" alt=""/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'vue-slider-item',
  props: {
    image: { type: String }
  }
})
</script>

<style lang="scss" scoped>
/* Hide the images by default */
.slide {
  &__image {
    width: inherit;
    height: 500px;
  }
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

</style>
