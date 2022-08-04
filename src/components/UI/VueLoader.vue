<template>
  <div class="loader" :style="{borderTopColor: color}"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

/**
 * Компонент лоадер
 * крутилка на время загрузки
 */
export default defineComponent({
  name: 'VueLoader',
  props: {
    color: {
      type: String,
      default: '#006699'
    }
  }
})
</script>

<style lang="scss" scoped>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  border-top: 16px solid;
  background-color: map-get($grey, "100");
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
