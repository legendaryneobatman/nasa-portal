<template>
  <div>
    <div class="mt-4 mb-4">
      <span class="text-h3">Explore some pages with interesting content</span>
    </div>
    <v-select v-model="selectedSortOption" :items="sortOptions" />
    <v-row>
      <v-col class="v-col-4" v-for="topic in sortedTopics" :key="topic.id">
        <topic-card :title="topic.title" :link="topic.link" :description="topic.description" :image="topic.image" />
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import TopicCard, { ITopicCardProps } from "@/components/TopicCard.vue"
import { computed, ref } from "vue"

type TopicItem = ITopicCardProps & { id: string | number }
const sortOptions = ["not selected", "desc", "asc"]
const selectedSortOption = ref(sortOptions[0])
const topics: TopicItem[] = [
  {
    id: 1,
    link: "/picture-of-the-day",
    title: "Picture of the day",
    description: "Check which asteroid suits for the day",
    image:
      "https://cdn.images.express.co.uk/img/dynamic/151/590x/space-news-cosmic-storm-quasar-black-hole-1270850.webp?r=1587240137607",
  },
  {
    id: 2,
    link: "/media-gallery",
    title: "Media gallery",
    description: "Here u can check images of any day u pick",
    image:
      "https://services.meteored.com/img/article/cataclismo-cosmico-captado-inedito-fenomeno-america-do-norte-europa-astronomia-347721-1_768.jpg",
  },
]

const sortedTopics = computed(() => {
  const copyTopics = [...topics]
  if (selectedSortOption.value === sortOptions[1]) {
    return copyTopics.sort((topicPrevious: TopicItem, topicCurrent: TopicItem) =>
      topicPrevious.title.localeCompare(topicCurrent.title)
    )
  }
  if (selectedSortOption.value === sortOptions[3]) {
    return copyTopics.sort((topicPrevious: TopicItem, topicCurrent: TopicItem) =>
      topicCurrent.title.localeCompare(topicPrevious.title)
    )
  }

  return topics
})
</script>

<style scoped></style>
