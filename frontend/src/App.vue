<template>
  <v-app>
    <v-app-bar app clipped-left>
      <!-- navbar component goes here -->
    </v-app-bar>
    <v-navigation-drawer app clipped="true">
      <!-- List of todos go here -->
    </v-navigation-drawer>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- footer goes here -->
      <v-row justify="center" no-gutters>
        <strong> To-Do App </strong> | {{ new Date().getFullYear() }} |
        <i> by Til</i>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "App",

  components: {},

  data: () => ({
    //
  }),
});
</script>
