<template>
  <v-row>
    <v-col class="v-col-4" v-for="topic in topics" :key="topic.id">
      <topic-card :title="topic.title" :link="topic.link" :description="topic.description" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import TopicCard, { ITopicCardProps } from '@/components/TopicCard.vue'
type TopicItem = ITopicCardProps & { id: string | number }
const topics: TopicItem[] = [
  {
    id: 1,
    link: '/asteroid-of-the-day',
    title: 'Asteroid of the day',
    description: 'Check which asteroid suits for the day'
  },
  {
    id: 2,
    link: 'https://example.com/article2',
    title: 'Article 2',
    description: 'This is the description for article 2.'
  },
  {
    id: 3,
    link: 'https://example.com/article3',
    title: 'Article 3',
    description: 'This is the description for article 3.'
  },
  {
    id: 4,
    link: 'https://example.com/article3',
    title: 'Article 4',
    description: 'This is the description for article 3.'
  }
]

</script>

<style scoped>

</style>
