<template>
  <v-parallax style="height: 2000px" :src='require("@/assets/images/preview-space.jpg")'>
    <div class="welcome">
      <span class="welcome__title">Welcome to NASA portal'</span>
      <p class="welcome__subtitle">The site that shows you cool stuff about nasa</p>
      <v-btn to="/topics">Click to explore</v-btn>
    </div>
  </v-parallax>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.main-page {
  width: 100%;
  height: 100%;
}

.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40vh;
  justify-content: flex-start;
  height: 100%;
  text-align: center;
  color: white;
  text-shadow: 4px 4px 2px rgba(197, 197, 197, 0.6);

  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  &__title {
    @include font-h1()
  }

  &__subtitle {
    @include font-h2()
  }
}
</style>
