<template>
  <div class="tooltip">
    <p>{{title}}</p>
    <slot/>
    <span
      :class="`tooltip__text--${this.position}`"
      class="tooltip__text"
      :style="classesObject"
      ref="tittleRef"
    >
      {{tooltip}}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { EPosition } from '@/types/components/VueTooltip'
/**
 * Компонент показывающий подсказку
 */
export default defineComponent({
  name: 'VueTooltip',
  props: {
    title: {
      type: String
    },
    tooltip: {
      type: String
    },
    position: {
      type: String as PropType<EPosition>,
      default: EPosition.right
    }
  },
  data () {
    return {
      titleHeight: null
    }
  },
  mounted () {
    this.titleHeight = (this.$refs?.tittleRef as any)?.clientHeight
  },
  computed: {
    classesObject () {
      return {
        height: `${this.titleHeight}px`,
        marginLeft: `cale(${this.titleHeight})`,
        transform: 'translateX(-50%)'
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  /* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
  &:hover {
    .tooltip__text {
      visibility: visible;

    }
  }
  &__text {
    visibility: hidden;
    width: fit-content;
    background-color: black;
    color: #fff;
    text-align: center;
    padding: 4px;
    border-radius: 6px;

    &--right {
      top: -5px;
      left: 105%;
    }

    &--left {
      top: -5px;
      right: 105%;
    }

    &--top {
      bottom: 100%;
      left: 50%;
    }

    &--bottom {
      top: 100%;
      left: 50%;
    }
    /* Position the tooltip text - see examples below! */
    position: absolute;
    z-index: 1;
  }
}
</style>
