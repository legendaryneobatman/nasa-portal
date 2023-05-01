<template>
  <div>
    this is default page
  </div>
</template>

<script setup lang="ts">

import { useRoute, useRouter } from 'vue-router'
import { onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

onMounted(() => console.log(route, router))
</script>

<style scoped>

</style>
