<template>
  <v-layout full-height>
    <v-app-bar
      app
      density="default"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main >
      <v-container>
        <router-view/>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script setup lang="ts">
</script>

<style scoped>

</style>
