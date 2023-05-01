<template>
  <component :is="layoutComponent">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { Component, defineAsyncComponent, shallowRef, watch } from 'vue'

const route = useRoute()
const layoutComponent = shallowRef<Component>()
watch(
  () => route.meta.layout ?? 'DefaultLayout',
  layout => {
    layoutComponent.value = defineAsyncComponent(() =>
      import(`@/layouts/${layout}.vue`)
    )
  },
  { immediate: true }
)

</script>

<style scoped>

</style>
