<template>
  <header class="header">
    <span class="header__title">
      {{ title }}
    </span>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader',
  props: {
    title: {
      type: String,
      required: true
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  @include font-logo();

  position: sticky;
  z-index: $header;
  top: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  height: 64px;
  width: 100%;
  box-shadow: 1px 8px 9px 0px rgba(34, 60, 80, 0.14);
  background-color: white;

  &__title {
    display: flex;
    margin: 16px 24px;
    background: $logo-gradient;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
</style>
