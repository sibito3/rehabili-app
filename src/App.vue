<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <nav>
      <router-link to="/">Main</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  mounted: () => {
    // ダークモードに変更
    document.querySelector("html")?.setAttribute("data-bs-theme", "dark");
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  margin-top: 60px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c5038;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
