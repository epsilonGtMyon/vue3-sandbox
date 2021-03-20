<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <main id="main">
      <router-view />
    </main>
  </div>
</template>


<style lang="scss" scoped>
#nav {
  height: 2rem;
}
#main {
  height: calc(100% - 2rem);
}
</style>