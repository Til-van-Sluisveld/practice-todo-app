<template>
  <v-app>
    <v-app-bar app>
      <!-- navbar elements go here -->
      <v-row id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </v-row>
    </v-app-bar>

    <!-- <v-navigation-drawer app clipped="true">  
    </v-navigation-drawer> -->

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <v-row justify="center" no-gutters>
        <strong> To-Do App </strong> | {{ new Date().getFullYear() }} |
        <i> by Til</i>
      </v-row>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
