<template>
  <div>
    <div>
      <router-link to="home">home</router-link> |
      <router-link to="sandbox01">sandbox01</router-link> |
      <router-link to="sandbox02">sandbox02</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
