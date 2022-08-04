<template>
  <page-header title="nasa-portal"/>
  <router-view/>
</template>

<script>
import PageHeader from '@/components/PageHeader'
export default {
  components: {
    PageHeader
  }
}
</script>

<style>
body {
  margin: 0;
}
</style>
