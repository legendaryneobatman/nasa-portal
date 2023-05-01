<template>
  <v-card>
    <v-card-title>{{props.title}}</v-card-title>
    <v-card-text>{{props.description}}</v-card-text>
    <v-card-actions>
      <v-btn :to="props.link">check out</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
export interface ITopicCardProps {
  link: string,
  title: string,
  description: string,
}
const props = defineProps<ITopicCardProps>()
</script>

<style scoped>

</style>
