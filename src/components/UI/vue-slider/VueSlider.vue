<template>
  <div ref="slider" class="slider">
    <div class="slider__count">{{`${activeSlideIndex}/${gallery?.length}`}}</div>
    <div
      ref="slider-list"
      class="slider__list"
      :style="{ transform: `translateX(${translateX})` }"
    >
      <vue-slider-item
        ref="sliderItem"
        v-for="picture in gallery"
        :key="picture"
        :image="picture"
        class="slider__item"
        :style="{ width: `${containerWidth}px` }"
      />
    </div>
    <a class="prev" @click="prevSlide">&#10094;</a>
    <a class="next" @click="nextSlide">&#10095;</a>
  </div>
  <div class="dots">
    <slot
      name="picture-info"
    />
    <span
      class="dots__item"
      v-for="(dot, dotIndex) in gallery"
      :key="dot + dotIndex"
      @click="selectSlide(dotIndex + 1)"
    />
  </div>
  .
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import VueSliderItem from '@/components/UI/vue-slider/VueSliderItem.vue'

export default defineComponent({
  name: 'VueSlider',
  components: { VueSliderItem },
  props: {
    /** Массив изображений */
    gallery: {
      type: Array as PropType<string[]>,
      default: () => ['http://tny.im/sWr', 'http://tny.im/sWr']
    }
  },
  data: () => ({
    activeSlideIndex: 1,
    containerWidth: 0
  }),
  computed: {
    translateX () {
      return `-${this.containerWidth * (this.activeSlideIndex - 1)}px`
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeUnmount () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    selectSlide (index: number) {
      this.activeSlideIndex = index
    },
    nextSlide () {
      if (this.activeSlideIndex === this.gallery?.length) {
        this.activeSlideIndex = 1
      } else {
        this.activeSlideIndex += 1
      }
    },
    prevSlide () {
      if (this.activeSlideIndex === 1) {
        this.activeSlideIndex = this.gallery.length
      } else {
        this.activeSlideIndex -= 1
      }
    },
    onResize () {
      this.containerWidth = (this.$refs.slider as HTMLDivElement).offsetWidth
    }
  }
})
</script>

<style lang="scss" scoped>
/* Slideshow container */
.slider {
  max-width: 1000px;
  position: relative;
  margin: auto;
  overflow: hidden;

  &__list {
    display: flex;
    align-items: center;
    width: 100%;

    transition: all ease-in-out .3s;
  }

  &__item {
    width: 100%;
  }

  &__count {
    position: absolute;
    top: 0;
    padding: 8px 12px;
    color: #f2f2f2;
    font-size: 12px;
  }
}
/* Next & previous buttons */
  .prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
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

/* The dots/bullets/indicators */
.dots{
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  &__item {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
}

.active, .dot:hover {
  background-color: #717171;
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
