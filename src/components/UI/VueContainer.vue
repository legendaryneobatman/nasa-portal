<template>
  <div :class="classObject">
    <slot>{{content}}</slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
/**
 *  Компонент контейнер разной ширины
 * */
export default defineComponent({
  name: 'VueContainer',
  props: {
    content: { type: undefined },
    lg: { type: Boolean, default: true },
    xl: { type: Boolean, default: false }
  },
  computed: {
    classObject () {
      return {
        container: true,
        'container--lg': this.lg,
        'container--xl': this.xl
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  .container {
    padding: 0 16px;

    &--lg {
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
    }

    &--xl {
      max-width: 1500px;
      width: 100%;
      margin: 0 auto;
    }
  }
</style>
